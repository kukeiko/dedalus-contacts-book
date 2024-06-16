import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { AppComponent } from "./app.component";
import { ContactDetailViewComponent } from "./components/contact-detail-view/contact-detail-view.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

describe("AppComponent", () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, TableModule, CardModule],
            declarations: [AppComponent, ContactListComponent, ContactDetailViewComponent],
        }).compileComponents();
    });

    it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'dedalus-contacts-book'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual("dedalus-contacts-book");
    });

    it("should render title", () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("dedalus-contacts-book");
    });
});
