import s from "./BurgerMenu.module.scss";

export const BurgerMenu = ({ setIsHidden }) => {
  return (
    <div
      onClick={() => setIsHidden((prev) => !prev)}
      className={s.burgerStyling}
    >
      <span className={s.barStyling}></span>
      <span className={s.barStyling}></span>
      <span className={s.barStyling}></span>
    </div>
  );
};