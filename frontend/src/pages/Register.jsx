import FormRow from "../components/FormRow";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Link, useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { user, isLoading, registerUser, loginUser } = useAppContext();
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
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      if (password !== confirmPassword) {
        console.log("passwords does not match");
        return;
      }

      registerUser(currentUser);
    }
  };

  const handleMember = () => {
    setState({ ...state, isMember: !state.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

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
