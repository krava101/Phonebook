import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { logoutModalReducer } from "./logoutModal/slice";
import authReducer from "./auth/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
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
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);
