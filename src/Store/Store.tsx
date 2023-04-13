import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import UsersReducer from "../Features/Users/UsersSlice";
import ThemesReducer from "../Features/Themes/ThemesSlice";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: UsersReducer,
  themes: ThemesReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
