// import { combineReducers } from "redux";
// import { statusFilter } from "./constants";

// const contactsInitialState = [
//     { name: "Bob", number: "+5233353132", id: "1" },
//     { name: "Marley", number: "+5255555535", id: "2" },
// ];
// // {
// //     contacts: [
//         // [
//         // { name: "Bob", number: "+5233353132", id: "1" },
//         // { name: "Marley", number: "+5255555535", id: "2" }]
// //     ],
// //     filter: statusFilter.filter,
// // }

// const contactsReducer = (state = contactsInitialState, action) => {
//     switch (action.type) { 
//         case "contacts/addContact":
//             // return {
//             //     ...state,
//             //     contacts: [...state, action.payload],
//                return [...state, action.payload];
//             // };
        
//         case "contacts/deleteContact":
//             // return {
//             //     ...state,
//             //     contacts: state.filter(contact => 
//             //         contact.id !== action.payload),
//             // };
//             return state.filter(contact => contact.id !== action.payload);
//         // case "filter/setFilter":
//         //     return {
//         //         ...state,
//         //         filter: action.payload,
//         //     };
            
//         default:
//             return state;
//     }
// };

// const filterInitialState = statusFilter.filter
// // {
// //     filter: statusFilter.filter,
// // }

// const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
//         case "filter/setFilter":
//             return action.payload;
            
//             // {
//             //     ...state,
//             //     filter: action.payload,
//             // };
            
//         default:
//             return state;
//     }
// };

// export const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });


//=============== After ( #1 ) ========================
// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, setFilter } from "./actions";
// import { statusFilter } from "./constants";

// const contactsInitialState = [
//     { name: "Bob", number: "+5233353132", id: "1" },
//     { name: "Marley", number: "+5255555535", id: "2" },
// ];

// export const contactsReducer = (state = contactsInitialState, action) => {
//     switch (action.type) { 
//         case addContact.type:
//             return [...state, action.payload];

//         case deleteContact.type:
//             return state.filter(contact => contact.id !== action.payload);
            
//         default:
//             return state;
//     }
// };


// const filterInitialState = statusFilter.filter;

// export const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
//         case setFilter.type:
//             return action.payload;
            
//         default:
//             return state;
//     }
// };

//=============== After #2 ========================
// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, setFilter } from "./actions";
// import { statusFilter } from "./constants";

// const contactsInitialState = [
//     { name: "Bob", number: "+5233353132", id: "1" },
//     { name: "Marley", number: "+5255555535", id: "2" },
// ];

// export const contactsReducer = createReducer(contactsInitialState, {
//     [addContact]: (state, action) => {
//         return [...state, action.payload];
//     },
//     [deleteContact]: (state, action) => {
//         return state.filter(contact => contact.id !== action.payload);
//     },
// });


// const filterInitialState = statusFilter.filter;

// export const filterReducer = createReducer(filterInitialState, {
//     [setFilter]: (state, action) => {
//         return action.payload;
//     }
// })