import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/Contact';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private contacts: Contact[];
  private selectedContact: Contact;
  private search: string;
  private searchn: string;
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getAll().subscribe(
      res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);
        this.contacts = resJSON.data.Contacts;
      },
      error => {
        alert(error);
      }
    );
  }

  searchAll() {
    if (this.search === '') {
      this.contactService.getAll().subscribe(
        res => {
          let resStr = JSON.stringify(res);
          let resJSON = JSON.parse(resStr);
          this.contacts = resJSON.data.Contacts;
        },
        error => {
          alert(error);
        }
      );
    } else {
      this.contactService.search({ tosearch: this.search }).subscribe(
        res => {
          let resStr = JSON.stringify(res);
          let resJSON = JSON.parse(resStr);
          this.contacts = resJSON.data.Contacts;
        },
        error => {
          alert(error);
        }
      );
    }
  }


  addContact() {
    this.router.navigate(['/add-contact']);
  }

  editContact(id) {
    this.router.navigate(['/edit-contact'], { queryParams: { id: id } });
  }

  deleteContact(id) {
    this.contactService.delete(id).subscribe(
      res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);
        if (resJSON.statusCode === 1) {
          alert("Deleted!");
          this.router.navigate(["/"]);
        } else {
          alert("Internal server error at backend.");
        }
      },
      Error => {
        alert("failed while requesting");
      }
    );
  }
}
