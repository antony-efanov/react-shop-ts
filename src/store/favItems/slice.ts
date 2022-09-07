import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../favItems/types";
import { getFavItems } from "./thunk";

const initialState: InitialState = {
  favItems: [],
  loading: "pending",
  favOpened: false,
};

const favItemsSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    onClickFav: (state) => {
      state.favOpened === false
        ? (state.favOpened = true)
        : (state.favOpened = false);

      console.log(state.favOpened);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavItems.pending, (state) => {
        state.favItems = [];
        state.loading = "pending";
      })
      .addCase(getFavItems.fulfilled, (state, action) => {
        state.favItems = action.payload;
        state.loading = "success";
      })
      .addCase(getFavItems.rejected, (state) => {
        state.loading = "error";
      });
  },
});

export const { onClickFav } = favItemsSlice.actions;
export default favItemsSlice.reducer;
