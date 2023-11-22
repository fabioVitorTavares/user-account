import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { router } from "./Routes/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);