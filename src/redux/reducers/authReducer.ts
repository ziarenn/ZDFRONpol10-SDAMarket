import { ActionTypes } from "../constants/action-types";
import { AnyAction } from "redux";

// const initialState = {
//   authState: false,
// };

// jeżeli mamy pierwsze wywołanie reducera i stan jeszcze nie istnieje, zostanie przyjęty initialState, jeżeli faktyczny już istnieje (wywołanie  reducera #n, gdzie n > 1) to po prostu zajmnie on miejsce w parametrze
export const authReducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_AUTH_STATE:
      return action.payload;
    default:
      return state;
  }
};
