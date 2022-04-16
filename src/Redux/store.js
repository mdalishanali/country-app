import { createStore } from "redux";
import { setProduct } from "./Country/reducer";

export const store = createStore(setProduct);
