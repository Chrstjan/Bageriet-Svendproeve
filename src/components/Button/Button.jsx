import s from "./Button.module.scss";

export const Button = ({ action, text, type }) => {
  return (
    <div className={`${s.buttonStyling} ${s[type]}`} onClick={action}>
      {text}
    </div>
  );
};
