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
      return { ...state, fetchedProducts: action.payload };
    case ActionTypes.SET_PRODUCT:
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.payload],
      };
    default:
      return state;
  }
};

// AKCJA DODANIA NOWEGO PRODUKTU

// stary stan (dostępny pod parametrem state w reducerze)
// {
//   fetchedCategories: [""],
//   fetchedProducts: [],
//   fetchedImages: [],
//   selectedProducts: [{x: 1}, {y:2}, {z:3}], //ta lista jest kopiowana
// }

// nowy stan (to co zwracamy w case)
// {
//   fetchedCategories: [""],
//   fetchedProducts: [],
//   fetchedImages: [],
//   selectedProducts: [{x: 1}, {y:2}, {z:3}, {a: 4}],
// }
// {x: 1}, {y:2}, {z:3} to state.selectedProducts potraktowane spreadem
// {a: 4} to action.payload