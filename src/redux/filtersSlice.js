import { createSlice } from "@reduxjs/toolkit";
import {filterStatus} from './constants'

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: filterStatus.all,
    },
    reducers: {
        changeFilter(state, action) {
            state.search = action.payload;
        },
        setStatusFilter(state, action) {
            state.status = action.payload;
        },
    }
});

export const { changeFilter, setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;