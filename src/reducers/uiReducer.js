import { TOGGLE_DARK_MODE } from "../actions/types";

const initialState = {
  darkMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
};
