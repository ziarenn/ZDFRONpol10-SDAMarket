import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { InitialState } from "../../helpers/interfaces";
import axios from "axios";
import { ActionTypes } from "../constants/action-types";
export const fetchCategories = (): ThunkAction<
  void,
  InitialState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch({
      type: ActionTypes.FETCH_CATEGORIES,
      payload: response.data,
    });
  };
};

// KREATOR AKCJI ASYNCHRONICZNYCH:
// 1. Funkcja otypowana w odpowiedni sposób(przykład powyżej)
// 2. Funkcja zwracająca inną funkcję asynchroniczną. Ta funkcja asynchroniczna z automatu ma dostęp do funkcji dispatch w swoim parametrze. W środku funkcji asynchronicznej wykonujemy interesujące nas operacje (zazwyczaj jakiś fetch) i dispatchujemy pozyskane dane dalej.