import { useAppContext } from "../context/appContext";
import FormRow from "./FormRow";
import { useState } from "react";

const DeliveryData = ({ dispatch }) => {
  const { user } = useAppContext();
  const initialState = {
    name: user?.name || "",
    lastName: user.lastName || "",
    email: user.email || "",
    phone: "+421",
    address: user.address || "",
    country: user.country || "",
    city: user.city || "",
    zip: user.zip || "",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "DELIVERY_DATA", payload: { data } });
  };
  return (
    <div>
      <form>
        <div>
          <h1>Name</h1>
          <FormRow
            type="text"
            name="name"
            value={data.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            value={data.lastName}
            handleChange={handleChange}
          />
        </div>
        <div>
          <h1>email</h1>
          <FormRow
            type="email"
            name="email"
            value={data.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="phone"
            value={data.phone}
            handleChange={handleChange}
          />
        </div>
        <div>
          <h1>address</h1>
          <FormRow
            type="text"
            name="address"
            value={data.address}
            handleChange={handleChange}
          />
        </div>
        <div>
          <FormRow
            type="text"
            name="city"
            value={data.city}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="country"
            value={data.country}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="zip"
            value={data.zip}
            handleChange={handleChange}
          />
        </div>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
};

export default DeliveryData;
