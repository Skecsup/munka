import { CartItems, Container, SideBar } from "../assets/styles/Cart_Style";
import SingleCartProduct from "../components/SingleCartProduct";
import { useAppContext } from "../context/appContext";
import DeliveryData from "../components/DeliveryData";
import ShippingPayment from "../components/ShippingPayment";
import Order from "../components/Order";

import { useState } from "react";

const Cart = () => {
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState("");
  const [ship, setShip] = useState("");
  console.log(step);

  const proceedHandler = () => {
    setStep(step + 1);
    if (step >= 3) {
      setStep(0);
    }
  };
  const { cart } = useAppContext();
  let totalPrice = 0;
  let totalItems = 0;
  cart.forEach((i) => {
    totalPrice += i.price * i.count;
    totalItems += i.count;
  });

  let cartContent = (
    <CartItems>
      {cart.map((item, index) => {
        return <SingleCartProduct prod={item} key={index} />;
      })}
    </CartItems>
  );
  let billingData = <DeliveryData />;

  let shipping_payment = (
    <ShippingPayment
      payment={payment}
      setPayment={setPayment}
      ship={ship}
      setShip={setShip}
    />
  );
  let order = <Order totalPrice={totalPrice} ship={ship} payment={payment} />;

  return (
    <>
      <Container>
        {step === 0 && cartContent}
        {step === 1 && billingData}
        {step === 2 && shipping_payment}
        {step === 3 && order}

        <SideBar>
          <h1>Subtotal ({totalItems}) items</h1>
          <h2>Total: {totalPrice}€</h2>
          <button onClick={proceedHandler}>Proceed to checkout</button>
        </SideBar>
      </Container>
    </>
  );
};

export default Cart;
