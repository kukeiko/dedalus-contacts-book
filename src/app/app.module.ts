import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactDetailViewComponent } from "./components/contact-detail-view/contact-detail-view.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

@NgModule({
    imports: [BrowserModule, AppRoutingModule, TableModule, CardModule],
    declarations: [AppComponent, ContactListComponent, ContactDetailViewComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
