import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts, renameContact} from "./operations";
import { logout } from "../auth/operations";

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
      .addCase(renameContact.pending, handlePending)
      .addCase(renameContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(e => e.id === action.payload.id ? e = action.payload : e)
      })
      .addCase(renameContact.rejected, handleRejected)
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      });
  }
});

export const contactsReducer = contactsSlice.reducer;