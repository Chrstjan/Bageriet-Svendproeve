import s from "./PageHeader.module.scss";

export const PageHeader = ({headerText, subText}) => {
  return (
    <header className={s.headerStyling}>
        <h2>{headerText}</h2>
        <p>{subText}</p>
    </header>
  )
}