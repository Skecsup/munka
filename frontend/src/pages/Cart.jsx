import { CartItems, Container, SideBar } from "../assets/styles/Cart_Style";
import SingleCartProduct from "../components/SingleCartProduct";
import { useAppContext } from "../context/appContext";

const Cart = () => {
  const { cart } = useAppContext();
  let totalprice = 0;
  let totalitems = 0;
  cart.map((i) => {
    totalprice += i.price * i.count;
    totalitems += i.count;
  });
  return (
    <Container>
      <CartItems>
        {cart.map((item, index) => {
          return <SingleCartProduct prod={item} key={index} />;
        })}
      </CartItems>
      <SideBar>
        <h1>Subtotal ({totalitems}) items</h1>
        <h2>Total: {totalprice}€</h2>
        <button>Proceed to checkout</button>
      </SideBar>
    </Container>
  );
};

export default Cart;
