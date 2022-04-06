import React from "react";
import { Container } from "../assets/styles/AdminOrder_Style";

const AdminOrder = ({ order, handleChange }) => {
  return (
    <Container status={order.status}>
      <span>{order._id}</span>
      <span> </span>
      <span>{order.totalPrice}</span>
      <span> </span>
      <span>{order.lastName}</span>
      <span> </span>
      <span>{order.name}</span>
      <span> </span>
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
