import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact;
  contactID;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  

  ngOnInit() {
    this.contact = {
      name: '',
    };
    this.route.queryParams.subscribe(params => {
      this.contactID = +params["id"];
    });
    this.getContactInfo(this.contactID);
  }

  getContactInfo(id) {
    this.contactService.getByID(id).subscribe(
      res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);
        this.contact = resJSON.data;
        
      },
      error => {
        alert(error);
      }
    );
  }

  edit() {
    this.contactService.editContact(this.contact).subscribe(res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);
        if (resJSON.statusCode === 1) {
          alert("Edited!");
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
