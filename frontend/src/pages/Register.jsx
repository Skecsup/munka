import FormRow from "../components/FormRow";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: false,
};

const Register = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleMember = () => {
    setState({ ...state, isMember: !state.isMember });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{state.isMember ? "Login" : "Register"}</h3>
        {!state.isMember && (
          <FormRow
            type="text"
            name="name"
            value={state.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={state.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={state.password}
          handleChange={handleChange}
        />
        {!state.isMember && (
          <FormRow
            type="password"
            name="password"
            value={state.confirmPassword}
            handleChange={handleChange}
            labelText="Re-Enter Password"
          />
        )}
        <button>{state.isMember ? "Login" : "Register"}</button>
        <p>
          {!state.isMember ? "Already a member?" : "Not a member?"}
          <button type="button" onClick={handleMember}>
            {!state.isMember ? "Login" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
