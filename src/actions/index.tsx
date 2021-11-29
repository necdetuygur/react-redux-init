import { Dispatch } from "redux";

export const f1 = () => (dispatch: Dispatch) => {
  dispatch({
    type: "",
    payload: 0,
  });
};
