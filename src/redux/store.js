// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);


//=============== After ========================
import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
// import { contactsReducer, filterReducer } from "./reducer"; //before

//after #2
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

//LS
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
    key: 'contacts',
    storage,
  }

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);
// console.log('persistedContactsReducer', persistedContactsReducer);
//


//было
// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     }
// });
// console.log('store', store)

//стало (persist_LS)
export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// console.log('store', store)

export const persistor = persistStore(store);
