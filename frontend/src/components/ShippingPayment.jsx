import { useState } from "react";

const ShippingPayment = ({ dispatch }) => {
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

  const handleChange = () => {
    dispatch({ type: "SET_PAYMENT_SHIPPING", payload: [temp1, temp2] });
  };

  const onPaymentChange = (e) => {
    setTemp1({
      ...temp1,
      name: e.target.value,
      price: checkForD(e.target.value),
    });
    console.log(temp1);
  };
  const onShipChange = (e) => {
    setTemp2({
      ...temp2,
      name: e.target.value,
      price: calcPrice(e.target.value),
    });
    console.log(temp2);
  };
  return (
    <>
      <div onChange={onPaymentChange}>
        <label htmlFor="1">Dobierka</label>
        <input type="radio" name="payment" id="1" value={"Dobierka"} />

        <label htmlFor="2">Prevod</label>
        <input type="radio" name="payment" id="2" value={"Prevod"} />

        <label htmlFor="3">Hotovost</label>
        <input type="radio" name="payment" id="3" value={"Hotovost"} />

        <label htmlFor="4">Crypto</label>
        <input type="radio" name="payment" id="4" value={"Crypto"} />
      </div>
      <div onChange={onShipChange}>
        {temp1.name === "Dobierka" && (
          <>
            <label htmlFor="1">Na adresu</label>
            <input type="radio" name="shipping" id="1" value={"D_Na_Adresu"} />

            <label htmlFor="2">Na postu</label>
            <input type="radio" name="shipping" id="2" value={"D_Na_Postu"} />
          </>
        )}
        {temp1.name === "Prevod" && (
          <>
            <label htmlFor="1">
              Na adresu prevod = SK11 0000 0000 0012 3456 7890, TATRA
            </label>
            <input
              type="radio"
              name="shipping"
              id="1"
              value={"P_C_Na_Adresu"}
            />

            <label htmlFor="2">
              Na postu prevod = SK11 0000 0000 0012 3456 7890, TATRA
            </label>
            <input type="radio" name="shipping" id="2" value={"P_C_Na_Postu"} />
          </>
        )}
        {temp1.name === "Hotovost" && (
          <>
            <label htmlFor="1">osobny odber</label>
            <input type="radio" name="shipping" id="1" value={"O_Odber"} />
          </>
        )}
        {temp1.name === "Crypto" && (
          <>
            <label htmlFor="1">Na adresu</label>
            <input
              type="radio"
              name="shipping"
              id="1"
              value={"P_C_Na_Adresu"}
            />

            <label htmlFor="2">Na postu</label>
            <input type="radio" name="shipping" id="2" value={"P_C_Na_Postu"} />
          </>
        )}
      </div>
      <button onClick={handleChange}>submit</button>
    </>
  );
};

export default ShippingPayment;
