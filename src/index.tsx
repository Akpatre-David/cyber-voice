import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { routes } from "./routes";
import { RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "./utils/snackBar";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

root.render(
  // <React.StrictMode>
  //   <SnackbarProvider>
  //     <QueryClientProvider client={queryClient}>
  //       <RouterProvider router={router} />
  //     </QueryClientProvider>
  //   </SnackbarProvider>
  // </React.StrictMode>

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
            <App />
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
