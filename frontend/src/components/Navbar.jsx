import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Container, Nav } from "../assets/styles/Navbar_Style";
import { FaShoppingCart, FaBars, FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user, cart } = useAppContext();
  const navigate = useNavigate();

  let cartAmount = 0;
  cart.forEach((i) => {
    cartAmount += i.count;
  });

  const toProfile = () => {
    if (user) {
      navigate("/profile");
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
              <span className="cart-size">{cartAmount}</span>
            )}
          </NavLink>

          <button className="nav-link register" onClick={toProfile}>
            {user ? <FaUserCircle /> : ""} {user ? user.name : "Sign in"}
          </button>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
