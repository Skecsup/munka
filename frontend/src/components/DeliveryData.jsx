import { useAppContext } from "../context/appContext";
import FormRow from "./FormRow";
import { useEffect, useState } from "react";
import { Container, Row } from "../assets/styles/DeliveryData_Style";

const DeliveryData = ({ forwardData }) => {
  const { user } = useAppContext();

  const initialState = {
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "+421",
    address: user?.address || "",
    country: user?.country || "",
    city: user?.city || "",
    zip: user?.zip || "",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (forwardData) {
      forwardData({ data: data, type: "DELIVERY_DATA" });
    }
  }, [data, forwardData]);

  return (
    <Container>
      <div>
        <h1>Contacts</h1>
        <Row>
          <FormRow
            type="text"
            name="name"
            value={data.name}
            handleChange={handleChange}
            labelText="First name"
          />
          <FormRow
            type="text"
            name="lastName"
            value={data.lastName}
            handleChange={handleChange}
            labelText="Last name"
          />
        </Row>
        <FormRow
          type="email"
          name="email"
          value={data.email}
          handleChange={handleChange}
          labelText="E-mail"
        />
        <FormRow
          type="text"
          name="phone"
          value={data.phone}
          handleChange={handleChange}
          labelText="Phone number"
        />
      </div>
      <div>
        <h1>Shipping address</h1>

        <FormRow
          type="text"
          name="address"
          value={data.address}
          handleChange={handleChange}
        />

        <FormRow
          type="text"
          name="city"
          value={data.city}
          handleChange={handleChange}
        />
        <Row>
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
            labelText="Postal code"
          />
        </Row>
      </div>
    </Container>
  );
};

export default DeliveryData;
