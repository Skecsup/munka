import React from "react";
import { Container } from "../assets/styles/AdminOrder_Style";

const AdminOrder = ({ order, handleChange }) => {
  return (
    <Container status={order.status}>
      <span>{order._id}</span>
      <span> </span>
      <strong>{order.totalPrice}</strong>
      <span> </span>
      <span>{order.lastName + " " + order.name}</span>

      <span>{order.email}</span>
      <span>{order.PaymentMethod}</span>
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
