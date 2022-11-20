import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  authState: authReducer,
});

// po lewej nadajemy nazwe stanu, po prawej przypisujemy reducer zarządzający tym stanem
