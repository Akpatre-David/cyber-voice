import path from "path";
import react from "react";
import Login from "./components/login/login";
import NotFound from "./components/notFound/notFound";


export const routes = [
  { path: "/", element: <Login /> },

  {
    path: "*",
    element: <NotFound />,
  },

];
