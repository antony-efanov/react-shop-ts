import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";
import { getOrders } from "./thunk";

const initialState: InitialState = {
  orders: [],
  loading: "pending",
  ordersOpened: false,
};

const ordersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    onClickOrders: (state) => {
      state.ordersOpened === false
        ? (state.ordersOpened = true)
        : (state.ordersOpened = false);

      console.log(state.ordersOpened);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.orders = [];
        state.loading = "pending";
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = "success";
      })
      .addCase(getOrders.rejected, (state) => {
        state.loading = "error";
      });
  },
});

export const { onClickOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
