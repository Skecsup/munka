import React from "react";
import { Container } from "../assets/styles/SingleProduct_Style";
import { useAppContext } from "../context/appContext";
const SingleProduct = ({ product }) => {
  const { addProductToCart, cart, removeProductFromCart } = useAppContext();

  const carthandler = () => {
    if (cart.some((p) => p.id === product.id)) {
      removeProductFromCart(product.id);
    } else {
      addProductToCart(product);
    }
  };

  return (
    <Container>
      <h1>{product.name}</h1>
      <p>{product.desc}</p>
      <img src={product.kep} alt={product.id} />
      <p>{product.price}$</p>
      <button onClick={carthandler}>
        {cart.some((p) => p.id === product.id)
          ? "Remove from cart"
          : "Add to cart"}
      </button>
    </Container>
  );
};

export default SingleProduct;
