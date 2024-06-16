import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { ContactCreateFormComponent } from "./contact-create-form.component";

function getNamedInputElement(fixture: ComponentFixture<any>, name: string): HTMLInputElement {
    const element = (fixture.nativeElement as HTMLElement).querySelector<HTMLInputElement>(`input[name=${name}]`);

    if (!element) {
        throw new Error(`input element w/ name ${name} not found`);
    }

    return element;
}

function simulateInput(element: HTMLInputElement, value: string): void {
    element.value = value;
    element.dispatchEvent(new Event("input"));
}

describe("ContactCreateFormComponent", () => {
    let component: ContactCreateFormComponent;
    let fixture: ComponentFixture<ContactCreateFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, ButtonModule, InputTextModule, CardModule],
            declarations: [ContactCreateFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactCreateFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should bind contact properties from textboxes", () => {
        // arrange & act
        simulateInput(getNamedInputElement(fixture, "name"), "foo");
        simulateInput(getNamedInputElement(fixture, "surname"), "bar");
        simulateInput(getNamedInputElement(fixture, "email"), "baz");
        simulateInput(getNamedInputElement(fixture, "phone"), "khaz");
        simulateInput(getNamedInputElement(fixture, "address"), "mo");
        fixture.detectChanges();

        // assert
        expect(component.contact.name).toEqual("foo");
        expect(component.contact.surname).toEqual("bar");
        expect(component.contact.email).toEqual("baz");
        expect(component.contact.phone).toEqual("khaz");
        expect(component.contact.address).toEqual("mo");
    });

    it("should disable create button if required fields are not filled out", () => {
        // arrange & act
        const button = (fixture.nativeElement as HTMLElement).querySelector("button") as HTMLButtonElement;
        simulateInput(getNamedInputElement(fixture, "phone"), "khaz");
        simulateInput(getNamedInputElement(fixture, "address"), "mo");
        fixture.detectChanges();

        // assert
        expect(button.disabled).toEqual(true);
    });

    it("should enabled create button if required fields are filled out", () => {
        // arrange & act
        const button = (fixture.nativeElement as HTMLElement).querySelector("button") as HTMLButtonElement;
        simulateInput(getNamedInputElement(fixture, "name"), "foo");
        simulateInput(getNamedInputElement(fixture, "surname"), "bar");
        simulateInput(getNamedInputElement(fixture, "email"), "baz");
        fixture.detectChanges();

        // assert
        expect(button.disabled).toEqual(false);
    });
});
