import React, { useState, useEffect } from "react";
import { Container } from "../assets/styles/Filter_Style";

const Filter = ({ forwardData }) => {
  const [priceRange, setPriceRange] = useState(1000);
  const [searchValue, setSearchValue] = useState("");
  const priceSearch = (e) => {
    setPriceRange(e.target.value);
  };
  const nameSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (forwardData) {
      forwardData({ priceRange, searchValue });
    }
  }, [priceRange, searchValue, forwardData]);

  return (
    <Container>
      <div>
        <label htmlFor="search">Search</label>
        <input
          onChange={nameSearch}
          type="text"
          placeholder="Search..."
          name="search"
          value={searchValue}
        />
      </div>

      <div>
        <input
          value={priceRange}
          onChange={priceSearch}
          type="range"
          name="price"
          step={10}
          min={0}
          max={1000}
        />
        <label htmlFor="price">price</label>
        <p>{priceRange} EUR</p>
      </div>
    </Container>
  );
};

export default Filter;
