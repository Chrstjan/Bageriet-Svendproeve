import s from "./Card.module.scss";

export const Card = ({src, headerText, subText}) => {
  return (
    <figure className={s.cardStyling}>
        <img src={src} alt={headerText}/>
        <figcaption>
            <h3>{headerText}</h3>
            <p>{subText}</p>
        </figcaption>
    </figure>
  )
}