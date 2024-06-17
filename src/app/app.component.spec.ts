import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { AppComponent } from "./app.component";
import { ContactCreateFormComponent } from "./components/contact-create-form/contact-create-form.component";
import { ContactDetailViewComponent } from "./components/contact-detail-view/contact-detail-view.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { ContactEffects, contactsReducer } from "./state";

describe("AppComponent", () => {
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
    });

    it("should create the app", () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
