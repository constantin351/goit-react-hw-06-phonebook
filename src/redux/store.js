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

//Persist_Local storage
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
  }

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);


//было
// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     }
// });

//стало (persist_Local storage)
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

export const persistor = persistStore(store);
