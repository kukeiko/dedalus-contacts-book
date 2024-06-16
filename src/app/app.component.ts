import { Component, OnInit } from "@angular/core";
import { Contact } from "./models";
import { ContactService } from "./services";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    constructor(private readonly contactService: ContactService) {}

    title = "dedalus-contacts-book";
    contacts: Contact[] = [];
    nextContactId = 1;
    selectedContact?: Contact;

    ngOnInit(): void {
        this.contacts = this.contactService.generateContacts(100);
    }

    selectContact(contact: Contact): void {
        this.selectedContact = contact;
    }
}
