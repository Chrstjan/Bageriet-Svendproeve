import { FaRegComments } from "react-icons/fa6";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import s from "./Products.module.scss";

import product1 from "/images/1.png" 
import product2 from "/images/2.png" 
import product3 from "/images/3.png" 
import product4 from "/images/4.png" 
import product5 from "/images/5.png" 
import product6 from "/images/6.png" 
import product7 from "/images/7.png" 
import product8 from "/images/8.png" 

export const Products = ({ data, categoryHeader }) => {
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    console.log(item);
    navigate(`/produkter/${item.id}`);
  };

  //Temp array fordi api billeder ikke virker
  const productImages = [product1, product2, product3, product4, product5, product6, product7, product8]

  return (
    <>
      {data.slice(0, 8).map((item, index) => {
        const productImage = productImages[index];

        return (
          <figure className={s.productStyling} key={item?.id}>
            <header>
              {categoryHeader ? <h2>{item?.title}</h2> : null}
              <img src={productImage}/>
              {!categoryHeader ? (
                <>
                  <span className={s.commentContainer}>
                    <p>{item?.num_comments}</p>
                    <FaRegComments />
                  </span>
                  <h3>{item?.title}</h3>
                </>
              ) : null}
            </header>
            <span className={s.infoContainer}>
              {!categoryHeader ? (
                <>
                  <p>{item?.teaser?.slice(0, 100)}...</p>
                  <Button
                    type="moreButton"
                    text="Se Mere"
                    action={() => handleProductClick(item)}
                  />
                </>
              ) : (
                <p>{item?.description}</p>
              )}
            </span>
          </figure>
        );
      })}
    </>
  );
};
