import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Order from "./pages/Order.tsx";
import Transaction from "./pages/Transaction.tsx";

const router = createBrowserRouter([
  {
    path: "/order/:category",
    element: <Order />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
