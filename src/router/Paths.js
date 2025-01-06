import { LandingPage } from "../pages/LandingPage";
import { ProductPage } from "../pages/ProductPage";
import { PageNotFound } from "../pages/PageNotFound";
import { ProductsPage } from "../pages/ProductsPage";
import { ContactPage } from "../pages/ContactPage";
import { LoginPage } from "../pages/LoginPage";

export const Paths = [
  {
    path: "/",
    element: LandingPage,
    text: "Forside",
  },
  {
    path: "/produkter",
    element: ProductsPage,
    text: "Produkter",
  },
  {
    path: "/produkter/:productID",
    element: ProductPage,
  },
  {
    path: "/kontakt",
    element: ContactPage,
    text: "Kontakt",
  },
  {
    path: "/login",
    element: LoginPage,
    text: "Login",
  },
  {
    path: "/*",
    element: PageNotFound,
    text: "",
  },
];
