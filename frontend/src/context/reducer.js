import {
  FETCH_DATA,
  CREATE_PRODUCT,
  SETUP_USER,
  LOGOUT_USER,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CHANGE_PRODUCT_AMOUNT,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, products: action.payload.prod };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };
    case SETUP_USER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };

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
      temp.find((item) => item._id === action.payload._id).count = 1;
      return {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
        products: temp,
      };

    case CHANGE_PRODUCT_AMOUNT:
      let newArr = [...state.cart];
      newArr.find((item) => item._id === action.payload._id).count = parseInt(
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
