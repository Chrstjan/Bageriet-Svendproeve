import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Products } from "../components/Products/Products";
import { Ingredients } from "../components/Ingredients/Ingredients";
import { Button } from "../components/Button/Button";

export const ProductPage = () => {
  const productID = useParams();
  const [product, setProduct] = useState({});

  //Bruger Object.values til at få værdien fra productID data object
  const { data, isLoading, error } = useFetch(
    `https://api.mediehuset.net/bakeonline/products/${Object.values(productID)}`
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch, try again</h2>;
  }

  useEffect(() => {
    if (data) {
      setProduct([data?.item]);
    }
  }, [data]);

  return (
    <>
      <Wrapper>
        {product.length > 0 && product ? (
          <Products data={product} categoryHeader />
        ) : null}
        <Button text="Like!  &#9825;" type="likeButton" />
        {product.length > 0 && product ? (
          <Ingredients data={product[0]?.ingredients} />
        ) : null}
      </Wrapper>
    </>
  );
};
