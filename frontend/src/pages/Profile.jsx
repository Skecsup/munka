import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import { useState } from "react";
import { Container } from "../assets/styles/Profile_Style";

const Profile = () => {
  const { user, logoutUser, updateUser, getOrders, orders } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState(user?.address);
  const [country, setCountry] = useState(user?.country);
  const [city, setCity] = useState(user?.city);
  const [zip, setZip] = useState(user?.zip);

  const navigate = useNavigate();

  const displayOrders = () => {
    getOrders(user._id);
  };

  const toAdmin = () => {
    navigate("/admin");
  };

  const logoutHandler = () => {
    logoutUser();
    navigate("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updateUser({ name, email, address, country, city, zip, lastName });
  };

  return (
    <Container>
      <div>
        <h1>Profile</h1>

        <form onSubmit={submitHandler}>
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="text"
            name="lastName"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow
            type="text"
            name="address"
            value={address}
            handleChange={(e) => setAddress(e.target.value)}
          />
          <div>
            <FormRow
              type="text"
              name="country"
              value={country}
              handleChange={(e) => setCountry(e.target.value)}
            />
            <FormRow
              type="text"
              name="city"
              value={city}
              handleChange={(e) => setCity(e.target.value)}
            />
            <FormRow
              type="text"
              name="zip"
              value={zip}
              handleChange={(e) => setZip(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={logoutHandler}>logout</button>
      </div>
      <div>
        {user.role === 1 && <button onClick={toAdmin}>ADMIN PAGE</button>}
        {user.role === 0 && (
          <div>
            <h1>Orders</h1>
            <button onClick={displayOrders}>get orders</button>
            {orders.map((order) => {
              return <div key={order._id}>{order._id}</div>;
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Profile;