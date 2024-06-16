import { createReducer, on } from "@ngrx/store";
import { Contact } from "../models";
import { addContact, selectContact } from "./contact.actions";

export type ContactsState = { all: Contact[]; selected?: Contact; nextId: number };

const initialState: ContactsState = {
    all: [],
    nextId: 1,
};

export const contactsReducer = createReducer(
    initialState,
    on(addContact, (state, { contact }) => {
        const nextId = state.nextId + 1;

        return {
            ...state,
            nextId,
            all: [...state.all, { ...contact, id: nextId }],
        };
    }),
    on(selectContact, (state, { contact }) => ({ ...state, selected: contact }))
);
