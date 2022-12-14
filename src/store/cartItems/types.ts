import { Item } from "../types";

export interface InitialState {
  cartItems: Item[];
  loading: "pending" | "success" | "error";
  cartOpened: boolean;
}
