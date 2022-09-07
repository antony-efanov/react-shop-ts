import { Item } from "../types";

export interface InitialState {
  items: Item[];
  loading: "pending" | "success" | "error";
}
