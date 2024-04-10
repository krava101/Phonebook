import { createSlice } from "@reduxjs/toolkit";

const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState: {
    isMobileMenuOpen: false,
  },
  reducers: {
    mobileMenuToggle(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    }
  }
})

export const { mobileMenuToggle } = mobileMenuSlice.actions;
export const mobileMenuReducer = mobileMenuSlice.reducer;