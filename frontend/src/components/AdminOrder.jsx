import React from "react";
import { Container } from "../assets/styles/AdminOrder_Style";

const AdminOrder = ({ order, handleChange }) => {
  return (
    <Container status={order.status}>
      <span>{order._id}</span>
      <span> </span>
      <strong>{order.totalPrice} EUR</strong>
      <span> </span>
      <span>{order.lastName + " " + order.name}</span>

      <span>{order.email}</span>
      <span>
        {order.address} {order.city} <strong>{order.zip}</strong>
      </span>
      <span>
        {order.PaymentMethod} {order.ShippingMethod}
      </span>
      <select name="items">
        {order.orderedItems.map((item) => {
          return (
            <option>
              {item.name} x {item.count}
            </option>
          );
        })}
      </select>
      <select
        name="status"
        value={order.status}
        onChange={(e) => handleChange(e, order)}
      >
        <option>NEW</option>
        <option>PAID/SHIPPING</option>
        <option>SHIPPED</option>
      </select>
    </Container>
  );
};

export default AdminOrder;
