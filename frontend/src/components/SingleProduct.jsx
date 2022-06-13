import React from "react";
import { Container } from "../assets/styles/SingleProduct_Style";
import { useAppContext } from "../context/appContext";
const SingleProduct = ({ product }) => {
  const { addProductToCart, cart, removeProductFromCart } = useAppContext();

  const carthandler = () => {
    if (cart.some((p) => p._id === product._id)) {
      removeProductFromCart(product._id);
    } else {
      addProductToCart(product);
    }
  };

  return (
    <Container>
      <h1>{product.name}</h1>
      <p>{product.desc}</p>
      <img src={product.image} alt={product._id} />
      <strong>{product.price}€</strong>
      <button onClick={carthandler}>
        {cart.some((p) => p._id === product._id)
          ? "REMOVE FROM CART"
          : "ADD TO CART"}
      </button>
    </Container>
  );
};

export default SingleProduct;
