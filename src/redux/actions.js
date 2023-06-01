// import { nanoid } from "nanoid";

// export const addContact = (contactName, contactNumber) => {
//     return {
//         type: "contacts/addContact",
//         payload: {
//             id: nanoid(),
//             name: contactName,
//             number: contactNumber,
//         },
//     }
// };


// export const deleteContact = contactId => {
//     return {
//         type: "contacts/deleteContact",
//         payload: contactId,
//     }
// };


// export const setFilter = value => {
//     return {
//         type: "filter/setFilter",
//         payload: value,
//     }
// };

//=============== After ========================
// import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// export const addContact = createAction("contacts/addContact", (contactName, contactNumber) => {
//     return {
//         payload: {
//             id: nanoid(),
//             name: contactName,
//             number: contactNumber,
//         },
//     }
// });

// export const deleteContact = createAction("contacts/deleteContact");

// export const setFilter = createAction("filter/setFilter");