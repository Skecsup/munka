import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";

import reducer from "./reducer";

import {
  FETCH_DATA,
  CREATE_PRODUCT,
  SETUP_USER,
  LOGOUT_USER,
  ADD_PRODUCT_TO_CART,
  CLEAR_CART,
  REMOVE_PRODUCT_FROM_CART,
  CHANGE_PRODUCT_AMOUNT,
  GET_ORDERS,
  MANAGE_ORDERS,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token || null,
  products: [],
  cart: [],
  orders: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/products");
        const prod = data.products;
        dispatch({ type: FETCH_DATA, payload: { prod } });
      } catch (error) {
        console.log(error);
      }
    };
    const fetchAdminData = async () => {
      try {
        if (state.user.role !== null && state.user.role === 1) {
          const { data } = await axios.get("/api/orders/adminOrders");
          console.log(data);
          dispatch({ type: GET_ORDERS, payload: data.orders });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    if (state.user !== null) {
      fetchAdminData();
    }
  }, [state.user, state.product]);

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

  const createProduct = async (product) => {
    try {
      await axios.post("/api/products", product);

      dispatch({ type: CREATE_PRODUCT, payload: { product } });
    } catch (error) {
      console.log(error);
    }
  };

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: { product } });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeProductFromCart = (_id) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: { _id } });
  };
  const changeProductAmount = (event, _id) => {
    dispatch({ type: CHANGE_PRODUCT_AMOUNT, payload: { event, _id } });
  };

  const createOrder = async (order) => {
    try {
      await axios.post("/api/orders", order, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      alert("your order was created");
    } catch (error) {
      console.log(error);
    }
  };

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/orders", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      });
      dispatch({ type: GET_ORDERS, payload: data.orders });
    } catch (error) {
      console.log(error);
    }
  };

  const adminGetOrders = async () => {
    try {
      const { data } = await axios.get("/api/orders/adminOrders");
      dispatch({ type: GET_ORDERS, payload: data.orders });
    } catch (error) {
      console.log(error);
    }
  };

  const manageOrders = async (status, order) => {
    try {
      const { data } = await axios.patch("/api/orders/adminOrders", {
        order,
        status,
      });
      console.log(data);
      const id = data.order._id;

      dispatch({ type: MANAGE_ORDERS, payload: { id, status } });
    } catch (error) {
      console.log(error);
    }
  };

  const context = {
    ...state,
    registerUser,
    loginUser,
    logoutUser,
    updateUser,
    addProductToCart,
    clearCart,
    removeProductFromCart,
    changeProductAmount,
    createProduct,
    createOrder,
    getOrders,
    adminGetOrders,
    manageOrders,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
