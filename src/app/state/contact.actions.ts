import { createAction, props } from "@ngrx/store";
import { Contact } from "../models";

export const addContact = createAction("Add Contact", props<{ contact: Contact }>());
export const selectContact = createAction("Select Contact", props<{ contact: Contact }>());
