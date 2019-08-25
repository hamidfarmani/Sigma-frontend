import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { AppComponent } from "./app.component";
import { AddContactComponent } from "./components/contacts/add-contact/add-contact.component";
import { EditContactComponent } from "./components/contacts/edit-contact/edit-contact.component";

const routes: Routes = [
  {
    path: "AppComponent",
    component: AppComponent
  },
  {
    path: "",
    component: ContactsComponent,
    children: [
      {
        path: "add-contact",
        component: AddContactComponent
      },
      {
        path: "edit-contact",
        component: EditContactComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
