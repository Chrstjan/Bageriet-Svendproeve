import { LandingPage } from "../pages/LandingPage";
import { PageNotFound } from "../pages/PageNotFound";

export const Paths = [
  {
    path: "/",
    element: LandingPage,
    text: "Forside",
  },
  {
    path: "/pr",
    element: LandingPage,
    text: "Produkter",
  },
  {
    path: "/kopn",
    element: LandingPage,
    text: "Kontakt",
  },
  {
    path: "/login",
    element: LandingPage,
    text: "Login",
  },
  {
    path: "/*",
    element: PageNotFound,
    text: "",
  },
];
