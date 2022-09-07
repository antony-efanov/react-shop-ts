import { Item } from "../types";

export interface InitialState {
  favItems: Item[];
  loading: "pending" | "success" | "error";
}
