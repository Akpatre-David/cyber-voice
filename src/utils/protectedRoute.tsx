import { useAtomValue } from "jotai";
import { userData } from "../state";
import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "./logout";


const ProtectedRoute = () => {
  const user = useAtomValue(userData);

  // useEffect(() => {
  //   if (user?.idClient) {
  //     const expiryDate = new Date(user?.idClient);
  //     const currentDate = new Date();

  //     if (expiryDate < currentDate) {
  //       logout();
  //     }
  //   }
  // }, [user]);

  if (user?.idClient) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
