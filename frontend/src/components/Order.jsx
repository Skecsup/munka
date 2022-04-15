import { useAppContext } from "../context/appContext";
import { Container, Items } from "../assets/styles/Order_Style";

const Order = ({ order, setStep }) => {
  const { cart } = useAppContext();
  return (
    <Container>
      <h1>Your order</h1>
      <div>
        <h2>Items</h2>
        <Items onClick={() => setStep(0)}>
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.image}
                  width="50px"
                  height="50px"
                  alt={item.name}
                />
                <p>
                  {item.count} x {item.name}
                </p>
              </div>
            );
          })}
        </Items>
      </div>
      <div>
        <h2>Costumer details</h2>
        <table onClick={() => setStep(1)}>
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>City</th>
            <th>Postal code</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>{order.name + " " + order.lastName}</td>
            <td>{order.email}</td>
            <td>{order.PhoneNumber}</td>
            <td>{order.address}</td>
            <td>{order.city}</td>
            <td>{order.zip}</td>
            <td>{order.country}</td>
          </tr>
        </table>
      </div>
      <div>
        <h2>Payment and Shipping</h2>
        <table onClick={() => setStep(2)}>
          <tr>
            <th>Payment</th>
            <th>Shipment</th>
          </tr>
          <tr>
            <td>{order.PaymentMethod}</td>
            <td>{order.ShippingMethod}</td>
          </tr>
        </table>
      </div>
    </Container>
  );
};

export default Order;
