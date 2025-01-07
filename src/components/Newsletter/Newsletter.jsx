import { Icon } from "../Icon/Icon";
import s from "./Newsletter.module.scss";

export const Newsletter = () => {
  return (
    <div className={s.newsletterStyling}>
        <header>
            <h3>Tilmeld dig vores nyhedsbrev</h3>
            <p>Der er mange tilgænglige udgaver af Lorem Ipsum, men de fleste</p>
        </header>
        <span className={s.inputContainer}>
            <Icon src="/images/letter.svg" type="inputIcon"/>
            <input type="email" name="email" placeholder="Indtast din email..."/>
            <input type="submit" value="Tilmeld"/>
        </span>
    </div>
  )
}