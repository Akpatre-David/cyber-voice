import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/main";
import Dashboard from "./components/dashboard/main";
import Balance from "./components/balance/main";
import NotFound from "./components/notFound/notFound";
import TopUp from "./components/topUp/main";
import ProtectedRoute from "./utils/protectedRoute";
import Login from "./components/login/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="balance" element={<Balance />} />
            <Route path="top-up" element={<TopUp />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
