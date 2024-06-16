import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TableModule } from "primeng/table";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

@NgModule({
    declarations: [AppComponent, ContactListComponent],
    imports: [BrowserModule, AppRoutingModule, TableModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
