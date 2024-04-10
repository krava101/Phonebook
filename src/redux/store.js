import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import { logoutModalReducer } from "./logoutModal/slice";
import { mobileMenuReducer } from "./mobileMenu/slice";
import { contactsReducer } from "./contacts/slice";
import { configureStore} from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice";
import authReducer from "./auth/slice";
import storage from 'redux-persist/lib/storage';

const authPersistCfg = {
  key: 'auth',
  storage,
  whitelist: ['token']
};

const persistedAuthReducer = persistReducer(authPersistCfg, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filterReducer,
    logoutModal: logoutModalReducer,
    mobileMenu: mobileMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
