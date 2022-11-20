import { ActionTypes } from "../constants/action-types";

// Kreator akcji
// Funkcja, która upraszcza nam robotę i uszczupla kod w komponentach, po podaniu argumentu, konfiguruje i zwraca gotowy do dispatcha obiekt akcji
export const setAuthState = (authState: boolean) => {
  // zwracany obiekt akcji
  // obiekt akcji musi zawierać 1 rzecz: pole "type", według którego akcja będzie identyfikowana w store i reducerach
  // 2 opcjonalne pole: "payload", tu przekazujemy faktyczne dane, które maja trafic do store
  return {
    type: ActionTypes.SET_AUTH_STATE,
    payload: authState, // true albo false
  };
};

// dispatch({
//     type: ActionTypes.SET_AUTH_STATE,
//     payload: jakisStanZKomponentu,
// }) // przyjmuje obiekt akcji
// AKCJA == OBIEKT AKCJI

// dispatch(setAuthState(false))


// onAuthStateChanged((user)=> {
//     if (user){
//         dispatch(setAuthState(true))
//     } else {
//         dispatch(setAuthState(false))
//     }
// })