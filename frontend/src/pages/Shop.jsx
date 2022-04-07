import Filter from "../components/Filter";
import SingleProduct from "../components/SingleProduct";
import { Container, AllProducts } from "../assets/styles/Shop_Style";
import { useAppContext } from "../context/appContext";
import { useCallback, useState } from "react";

const Shop = () => {
  const { products } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  const eventHandler = useCallback((data) => {
    setFilteredProducts(
      filteredProducts.filter(
        (item) =>
          item.name.toLowerCase().includes(data.searchValue.toLowerCase()) &&
          item.price <= data.priceRange
      )
    );
  }, []);

  return (
    <Container>
      <Filter forwardData={eventHandler} />

      <AllProducts>
        {filteredProducts.length === 0
          ? "Products not found"
          : filteredProducts.map((product, index) => {
              return <SingleProduct product={product} key={index} />;
            })}
      </AllProducts>
    </Container>
  );
};

export default Shop;
