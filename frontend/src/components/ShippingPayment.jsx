import { useState, useEffect } from "react";
import {
  Container,
  Payment,
  Shipping,
} from "../assets/styles/ShippingPayment_Style";
import {
  FaTruck,
  FaMoneyBill,
  FaBitcoin,
  FaUniversity,
  FaEnvelope,
  FaHome,
  FaWalking,
} from "react-icons/fa";

const ShippingPayment = ({ forwardData }) => {
  const [temp1, setTemp1] = useState({ name: "", price: 0 });
  const [temp2, setTemp2] = useState({ name: "", price: 0 });

  const calcPrice = (value) => {
    switch (value) {
      case "P_C_Na_Adresu":
        return 3.9;
      case "P_C_Na_Postu":
        return 2.9;
      case "D_Na_Adresu":
        return 4.3;
      case "D_Na_Postu":
        return 3.3;
      case "O_Odber":
        return 0;
      default:
        return 0;
    }
  };
  const checkForD = (value) => {
    if (value === "Dobierka") {
      return 1.2;
    } else {
      return 0;
    }
  };

  const onPaymentChange = (e) => {
    setTemp1({
      ...temp1,
      name: e.target.value,
      price: checkForD(e.target.value),
    });
  };
  const onShipChange = (e) => {
    setTemp2({
      ...temp2,
      name: e.target.value,
      price: calcPrice(e.target.value),
    });
  };

  useEffect(() => {
    if (forwardData) {
      forwardData({ type: "SET_PAYMENT_SHIPPING", data: [temp1, temp2] });
    }
  }, [temp1, temp2, forwardData]);
  return (
    <Container>
      <Payment onChange={onPaymentChange}>
        <div>
          <input type="radio" name="payment" id="1" value={"Dobierka"} />
          <FaTruck className="icon" />

          <label htmlFor="1"> Dobierka </label>
        </div>
        <div>
          <input type="radio" name="payment" id="2" value={"Prevod"} />
          <FaUniversity className="icon" />
          <label htmlFor="2"> Prevod </label>
        </div>
        <div>
          <input type="radio" name="payment" id="3" value={"Hotovost"} />
          <FaMoneyBill className="icon" />
          <label htmlFor="3"> Hotovost </label>
        </div>
        <div>
          <input type="radio" name="payment" id="4" value={"Crypto"} />
          <FaBitcoin className="icon" />
          <label htmlFor="4"> Crypto </label>
        </div>
      </Payment>

      <Shipping onChange={onShipChange}>
        {temp1.name === "Dobierka" && (
          <>
            <div>
              <input
                type="radio"
                name="shipping"
                id="1"
                value={"D_Na_Adresu"}
              />
              <FaHome className="icon" />
              <label htmlFor="1">Na adresu </label>
            </div>
            <div>
              <input type="radio" name="shipping" id="2" value={"D_Na_Postu"} />
              <FaEnvelope className="icon" />
              <label htmlFor="2">Na postu </label>
            </div>
          </>
        )}
        {temp1.name === "Prevod" && (
          <>
            <div>
              <input
                type="radio"
                name="shipping"
                id="1"
                value={"P_C_Na_Adresu"}
              />
              <FaHome className="icon" />
              <label htmlFor="1">Na adresu </label>
            </div>
            <div>
              <input
                type="radio"
                name="shipping"
                id="2"
                value={"P_C_Na_Postu"}
              />
              <FaEnvelope className="icon" />
              <label htmlFor="2">Na postu </label>
            </div>
          </>
        )}
        {temp1.name === "Hotovost" && (
          <div>
            <input type="radio" name="shipping" id="1" value={"O_Odber"} />
            <FaWalking className="icon" />
            <label htmlFor="1">osobny odber </label>
          </div>
        )}
        {temp1.name === "Crypto" && (
          <>
            <div>
              <input
                type="radio"
                name="shipping"
                id="1"
                value={"P_C_Na_Adresu"}
              />
              <FaHome className="icon" />
              <label htmlFor="1">Na adresu </label>
            </div>
            <div>
              <input
                type="radio"
                name="shipping"
                id="2"
                value={"P_C_Na_Postu"}
              />
              <FaEnvelope className="icon" />
              <label htmlFor="2">Na postu </label>
            </div>
          </>
        )}
      </Shipping>
    </Container>
  );
};

export default ShippingPayment;
