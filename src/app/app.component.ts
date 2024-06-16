import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Contact } from "./models";
import { ContactService } from "./services";
import { ContactsState, addContact, selectContact } from "./state";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    constructor(private readonly contactService: ContactService, private readonly store: Store<{ contacts: ContactsState }>) {}

    contacts$ = this.store.select("contacts", "all");
    selectedContact$ = this.store.select("contacts", "selected");

    ngOnInit(): void {
        const contacts = this.contactService.generateContacts(100);
        // [todo] to be replaced by effect (or a singular action to add multiple at once)
        contacts.forEach(contact => this.store.dispatch(addContact({ contact })));
    }

    selectContact(contact: Contact): void {
        this.store.dispatch(selectContact({ contact }));
    }

    addContact(contact: Contact): void {
        this.store.dispatch(addContact({ contact }));
    }
}
