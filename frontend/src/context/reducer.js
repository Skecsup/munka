import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return { ...state, isLoading: true };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      };
    case REGISTER_USER_ERROR:
      return { ...state, isLoading: false };
    default:
      console.log("no such action");
      break;
  }
};
export default reducer;
