import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [
    { name: "Bob", number: "+5233353132", id: "1" },
    { name: "Marley", number: "+5255555535", id: "2" },
];

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer (state, action) {
                state.push(action.payload);
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
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

console.log('contactsReducer', contactsReducer)