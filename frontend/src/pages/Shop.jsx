import { useState } from "react";
import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import { Container, AllProducts } from "../assets/styles/Shop_Style";
import { useAppContext } from "../context/appContext";

const Shop = () => {
  const { products } = useAppContext();

  return (
    <Container>
      <Filter />

      <AllProducts>
        {products.map((product, index) => {
          return <SingleProduct product={product} key={index} />;
        })}
      </AllProducts>
    </Container>
  );
};

export default Shop;
