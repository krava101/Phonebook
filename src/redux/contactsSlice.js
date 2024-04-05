import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts, toggleToFavContact } from "./contactsOps";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(e => e.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(toggleToFavContact.pending, handlePending)
      .addCase(toggleToFavContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        for (const contact of state.items) {
          if (contact.id === action.payload.id) {
            contact.favorite = !contact.favorite;
            break;
          }
        }
      })
      .addCase(toggleToFavContact.rejected, handleRejected)
  }
});

export const contactsReducer = contactsSlice.reducer;