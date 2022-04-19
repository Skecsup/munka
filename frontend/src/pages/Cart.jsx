import { CartItems, Container, SideBar } from "../assets/styles/Cart_Style";
import SingleCartProduct from "../components/SingleCartProduct";
import { useAppContext } from "../context/appContext";
import DeliveryData from "../components/DeliveryData";
import ShippingPayment from "../components/ShippingPayment";
import Order from "../components/Order";
import OrderRegistered from "../components/OrderRegistered";

import { useState, useReducer, useCallback } from "react";

const initialState = {
  orderedItems: [],

  name: "",
  lastName: "",
  email: "",
  address: "",
  city: "",
  zip: "",
  country: "",

  PhoneNumber: "",
  PaymentMethod: "",
  ShippingMethod: "",
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0,
};

const reducer = (orderState, action) => {
  switch (action.type) {
    case "DELIVERY_DATA":
      return {
        ...orderState,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        address: action.payload.address,
        country: action.payload.country,
        city: action.payload.city,
        zip: action.payload.zip,
        PhoneNumber: action.payload.phone,
      };
    case "SET_PAYMENT_SHIPPING":
      return {
        ...orderState,
        PaymentMethod: action.payload[0].name,
        ShippingMethod: action.payload[1].name,
        shippingPrice: action.payload[0].price + action.payload[1].price,
      };
    case "ADD_ITEMS_TO_ORDER":
      return {
        ...orderState,
        orderedItems: action.payload,
      };

    case "ADD_PRICES":
      return {
        ...orderState,
        itemsPrice: action.payload * 0.8,
        taxPrice: action.payload * 0.2,
        totalPrice: action.payload + orderState.shippingPrice,
      };
    default:
      return initialState;
  }
};

const Cart = () => {
  const [orderState, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(0);

  const { cart, createOrder } = useAppContext();

  let totalPrice = 0;
  let totalItems = 0;
  cart.forEach((i) => {
    totalPrice += i.price * i.count;
    totalItems += i.count;
  });

  const eventhandler = useCallback((data) => {
    console.log(data.data);
    dispatch({ type: data.type, payload: data.data });
  }, []);

  const addItemsToOrder = () => {
    dispatch({ type: "ADD_ITEMS_TO_ORDER", payload: cart });
  };
  const addPriceToOrder = () => {
    dispatch({ type: "ADD_PRICES", payload: totalPrice });
  };

  const proceedHandler = () => {
    if (cart.length !== 0) {
      setStep(step + 1);
    }
    if (step === 0) {
      addItemsToOrder();
      addPriceToOrder();
    }
    if (step === 1) {
    }
    if (step === 2) {
    }
    if (step === 3) {
    }
    if (step >= 3) {
      createOrder(orderState);
    }
  };

  return (
    <>
      <Container step={step}>
        {step === 0 &&
          (cart.length === 0 ? (
            <h1>No items in cart</h1>
          ) : (
            <CartItems>
              {cart.map((item, index) => {
                return <SingleCartProduct prod={item} key={index} />;
              })}
            </CartItems>
          ))}
        {step === 1 && <DeliveryData forwardData={eventhandler} />}
        {step === 2 && (
          <ShippingPayment
            forwardData={eventhandler}
            payment={orderState.PaymentMethod}
            ship={orderState.ShippingMethod}
          />
        )}
        {step === 3 && <Order order={orderState} setStep={setStep} />}
        {step === 4 && (
          <OrderRegistered order={orderState} dispatch={dispatch} />
        )}
        {step !== 4 && (
          <SideBar>
            <h1>Subtotal ({totalItems}) items</h1>
            <h2>Subtotal: {(totalPrice * 0.8).toFixed(2)}€</h2>
            <h2>Tax: {(totalPrice * 0.2).toFixed(2)}€</h2>
            <h2>Shipping: {orderState.shippingPrice}€</h2>
            <h2>Total: {totalPrice.toFixed(2)}€</h2>
            <h2>
              Total + Shipping:{" "}
              {(totalPrice + orderState.shippingPrice).toFixed(2)}€
            </h2>
            <button onClick={proceedHandler}>
              {step === 3 ? "Confirm order" : "Proceed to checkout"}
            </button>
          </SideBar>
        )}
      </Container>
    </>
  );
};

export default Cart;
