import { Icon } from "../Icon/Icon";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footerStyling}>
      <span className={s.circleContainer}>
        <Icon src={"/images/chevron.png"} type="upArrow" />
      </span>
      <h3>bageriet</h3>
      <p>
        Der er mange tilgænelige udgaver af Lorem Ipsum, men de fleste udgaver
        har en gennemgået forandringer.
      </p>
      <span className={s.copyrightContainer}>
        <p>Copyright &copy; 2017 bageriet aps</p>
      </span>
    </footer>
  );
};
