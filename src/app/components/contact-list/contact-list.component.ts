import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { Contact } from "../../models";

@Component({
    selector: "contact-list",
    templateUrl: "./contact-list.component.html",
    styleUrl: "./contact-list.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent {
    @Input() contacts: Contact[] | null = [];
    @Output() select = new EventEmitter<Contact>();

    trackContact(contact: Contact): number {
        return contact.id;
    }
}
