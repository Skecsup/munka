import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/shop">shop</Link>
        <Link to="/register">register</Link>
      </nav>
      ABUOT
    </div>
  );
};

export default About;
