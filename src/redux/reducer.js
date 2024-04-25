import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import contactsReducer from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["contacts"]
};

const rootReducer = combineReducers({
    contacts: persistReducer(persistConfig, contactsReducer),
    filters: filtersReducer
});

export default rootReducer;