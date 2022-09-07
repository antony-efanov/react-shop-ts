import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFavItems = createAsyncThunk(
  "favItems/getFavItems",
  async () => {
    const { data } = await axios.get(
      "https://62bd6719c5ad14c110bdcc61.mockapi.io/favItems"
    );
    return data;
  }
);
