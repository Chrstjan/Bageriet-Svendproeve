import { LandingPage } from "../pages/LandingPage";
import { ProductPage } from "../pages/ProductPage";
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
    path: "/produkter/:productID",
    element: ProductPage,
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
