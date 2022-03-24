import { useAppContext } from "../context/appContext";
import FormRow from "./FormRow";

const DeliveryData = () => {
  const { user } = useAppContext();
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <div>
          <h1>Name</h1>
          <FormRow
            type="text"
            name="name"
            value={user.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="lastName"
            value={user.lastName}
            handleChange={handleChange}
          />
        </div>
        <div>
          <h1>email</h1>
          <FormRow
            type="email"
            name="email"
            value={user.email}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="phone"
            value={"+421"}
            handleChange={handleChange}
          />
        </div>
        <div>
          <h1>address</h1>
          <FormRow
            type="text"
            name="address"
            value={user.address}
            handleChange={handleChange}
          />
        </div>
        <div>
          <FormRow
            type="text"
            name="city"
            value={user.city}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="country"
            value={user.country}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="zip"
            value={user.zip}
            handleChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default DeliveryData;
