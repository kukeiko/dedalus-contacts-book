import { Component, OnInit } from "@angular/core";
import { Contact } from "./models";
import { faker } from "@faker-js/faker";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    title = "dedalus-contacts-book";
    contacts: Contact[] = [];
    nextContactId = 1;

    ngOnInit(): void {
        this.contacts = this.generateContacts(100);
    }

    generateContacts(quantity: number): Contact[] {
        return Array(quantity)
            .fill(0)
            .map<Contact>(() => ({
                id: this.nextContactId++,
                address: faker.location.streetAddress(),
                email: faker.internet.email(),
                name: faker.person.firstName(),
                phone: faker.phone.number(),
                surname: faker.person.lastName(),
            }));
    }
}
