import { Item } from "../types";

export interface InitialState {
  orders: Item[];
  loading: "pending" | "success" | "error";
  ordersOpened: boolean;
}
