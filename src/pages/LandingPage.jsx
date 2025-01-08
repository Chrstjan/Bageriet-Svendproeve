import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { Products } from "../components/Products/Products";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Card } from "../components/Card/Card";
import { Slider } from "../components/Slider/Slider";

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
      <Slider />
      <PageHeader headerText="Vi skaber lækkert! brød" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"/>
      <Wrapper type="infoWrapper">
        <Card src="/images/article.jpg" headerText="Kreativitet Dyrkes" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har"/>
        <Card src="/images/article2.jpg" headerText="Vi elsker brød" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har"/>
        <Card src="/images/article3.jpg" headerText="Sans for detaljer" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har"/>
      </Wrapper>
      <Wrapper>
        <Newsletter />
      </Wrapper>
      <PageHeader headerText="Nyeste bagværk" subText="Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"/>
      <Wrapper type="productsContainer">
        {products.length > 0 && products ? <Products data={products} /> : null}
      </Wrapper>
    </>
  );
};
