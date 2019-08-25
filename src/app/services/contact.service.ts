import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { Contact } from "../models/Contact";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class ContactService {
  constructor(private http: HttpClient) {}

  private ContactURL = "http://localhost:1589/contacts";

  getAll(): Observable<any> {
    return this.http.get(this.ContactURL);
  }

  public getByName(name): Observable<any> {
    return this.http.get(this.ContactURL + "/" + name + "/byname");
  }

  public getByID(id): Observable<any> {
    return this.http.get(this.ContactURL + "/" + id);
  }

  public search(search): Observable<any> {
    return this.http.post(this.ContactURL + "/search" , search );
  }

  public searchNumber(search): Observable<any> {
    return this.http.post(this.ContactURL + "/search/number" , search );
  }

  public delete(id) {
    return this.http.delete(this.ContactURL + "/" + id);
  }

  public createContact(contact) {
    return this.http.post<Contact>(this.ContactURL , contact);
  }

  public editContact(contact) {
    return this.http.patch<Contact>(this.ContactURL+ "/"+ contact.id, contact);
  }

}
