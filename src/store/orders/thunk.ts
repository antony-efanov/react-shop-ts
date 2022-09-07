import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = createAsyncThunk("orders/getOrders", async () => {
  const { data } = await axios.get(
    "https://62bd6719c5ad14c110bdcc61.mockapi.io/orders"
  );
  return data;
});
