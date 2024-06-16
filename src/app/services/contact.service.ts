import { Injectable } from "@angular/core";
import { faker } from "@faker-js/faker";
import { Contact } from "../models";

@Injectable({ providedIn: "root" })
export class ContactService {
    createEmpty(): Contact {
        return { address: "", email: "", id: 0, name: "", phone: "", surname: "" };
    }

    generateContacts(quantity: number): Contact[] {
        return Array(quantity)
            .fill(0)
            .map<Contact>(() => ({
                id: 0,
                address: faker.location.streetAddress(),
                email: faker.internet.email(),
                name: faker.person.firstName(),
                phone: faker.phone.number(),
                surname: faker.person.lastName(),
            }));
    }
}
