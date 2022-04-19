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
          <tbody>
            <tr>
              <th>Name</th>
              <td>{order.name + " " + order.lastName}</td>
            </tr>

            <tr>
              <th>E-mail</th>
              <td>{order.email}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{order.PhoneNumber}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{order.address}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{order.city}</td>
            </tr>
            <tr>
              <th>Postal code</th>
              <td>{order.zip}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{order.country}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Payment and Shipping</h2>
        <table onClick={() => setStep(2)}>
          <thead>
            <tr>
              <th>Payment</th>
              <th>Shipment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order.PaymentMethod}</td>
              <td>{order.ShippingMethod}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Order;
