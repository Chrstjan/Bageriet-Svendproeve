import { Paths } from "../../router/Paths";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        {Paths.slice(0, 4).map((item) => {
          return <li key={item.text}>{item.text}</li>;
        })}
      </ul>
    </nav>
  );
};
