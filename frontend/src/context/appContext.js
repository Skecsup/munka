import React, { useContext, useReducer } from "react";
import axios from "axios";

import reducer from "./reducer";

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

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token || null,
  products: [
    {
      id: 1,
      name: "Traktor",
      desc: "Nagyon fain Traktor",
      kep: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Massey_Ferguson_6490_Dynashift.jpg/1200px-Massey_Ferguson_6490_Dynashift.jpg",
      price: 10,
      count: 1,
    },
    {
      id: 2,
      name: "Kamion",
      desc: "Nagyon fain Kamion",
      kep: "https://www.manoriginal.sk/wp-content/uploads/2018/12/Viano%C4%8Dn%C3%BD-truck-MAN.jpg",
      price: 15,
      count: 1,
    },
    {
      id: 3,
      name: "Tricikli",
      desc: "Nagyon fain Tricikli",
      kep: "https://manobabahaz.hu/kepek/05709_2.jpg",
      price: 20,
      count: 1,
    },
    {
      id: 4,
      name: "Vodor",
      desc: "nagyon kiraly kis vodor ez itten kldjsakldj lkj daskdjaslasdlask  k sjdaklsdjaskljjkj ad ajsklasdj",
      kep: "https://webimg.praktiker.hu/_upload/images/praktiker_catalog/186572/186572_01_vodor-14l-horganyzott.png",
      price: 5,
      count: 1,
    },
  ],
  cart: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_START });
    try {
      const response = await axios.post("/api/user/register", currentUser);
      console.log(response);
      const { user, token } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          token,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_START });
    try {
      const { data } = await axios.post("/api/user/login", currentUser);

      const { user, token } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
          user,
          token,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: { product } });
  };
  const removeProductFromCart = (id) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { id } });
  };
  const changeProductAmount = (event, id) => {
    dispatch({ type: CHANGE_PRODUCT_AMOUNT, payload: { event, id } });
  };

  const context = {
    ...state,
    registerUser,
    loginUser,
    logoutUser,
    addProductToCart,
    removeProductFromCart,
    changeProductAmount,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
