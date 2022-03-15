import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { Container } from "../assets/styles/Register_Style";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isMember: false,
  role: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const { user, isLoading, registerUser, loginUser } = useAppContext();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleMember = () => {
    setState({ ...state, isMember: !state.isMember });
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

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Container>
      <div className="wrapper">
        <Logo className="logo" />
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
          <button type="submit" className="submit" disabled={isLoading}>
            {state.isMember ? "Login" : "Register"}
          </button>
          <p>
            {!state.isMember ? "Already a member?" : "Not a member?"}
            <button type="button" className="change" onClick={handleMember}>
              {!state.isMember ? "Login" : "Register"}
            </button>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default Register;
