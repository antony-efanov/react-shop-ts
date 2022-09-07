import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../cartItems/types";
import { getCartItems } from "./thunk";

const initialState: InitialState = {
  cartItems: [],
  loading: "pending",
  cartVisibility: false,
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    onClickCart: (state) => {
      if (state.cartVisibility === false) state.cartVisibility = true;
      state.cartVisibility = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.cartItems = [];
        state.loading = "pending";
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        state.loading = "success";
      })
      .addCase(getCartItems.rejected, (state) => {
        state.loading = "error";
      });
  },
});

export const { onClickCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
