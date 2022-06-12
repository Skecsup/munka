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
      case "T_C_To_Address":
        return 3.9;
      case "T_C_To_Post":
        return 2.9;
      case "Cod_To_Address":
        return 4.3;
      case "Cod_To_Post":
        return 3.3;
      case "C_Personal":
        return 0;
      default:
        return 0;
    }
  };
  const checkForD = (value) => {
    if (value === "Cash_on_delivery") {
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
          <input
            type="radio"
            name="payment"
            id="1"
            value={"Cash_on_delivery"}
          />
          <FaTruck className="icon" />

          <label htmlFor="1"> Cash on delivery </label>
        </div>
        <div>
          <input type="radio" name="payment" id="2" value={"Transfer"} />
          <FaUniversity className="icon" />
          <label htmlFor="2"> Transfer </label>
        </div>
        <div>
          <input type="radio" name="payment" id="3" value={"Cash"} />
          <FaMoneyBill className="icon" />
          <label htmlFor="3"> Cash </label>
        </div>
        <div>
          <input type="radio" name="payment" id="4" value={"Crypto"} />
          <FaBitcoin className="icon" />
          <label htmlFor="4"> Crypto </label>
        </div>
      </Payment>

      <Shipping onChange={onShipChange}>
        {temp1.name === "Cash_on_delivery" && (
          <>
            <div>
              <input
                type="radio"
                name="shipping"
                id="5"
                value={"Cod_To_Address"}
              />
              <FaHome className="icon" />
              <label htmlFor="5">To Address </label>
            </div>
            <div>
              <input
                type="radio"
                name="shipping"
                id="6"
                value={"Cod_To_Post"}
              />
              <FaEnvelope className="icon" />
              <label htmlFor="6">To Post </label>
            </div>
          </>
        )}
        {temp1.name === "Transfer" && (
          <>
            <div>
              <input
                type="radio"
                name="shipping"
                id="7"
                value={"T_C_To_Address"}
              />
              <FaHome className="icon" />
              <label htmlFor="7">To Address </label>
            </div>
            <div>
              <input
                type="radio"
                name="shipping"
                id="8"
                value={"T_C_To_Post"}
              />
              <FaEnvelope className="icon" />
              <label htmlFor="8">To Post</label>
            </div>
          </>
        )}
        {temp1.name === "Cash" && (
          <div>
            <input type="radio" name="shipping" id="9" value={"C_Personal"} />
            <FaWalking className="icon" />
            <label htmlFor="9">Personal collection </label>
          </div>
        )}
        {temp1.name === "Crypto" && (
          <>
            <div>
              <input
                type="radio"
                name="shipping"
                id="10"
                value={"T_C_To_Address"}
              />
              <FaHome className="icon" />
              <label htmlFor="10">To Address </label>
            </div>
            <div>
              <input
                type="radio"
                name="shipping"
                id="11"
                value={"T_C_To_Post"}
              />
              <FaEnvelope className="icon" />
              <label htmlFor="11">To Post </label>
            </div>
          </>
        )}
      </Shipping>
    </Container>
  );
};

export default ShippingPayment;
