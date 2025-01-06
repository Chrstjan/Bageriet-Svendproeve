import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { BurgerMenu } from "../components/BurgerMenu/BurgerMenu";
import { useState } from "react";

export const MainLayout = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <Navbar isHidden={isHidden} />
      <BurgerMenu setIsHidden={setIsHidden} />
      <Outlet />
      <Footer />
    </>
  );
};
