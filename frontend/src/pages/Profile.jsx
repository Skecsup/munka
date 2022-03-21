import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import FormRow from "../components/FormRow";
import { useState } from "react";
import { Wrapper } from "../assets/styles/Profile_Style";

const Profile = () => {
  const { user, logoutUser, updateUser } = useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [zip, setZip] = useState(user?.zip);

  const navigate = useNavigate();

  const logoutHandler = () => {
    logoutUser();
    navigate("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updateUser({ name, email, address, city, zip });
  };

  return (
    <Wrapper>
      <h1>Profile</h1>

      <form onSubmit={submitHandler}>
        <FormRow
          type="text"
          name="name"
          value={name}
          handleChange={(e) => setName(e.target.value)}
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
    </Wrapper>
  );
};

export default Profile;
