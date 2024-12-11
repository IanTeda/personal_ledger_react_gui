import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { NextUIProvider } from "@nextui-org/react";

import router from "./router";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>
);
