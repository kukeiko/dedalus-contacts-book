import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Contact } from "../../models";

@Component({
    selector: "contact-detail-view",
    templateUrl: "./contact-detail-view.component.html",
    styleUrl: "./contact-detail-view.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactDetailViewComponent {
    @Input() contact?: Contact;

    get fullName(): string {
        return this.contact ? `${this.contact.surname.toUpperCase()} ${this.contact.name}` : "";
    }
}
