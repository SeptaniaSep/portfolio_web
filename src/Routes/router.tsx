import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/Pages/layout";
import PortfolioDetailWrapper from "@/Pages/Portofolio/portofWraper";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, 
  },
  {
    path: "/portofolio/:id",
    Component: PortfolioDetailWrapper, 
  },
]);
