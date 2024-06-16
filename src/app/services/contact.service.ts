import { Injectable } from "@angular/core";
import { Contact } from "../models";
import { faker } from "@faker-js/faker";

@Injectable({ providedIn: "root" })
export class ContactService {
    private nextContactId = 1;

    createEmpty(): Contact {
        return { address: "", email: "", id: 0, name: "", phone: "", surname: "" };
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
