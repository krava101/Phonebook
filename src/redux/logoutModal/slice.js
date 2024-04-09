import { createSlice } from "@reduxjs/toolkit";

const logoutModalSlice = createSlice({
    name: 'logoutModal',
    initialState: {
        isModalOpen: false,
    },
    reducers: {
        modalToggle(state) {
            state.isModalOpen = !state.isModalOpen;
        }
    }
})

export const { modalToggle } = logoutModalSlice.actions;
export const logoutModalReducer = logoutModalSlice.reducer;