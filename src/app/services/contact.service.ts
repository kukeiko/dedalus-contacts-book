import { Injectable } from "@angular/core";
import { faker } from "@faker-js/faker";
import { Observable, of } from "rxjs";
import { Contact } from "../models";

@Injectable({ providedIn: "root" })
export class ContactService {
    createEmpty(): Contact {
        return { address: "", email: "", id: 0, name: "", phone: "", surname: "" };
    }

    generateContacts(quantity: number): Contact[] {
        let nextId = 1;
        return Array(quantity)
            .fill(0)
            .map<Contact>(() => ({
                id: nextId++,
                address: faker.location.streetAddress(),
                email: faker.internet.email(),
                name: faker.person.firstName(),
                phone: faker.phone.number(),
                surname: faker.person.lastName(),
            }));
    }

    getContacts$(): Observable<Contact[]> {
        const generatedContacts = this.generateContacts(100);

        return of(generatedContacts);
    }
}
