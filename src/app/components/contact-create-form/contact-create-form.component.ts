import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Contact } from "../../models";
import { ContactService } from "../../services";

@Component({
    selector: "contact-create-form",
    templateUrl: "./contact-create-form.component.html",
    styleUrl: "./contact-create-form.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCreateFormComponent implements OnInit {
    constructor(private readonly contactService: ContactService) {}

    contact!: Contact;
    @Output() create = new EventEmitter<Contact>();
    @ViewChild(NgForm) form?: NgForm;

    ngOnInit(): void {
        this.contact = this.contactService.createEmpty();
    }

    onCreateClick(): void {
        this.create.next(this.contact);
        this.contact = this.contactService.createEmpty();
        this.form?.resetForm();
    }
}
