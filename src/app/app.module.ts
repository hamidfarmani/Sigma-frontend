import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        ContactsComponent,
        AddContactComponent,
        EditContactComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        ContactService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
