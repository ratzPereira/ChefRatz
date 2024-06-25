import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import Search from "./pages/Search.jsx";
import SingleProduct from "./pages/products/SingleProduct.jsx";
import Recepies from "./pages/products/Recepies.jsx";
import ResourcePage from "./pages/resourcePage/ResourcePage.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/items/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/items/${params.id}`).then((res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("Failed to load data");
          }),
      },
      {
        path: "/Recipes",
        element: <Recepies />,
      },
      {
        path: "/Resources",
        element: <ResourcePage />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
