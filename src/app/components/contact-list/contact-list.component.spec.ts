import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactListComponent } from "./contact-list.component";
import { TableModule } from "primeng/table";

describe("ContactListComponent", () => {
    let component: ContactListComponent;
    let fixture: ComponentFixture<ContactListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TableModule],
            declarations: [ContactListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
