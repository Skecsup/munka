import FormRow from "../components/FormRow";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: false,
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const { isLoading, registerUser } = useAppContext();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, isMember } = state;

    if (isMember && (!email || !password)) {
      console.log("provide all values to login");
      return;
    }
    if (!isMember && (!name || !email || !password || !confirmPassword)) {
      console.log("provide all values to register");
      return;
    }
    if (isMember) {
      console.log("already a user pls login");
    } else {
      if (password !== confirmPassword) {
        console.log("passwords does not match");
        return;
      }
      const currentUser = { name, email, password };
      registerUser(currentUser);
    }

    console.log(state);
  };

  const handleMember = () => {
    setState({ ...state, isMember: !state.isMember });
  };

  return (
    <>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/shop">shop</Link>
        <Link to="/register">register</Link>
      </nav>
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
              name="confirmPassword"
              value={state.confirmPassword}
              handleChange={handleChange}
              labelText="Re-Enter Password"
            />
          )}
          <button disabled={isLoading}>
            {state.isMember ? "Login" : "Register"}
          </button>
          <p>
            {!state.isMember ? "Already a member?" : "Not a member?"}
            <button type="button" onClick={handleMember}>
              {!state.isMember ? "Login" : "Register"}
            </button>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
