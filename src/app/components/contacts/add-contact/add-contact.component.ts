import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.contact = {
      name: ""
    };
  }

  addContact() {
    this.contactService.createContact(this.contact).subscribe(res => {
        let resStr = JSON.stringify(res);
        let resJSON = JSON.parse(resStr);
        if (resJSON.statusCode === 1) {
          alert("Saved!");
          this.router.navigate(["/"]);
        } else if (resJSON.statusCode === -3) {
          alert("You must enter the name.");
        } else if (resJSON.statusCode === -4) {
          alert(
            "Check the format."
          );
        } else if (resJSON.statusCode === -42) {
          alert("Password has been used before.");
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