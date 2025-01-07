import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Categories } from "../components/Categories/Categories";
import { Products } from "../components/Products/Products";
import { PageHeader } from "../components/PageHeader/PageHeader";

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
    <>
    <PageHeader headerText="Vores elskede bagværk" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"/>
    <Wrapper>
      {categories && categories.length > 0 ? (
        <Categories
          data={categories}
          setCategoryProducts={setCategoryProducts}
        />
      ) : null}
      {categoryProducts ? <Products data={categoryProducts} /> : null}
    </Wrapper>
    </>
  );
};
