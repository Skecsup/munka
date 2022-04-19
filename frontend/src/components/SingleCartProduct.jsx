import React from "react";
import { Container } from "../assets/styles/SingleCartProduct_Style";
import { FaTrashAlt } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

const SingleCartProduct = ({ prod }) => {
  const { removeProductFromCart, changeProductAmount } = useAppContext();
  const removehandler = () => {
    removeProductFromCart(prod._id);
  };
  const counthandler = (e) => {
    changeProductAmount(e, prod._id);
  };

  return (
    <Container>
      <img src={prod.image} alt={prod.name} />
      <div className="info">
        <h3>{prod.name}</h3>
        <p>{prod.desc}</p>
        <p>{prod.price}€</p>
      </div>
      <div className="count">
        <input
          type="number"
          min="1"
          max="99"
          value={prod.count}
          onChange={(e) => counthandler(e)}
        />
      </div>
      <div className="remove">
        <button onClick={removehandler}>
          <FaTrashAlt />
        </button>
      </div>
    </Container>
  );
};

export default SingleCartProduct;
