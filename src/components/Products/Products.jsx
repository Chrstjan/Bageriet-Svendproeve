import { FaRegComments } from "react-icons/fa6";
import s from "./Products.module.scss";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const Products = ({ data, categoryHeader }) => {
  const navigate = useNavigate();

  const handleProductClick = (item) => {
    console.log(item);
    navigate(`/produkter/${item.id}`);
  };

  return (
    <>
      {data.slice(0, 8).map((item) => {
        return (
          <figure className={s.productStyling} key={item?.id}>
            <header>
              {categoryHeader ? <h2>{item?.title}</h2> : null}
              <img src={item?.image.fullpath} />
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
