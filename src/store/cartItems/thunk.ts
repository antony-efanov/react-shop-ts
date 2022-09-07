import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartItems = createAsyncThunk(
  "cartItems/getCartItems",
  async () => {
    const { data } = await axios.get(
      "https://62bd6719c5ad14c110bdcc61.mockapi.io/cartItems"
    );
    return data;
  }
);
