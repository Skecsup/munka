import { CartItems, Container, SideBar } from "../assets/styles/Cart_Style";
import SingleCartProduct from "../components/SingleCartProduct";
import { useAppContext } from "../context/appContext";
import DeliveryData from "../components/DeliveryData";
import ShippingPayment from "../components/ShippingPayment";
import Order from "../components/Order";

import { useState, useReducer } from "react";

const initialState = {
  orderedItems: [],

  name: "",
  lastName: "",
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
        name: action.payload.data.name,
        lastName: action.payload.data.lastName,
        address: action.payload.data.address,
        country: action.payload.data.country,
        city: action.payload.data.city,
        zip: action.payload.data.zip,
        PhoneNumber: action.payload.data.phone,
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
      return orderState;
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

  const addItemsToOrder = () => {
    dispatch({ type: "ADD_ITEMS_TO_ORDER", payload: cart });
  };

  const proceedHandler = () => {
    setStep(step + 1);
    if (step === 0) {
      addItemsToOrder();
    }
    if (step === 1) {
    }
    if (step === 2) {
    }
    if (step === 3) {
      dispatch({ type: "ADD_PRICES", payload: totalPrice });
    }
    if (step >= 3) {
      createOrder(orderState);
      setStep(0);
    }
  };

  let cartContent = (
    <CartItems>
      {cart.map((item, index) => {
        return <SingleCartProduct prod={item} key={index} />;
      })}
    </CartItems>
  );
  let billingData = <DeliveryData dispatch={dispatch} />;

  let shipping_payment = (
    <ShippingPayment
      payment={orderState.PaymentMethod}
      ship={orderState.ShippingMethod}
      dispatch={dispatch}
    />
  );
  let order = (
    <Order
      totalPrice={totalPrice}
      ship={orderState.ShippingMethod}
      payment={orderState.PaymentMethod}
    />
  );

  return (
    <>
      <Container>
        {step === 0 && cartContent}
        {step === 1 && billingData}
        {step === 2 && shipping_payment}
        {step === 3 && order}

        <SideBar>
          <h1>Subtotal ({totalItems}) items</h1>
          <h2>Subtotal: {totalPrice * 0.8}€</h2>
          <h2>Tax: {totalPrice * 0.2}€</h2>
          <h2>Shipping: {orderState.shippingPrice}€</h2>
          <h2>Total: {totalPrice}€</h2>
          <button onClick={proceedHandler}>Proceed to checkout</button>
        </SideBar>
      </Container>
    </>
  );
};

export default Cart;
