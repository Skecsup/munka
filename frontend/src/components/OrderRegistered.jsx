import React from "react";
import { Container } from "../assets/styles/OrderRegistered_Style";
import { FaCheckCircle } from "react-icons/fa";
import btc_logo from "../assets/images/btc_logo.webp";
import eth_logo from "../assets/images/eth_logo.svg";
import btc_address from "../assets/images/bitcoin.jpg";
import eth_address from "../assets/images/etherium.jpg";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const OrderRegistered = ({ order, dispatch }) => {
  const { clearCart } = useAppContext();

  const navigate = useNavigate();

  const onClickHandler = () => {
    clearCart();
    dispatch({ type: "none" });
    navigate("/");
  };

  return (
    <Container>
      <h1>
        <FaCheckCircle /> Your order was registered
      </h1>
      {order.PaymentMethod === "Crypto" && (
        <div>
          <h4>
            You have chose the crypto payment, below you can see the addresses,
            please make your transfer, after the funds are received the shipping
            is started.
          </h4>
          <div>
            <img src={btc_logo} width="100" height="100" alt="btc_logo" />
            <img src={btc_address} width="100" height="100" alt="btc_logo" />
            <p>37ioMcn8mBUYpJ4eiqcvSCTmsJiCVh5FXN</p>
          </div>
          <div>
            <img src={eth_logo} width="100" height="100" alt="eth_logo" />
            <img src={eth_address} width="100" height="100" alt="eth_logo" />
            <p>0xD09A7b0bebc93BFf90f23F9953FEB6bB229Be09a</p>
          </div>
          <p>
            (in the transfer notes please indicate your e-mail and name, thank
            you)
          </p>
        </div>
      )}
      {order.PaymentMethod === "Transfer" && (
        <div>
          <h4>
            You have chose the bank transfer payment, below you can see the
            address, please make your transfer, after the funds are received the
            shipping is started.
          </h4>
          <div>
            <p>SK85 1100 0000 0012 3456 7890</p>
            <p>
              (in the transfer notes please indicate your e-mail and name, thank
              you)
            </p>
          </div>
        </div>
      )}
      {order.PaymentMethod !== "Crypto" &&
        order.PaymentMethod !== "Transfer" && (
          <div>You will pay when your package arrives</div>
        )}
      <button onClick={onClickHandler}>back to shop</button>
    </Container>
  );
};

export default OrderRegistered;
