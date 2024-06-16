import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContactCreateFormComponent } from "./contact-create-form.component";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";

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
});
