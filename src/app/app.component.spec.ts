import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { of } from "rxjs";
import { AppComponent } from "./app.component";
import { ContactCreateFormComponent } from "./components/contact-create-form/contact-create-form.component";
import { ContactDetailViewComponent } from "./components/contact-detail-view/contact-detail-view.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { Contact } from "./models";
import { ContactService } from "./services";
import { ContactEffects, contactsReducer } from "./state";
import { getNamedInputElement, simulateInput } from "./testing";

describe("AppComponent", () => {
    const testContacts: Contact[] = [
        {
            name: "Susi",
            surname: "Sonne",
            address: "",
            email: "",
            id: 1,
            phone: "",
        },
    ];
    let contactService: ContactService;
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                TableModule,
                CardModule,
                ButtonModule,
                InputTextModule,
                StoreModule.forRoot({ contacts: contactsReducer }, {}),
                EffectsModule.forRoot([ContactEffects]),
            ],
            declarations: [AppComponent, ContactListComponent, ContactDetailViewComponent, ContactCreateFormComponent],
        }).compileComponents();

        contactService = TestBed.inject(ContactService);
        spyOn(contactService, "getContacts$").and.returnValue(of(testContacts));
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create the app", () => {
        expect(component).toBeTruthy();
    });

    it("should show contacts loaded from service", () => {
        const tableRows = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll("tbody tr"));

        testContacts.forEach((contact, index) => {
            expect(tableRows[index]).toBeDefined();
            expect(tableRows[index].querySelector("td.name")?.textContent).toEqual(contact.name);
            expect(tableRows[index].querySelector("td.surname")?.textContent).toEqual(contact.surname);
        });
    });

    it("should show newly created contact in the table", () => {
        // arrange & act
        simulateInput(getNamedInputElement(fixture, "name"), "foo");
        simulateInput(getNamedInputElement(fixture, "surname"), "bar");
        simulateInput(getNamedInputElement(fixture, "email"), "baz");
        simulateInput(getNamedInputElement(fixture, "phone"), "khaz");
        simulateInput(getNamedInputElement(fixture, "address"), "mo");
        fixture.detectChanges();
        (fixture.nativeElement as HTMLElement).querySelector("#create-contact")?.dispatchEvent(new Event("click"));
        fixture.detectChanges();

        const tableRows = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll("tbody tr"));

        // assert
        expect(tableRows[tableRows.length - 1].querySelector("td.name")?.textContent).toEqual("foo");
        expect(tableRows[tableRows.length - 1].querySelector("td.surname")?.textContent).toEqual("bar");
    });

    it("should show details of selected contact", () => {
        const tableRows = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll("tbody tr"));
        tableRows[0].dispatchEvent(new Event("click"));
        fixture.detectChanges();
        expect((fixture.nativeElement as HTMLElement).querySelector("label[for=name] + span")?.textContent).toEqual(testContacts[0].name);
        expect((fixture.nativeElement as HTMLElement).querySelector("label[for=surname] + span")?.textContent).toEqual(testContacts[0].surname);
        expect((fixture.nativeElement as HTMLElement).querySelector("label[for=email] + span")?.textContent).toEqual(testContacts[0].email);
        expect((fixture.nativeElement as HTMLElement).querySelector("label[for=phone] + span")?.textContent).toEqual(testContacts[0].phone);
        expect((fixture.nativeElement as HTMLElement).querySelector("label[for=address] + span")?.textContent).toEqual(testContacts[0].address);
    });
});
