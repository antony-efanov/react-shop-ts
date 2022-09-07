import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./types";
import { getItems } from "./thunk";

const initialState: InitialState = {
  items: [],
  loading: "pending",
};

const itemsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.items = [];
        state.loading = "pending";
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = "success";
      })
      .addCase(getItems.rejected, (state) => {
        state.loading = "error";
      });
  },
});

export default itemsSlice.reducer;
