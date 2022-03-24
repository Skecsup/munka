import React from "react";
import { useAppContext } from "../context/appContext";

const Order = ({ totalPrice, payment, ship }) => {
  const { user, cart } = useAppContext();
  return (
    <div>
      <h1>your order</h1>
      <div>
        {cart.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
      <div>
        <div>
          <strong>{user.name}</strong>
          <span> </span>
          <strong>{user.lastName}</strong>
        </div>
        <div>
          <strong>{user.email}</strong>
        </div>
        <div>
          <strong>{user.address}</strong>
          <span> </span>
          <strong>{user.city}</strong>
          <span> </span>
          <strong>{user.zip}</strong>
        </div>
      </div>
      <div>
        <strong>{payment}</strong>
        <span> </span>
        <strong>{ship}</strong>
      </div>
      <div>
        <h3>money</h3>
        <div>
          <strong>subtotal</strong>
          <span> {Math.round(totalPrice * 0.8 * 100) / 100}</span>
        </div>
        <div>
          <strong>tax</strong>
          <span> {Math.round(totalPrice * 0.2 * 100) / 100}</span>
        </div>
        <div>
          <strong>total</strong>
          <span> {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
