const INITIAL_STATE = {};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "":
      return { ...state };
    default:
      return state;
  }
};
