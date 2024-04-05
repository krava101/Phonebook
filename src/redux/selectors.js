import { createSelector } from "@reduxjs/toolkit";
import { filterStatus } from "./constants";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector([selectContacts, selectFilter], (contacts, filter) =>{
  return filter.status !== filterStatus.favorite ?
    contacts.filter(c => c.name.toLowerCase().includes(filter.search.toLowerCase())) :
    contacts.filter(c => c.favorite).filter(c => c.name.toLowerCase().includes(filter.search.toLowerCase()));
})