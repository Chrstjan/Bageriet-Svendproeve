import s from "./Categories.module.scss";

export const Categories = ({ data, setCategoryProducts }) => {
  const handleCategoryClick = async (item) => {
    const res = await fetch(
      `https://api.mediehuset.net/bakeonline/categories/${item.id}`
    );

    if (!res.ok) {
      console.error("Error in fetch");
    }
    const data = await res.json();
    console.log(data);
    setCategoryProducts(data?.item.products);
  };

  return (
    <ul className={s.categoriesStyling}>
      {data?.map((item) => {
        return (
          <li onClick={() => handleCategoryClick(item)} key={item?.id}>
            {item?.title}
          </li>
        );
      })}
    </ul>
  );
};
