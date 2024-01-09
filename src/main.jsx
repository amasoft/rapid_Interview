import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResultList from "./ResultList.jsx";
import ArticleList from "./ArticleList.jsx";
import Navigation from "./Navigation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResultList />,
  },
  {
    path: "/article",
    element: <ArticleList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
