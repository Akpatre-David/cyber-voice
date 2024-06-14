import path from "path";
import react from "react";
import Login from "./component/login/login";
import NotFound from "./component/notFound/notFound";

export const routes = [
  { path: "/", element: <Login /> },

  {
    path: "*",
    element: <NotFound />,
  },
];
