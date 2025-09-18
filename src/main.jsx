import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/branding.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./pages/Body.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"
import ErrorPage from "./pages/ErrorPage.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      {path: "/contact", element: <Contact />},
      {path: "/restaurants/:resId", element: <RestaurantMenu />},
      {path: "*", element: <ErrorPage />},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
