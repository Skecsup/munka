import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import { Container, Nav } from "../assets/styles/Navbar_Style";
import { FaShoppingCart, FaBars } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          </NavLink>
          <NavLink className="nav-link register" to="/register">
            Sign in
          </NavLink>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
