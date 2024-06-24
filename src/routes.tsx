import path from "path";
import react from "react";
import Login from "./components/login/login";
import NotFound from "./components/notFound/notFound";
import Register from "./components/register/register";

export const routes = [
  { path: "/", element: <Login /> },

  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "register",
    element: <Register />,
  },
];
