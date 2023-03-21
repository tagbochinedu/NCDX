import { configureStore } from "@reduxjs/toolkit";
import UsersReducer from "../Features/Users/UsersSlice";

export const store = configureStore({ reducer: { users: UsersReducer } });
