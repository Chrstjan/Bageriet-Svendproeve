import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        {Paths.map((item) => {
          return (
            <Route
              key={item.text}
              path={item.path}
              element={<item.element />}
            />
          );
        })}
      </Route>
    </Routes>
  );
};
