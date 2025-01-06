import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Categories } from "../components/Categories/Categories";
import { Products } from "../components/Products/Products";

export const ProductsPage = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.mediehuset.net/bakeonline/categories"
  );
  const [categories, setCategories] = useState();
  const [categoryProducts, setCategoryProducts] = useState();

  useEffect(() => {
    console.log(data);
    if (data) {
      setCategories(data.items);
    }
  }, [data]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error in fetch, try again</h2>;
  }

  return (
    <Wrapper>
      {categories && categories.length > 0 ? (
        <Categories
          data={categories}
          setCategoryProducts={setCategoryProducts}
        />
      ) : null}
      {categoryProducts ? <Products data={categoryProducts} /> : null}
    </Wrapper>
  );
};
