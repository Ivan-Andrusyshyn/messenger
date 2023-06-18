import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "./sliceRedux/sliceRedux";
import { getPersistConfig } from "redux-deep-persist";
const rootReducer = combineReducers({ contacts: contactReducer });

// const persistConfig = {
// key: "root",
// storage,
// blacklist: ["filter"],
// };

const config = getPersistConfig({
  key: "root",
  storage,
  blacklist: ["contacts.filter"],
  rootReducer,
});
const persistedReducer = persistReducer(config, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
