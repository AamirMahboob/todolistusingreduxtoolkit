"use client";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses local storage
import { combineReducers } from "redux";
import toDoSlice from "../redux/slices/toDoSlice";
import authSlice from "./slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "todos"], // Specify which reducers to persist
};

const rootReducer = combineReducers({
  todos: toDoSlice, 
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REGISTER"], // Ignore Persist Actions
      },
    }),
});

export const persistor = persistStore(store);
