import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes"; // Importas tus rutas

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
     <RouterProvider router={router} />
    </PrimeReactProvider>
  </StrictMode>
);
