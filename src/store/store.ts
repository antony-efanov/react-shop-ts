import { configureStore, combineReducers } from "@reduxjs/toolkit";
import items from "./items/slice";
import cartItems from "./cartItems/slice";
import favItems from "./favItems/slice";

const rootReducer = combineReducers({ items, cartItems, favItems });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
