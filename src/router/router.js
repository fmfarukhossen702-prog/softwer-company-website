import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../Pages/Home.jsx"
import About from "../Pages/About.jsx"
import Services from "../Pages/Services.jsx"
import Portfolio from "../Pages/Portfolio.jsx"
import Careers from "../Pages/Careers.jsx"
// import About from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      { path: "careers", Component: Careers },
    ],
  },
]);
