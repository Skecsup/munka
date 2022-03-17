import React from "react";
import { Container } from "../assets/styles/SingleCartProduct_Style";
import { FaPlusCircle, FaMinusCircle, FaTrashAlt } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

const SingleCartProduct = ({ prod }) => {
  const { removeProductFromCart, changeProductAmount } = useAppContext();
  const removehandler = () => {
    removeProductFromCart(prod.id);
  };
  const counthandler = (e) => {
    changeProductAmount(e, prod.id);
  };

  return (
    <Container>
      <img src={prod.kep} alt={prod.name} />
      <div className="info">
        <h3>{prod.name}</h3>
        <p>{prod.desc}</p>
        <p>{prod.price}€</p>
      </div>
      <div className="count">
        <input
          type="number"
          min="1"
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
