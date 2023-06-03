import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = {
    contacts: [],
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer (state, action) {
                state.contacts.push(action.payload);// state.push
            },
            prepare(contactName, contactNumber) {
                return {
                    payload: {
                        id: nanoid(),
                        name: contactName,
                        number: contactNumber,
                    }
                }
            }
        },

        deleteContact(state, action) {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);//было state.findIndex
            state.contacts.splice(index, 1);// state.splice
        },
    }
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;