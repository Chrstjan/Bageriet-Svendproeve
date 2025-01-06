import s from "./ingredients.module.scss";

export const Ingredients = ({ data }) => {
  return (
    <div className={s.IngredientContainer}>
      <h3>Ingredienser</h3>
      {data?.map((item) => {
        return (
          <span className={s.IngredientStyling} key={item?.ingredient_title}>
            <p>
              {item?.amount}
              {item?.unit_abbr}. {item?.ingredient_title}
            </p>
          </span>
        );
      })}
    </div>
  );
};
