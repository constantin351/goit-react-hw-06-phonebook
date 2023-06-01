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
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer) //!!тут ошибка!!
console.log('persistedContactsReducer', persistedContactsReducer)
//


//было
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
});

//стало LS
// export const store = configureStore({
//     reducer: {
//         contacts: persistedContactsReducer,
//         filter: filterReducer,
//     }
// });

export const persistor = persistStore(store)
