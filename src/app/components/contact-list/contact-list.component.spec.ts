import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { ContactListComponent } from "./contact-list.component";

describe("ContactListComponent", () => {
    let component: ContactListComponent;
    let fixture: ComponentFixture<ContactListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TableModule, CardModule],
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
