import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants.js";
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
    reducers: {
        addContact(state, action) {
            const newContact = {
                id: nanoid(),
                ...action.payload
            };
            state.items.push(newContact);
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;