import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";

import reducer from "./reducer";

import {
  FETCH_DATA,
  SETUP_USER,
  LOGOUT_USER,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CHANGE_PRODUCT_AMOUNT,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token || null,
  products: [],
  cart: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");

      const prod = data.products;
      dispatch({ type: FETCH_DATA, payload: { prod } });
    };
    fetchData();
  }, []);

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post("/api/user/register", currentUser);
      console.log(response);
      const { user, token } = response.data;
      dispatch({
        type: SETUP_USER,
        payload: {
          user,
          token,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error.response);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const { data } = await axios.post("/api/user/login", currentUser);

      const { user, token } = data;
      dispatch({
        type: SETUP_USER,
        payload: {
          user,
          token,
        },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error);
    }
  };
  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    try {
      const { data } = await axios.patch("/api/user/update", currentUser, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      const { user, token } = data;

      dispatch({
        type: SETUP_USER,
        payload: { user, token },
      });
      addUserToLocalStorage({ user, token });
    } catch (error) {
      console.log(error);
    }
  };

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: { product } });
  };
  const removeProductFromCart = (_id) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { _id } });
  };
  const changeProductAmount = (event, _id) => {
    dispatch({ type: CHANGE_PRODUCT_AMOUNT, payload: { event, _id } });
  };

  const context = {
    ...state,
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
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
