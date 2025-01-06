import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { Products } from "../components/Products/Products";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const LandingPage = () => {
  const [products, setProducts] = useState([]);

  const { data, isLoading, error } = useFetch(
    "https://api.mediehuset.net/bakeonline/products"
  );

  useEffect(() => {
    console.log(data);
    if (data) {
      setProducts(data?.items);
    }
  }, [data]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch, try again</h2>;
  }

  return (
    <>
      <Wrapper type="productsContainer">
        {products.length > 0 && products ? <Products data={products} /> : null}
      </Wrapper>
    </>
  );
};
