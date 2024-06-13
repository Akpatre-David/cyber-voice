import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/main";
import Dashboard from "./components/dashboard/main";
import Balance from "./components/balance/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/balance" element={<Balance />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
