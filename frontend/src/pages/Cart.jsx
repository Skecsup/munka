import { CartItems, Container, SideBar } from "../assets/styles/Cart_Style";
import SingleCartProduct from "../components/SingleCartProduct";
import { useAppContext } from "../context/appContext";

import { useState } from "react";

const Cart = () => {
  const [step, setStep] = useState(0);
  console.log(step);

  const proceedHandler = () => {
    setStep(step + 1);
    if (step >= 3) {
      setStep(0);
    }
  };
  const { cart, user } = useAppContext();
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
  let billingData = (
    <div>
      <form>
        <input type="text" value={user.name} />
        <input type="text" value={user.email} />
        <input type="text" value={user.address} />
        <input type="text" value={user.city} />
        <input type="text" value={user.zip} />
      </form>
    </div>
  );
  let shipping_payment = <div>ship and pay</div>;
  let order = <div>order</div>;

  return (
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
  );
};

export default Cart;
