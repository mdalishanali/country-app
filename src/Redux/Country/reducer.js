import { GET_COUNTRY } from "./actionTypes";

export const setProduct = (state = [], { type, payload }) => {
  switch (type) {
    case GET_COUNTRY:
      return payload;
    default:
      return state;
  }
};
