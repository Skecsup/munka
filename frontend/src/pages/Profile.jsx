import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import AdminOrder from "../components/AdminOrder";
import { useState } from "react";
import { Container, Left, Right } from "../assets/styles/Profile_Style";
import { FaSignOutAlt } from "react-icons/fa";

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
      <Left>
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

          <button type="submit">Update</button>
        </form>
        <button onClick={logoutHandler}>
          <FaSignOutAlt /> Logout
        </button>
      </Left>
      <Right>
        {user.role === 1 && <button onClick={toAdmin}>ADMIN PAGE</button>}
        {user.role === 0 && (
          <div>
            <h1>Orders</h1>
            <button onClick={displayOrders}>get orders</button>
            {orders.map((order, index) => (
              <AdminOrder order={order} key={index} />
            ))}
          </div>
        )}
      </Right>
    </Container>
  );
};

export default Profile;
