import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CHANGE_PRODUCT_AMOUNT,
} from "./actions";

import { initialState } from "./appContext";

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

    case LOGIN_USER_START:
      return { ...state, isLoading: true };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
      };

    case LOGIN_USER_ERROR:
      return { ...state, isLoading: false };

    case LOGOUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
      };

    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: state.cart.concat(action.payload.product) };

    case REMOVE_PRODUCT_FROM_CART:
      let temp = [...state.products];
      temp.find((item) => item.id === action.payload.id).count = 1;
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
        products: temp,
      };

    case CHANGE_PRODUCT_AMOUNT:
      let newArr = [...state.cart];
      newArr.find((item) => item.id === action.payload.id).count = parseInt(
        action.payload.event.target.value
      );

      return {
        ...state,
        cart: newArr,
      };

    default:
      return state;
  }
};
export default reducer;
