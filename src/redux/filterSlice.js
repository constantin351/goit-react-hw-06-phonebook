import { createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "./constants";

const filterInitialState = statusFilter.filter;

const filterSlice = createSlice({
    name: "filter",
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            // state = action.payload; //
            return action.payload;
        }
    }
});

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;