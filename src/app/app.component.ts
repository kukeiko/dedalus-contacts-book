import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Contact } from "./models";
import { ContactsState, addContact, loadContacts, selectContact } from "./state";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    constructor(private readonly store: Store<{ contacts: ContactsState }>) {}

    contacts$ = this.store.select("contacts", "all");
    selectedContact$ = this.store.select("contacts", "selected");

    ngOnInit(): void {
        this.store.dispatch(loadContacts());
    }

    selectContact(contact: Contact): void {
        this.store.dispatch(selectContact({ contact }));
    }

    addContact(contact: Contact): void {
        this.store.dispatch(addContact({ contact }));
    }
}
