import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactCreateFormComponent } from "./components/contact-create-form/contact-create-form.component";
import { ContactDetailViewComponent } from "./components/contact-detail-view/contact-detail-view.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

@NgModule({
    imports: [BrowserModule, AppRoutingModule, TableModule, CardModule, ButtonModule, InputTextModule, FormsModule],
    declarations: [AppComponent, ContactListComponent, ContactDetailViewComponent, ContactCreateFormComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
