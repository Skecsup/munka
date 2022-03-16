import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Container, Nav } from "../assets/styles/Navbar_Style";
import {
  FaShoppingCart,
  FaBars,
  FaUserCircle,
  FaCaretDown,
} from "react-icons/fa";
import { useAppContext } from "../context/appContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { user, cart } = useAppContext();
  const navigate = useNavigate();

  const logout = () => {
    console.log("buttonclikc");
  };

  const showdropdown = () => {
    if (user) {
      setShowLogout(!showLogout);
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <Container>
        <Logo />
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>

        <Nav isOpen={isOpen}>
          <NavLink className="nav-link" to="/">
            home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            about
          </NavLink>
          <NavLink className="nav-link" to="/shop">
            shop
          </NavLink>
          <NavLink className="nav-link" to="/cart">
            <FaShoppingCart />
            {cart.length !== 0 && (
              <span className="cart-size">{cart.length}</span>
            )}
          </NavLink>

          <button className="nav-link register" onClick={showdropdown}>
            {user ? <FaUserCircle /> : ""} {user ? user.name : "Sign in"}
            {user ? <FaCaretDown /> : ""}
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
