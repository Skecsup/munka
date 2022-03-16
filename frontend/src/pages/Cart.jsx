import { Container } from "../assets/styles/Cart_Style";
import { useAppContext } from "../context/appContext";

const Cart = () => {
  const { cart } = useAppContext();
  console.log(cart);
  return (
    <Container>
      <section>
        {cart.map((item) => {
          return <div>{item.name}</div>;
        })}
      </section>
      <section>
        <h1>sidebar</h1>
      </section>
    </Container>
  );
};

export default Cart;
