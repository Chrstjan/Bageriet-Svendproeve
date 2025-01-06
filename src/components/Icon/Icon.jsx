import s from "./Icon.module.scss";

export const Icon = ({ src, type }) => {
  return <img className={`${s.iconStyling} ${s[type]}`} src={src} />;
};
