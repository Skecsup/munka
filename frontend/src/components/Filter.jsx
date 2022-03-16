import React from "react";
import { Container } from "../assets/styles/Filter_Style";

const Filter = () => {
  return (
    <Container>
      <div>
        <label htmlFor="search">Search</label>
        <input type="text" placeholder="Search..." name="search" />
      </div>
      <div>
        <div>
          <input type="checkbox" name="virag" />
          <label htmlFor="virag">virag</label>
        </div>
        <div>
          <input type="checkbox" name="traktor" />
          <label htmlFor="traktor">traktor</label>
        </div>
        <div>
          <input type="checkbox" name="kocsi" />
          <label htmlFor="kocsi">kocsi</label>
        </div>
      </div>
      <div>
        <input type="range" name="price" />
        <label htmlFor="price">price</label>
      </div>
      <button>clear filters</button>
    </Container>
  );
};

export default Filter;
