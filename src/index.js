import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./Test";
import Challenges from "./Challenges";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/challenges",
    element: <Challenges />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />

  // <App />
);
