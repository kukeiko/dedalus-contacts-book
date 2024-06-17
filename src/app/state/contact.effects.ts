import { Injectable } from "@angular/core";
import { ContactService } from "../services";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { loadContacts, loadContactsSuccess } from "./contact.actions";

@Injectable()
export class ContactEffects {
    constructor(private readonly actions$: Actions, private readonly contactService: ContactService) {}

    loadContacts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadContacts),
            exhaustMap(() =>
                this.contactService.getContacts$().pipe(
                    map(contacts => loadContactsSuccess({ contacts })),
                    catchError(() => EMPTY)
                )
            )
        )
    );
}
