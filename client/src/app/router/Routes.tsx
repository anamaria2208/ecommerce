import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import About from "../../features/about/About";
import Contact from "../../features/contact/Contact";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path : 'catalog/:id',
        element : <ProductDetails />
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
