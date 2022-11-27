import { AnyAction } from "redux";
import { ActionTypes } from "../constants/action-types";

const initialState = {
  fetchedCategories: [""],
  fetchedProducts: [],
  fetchedImages: [],
  selectedProducts: [],
};

export const productReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_CATEGORIES:
      return { ...state, fetchedCategories: action.payload };
    case ActionTypes.FETCH_IMAGES:
      return { ...state, fetchedImages: action.payload };
    case ActionTypes.FETCH_PRODUCTS:
      return {...state, fetchedProducts: action.payload}
    default:
      return state;
  }
};
