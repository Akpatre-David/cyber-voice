import { Drawer } from "@mui/material";
import { useState } from "react";
import Header from "./header/header";
import styles from "./main.module.css";
import Sidebar from "./sidebar/sideBar";
import { Outlet } from "react-router-dom";

interface ComponentProps {
  children?: React.ReactNode;
}
interface Props {
  window?: () => Window;
}

const Main: React.FC<ComponentProps & Props> = ({ children, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const closeSidebar = () => setMobileOpen(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleSidebarToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </Drawer>
      <Drawer
        container={container}
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
        }}
        open
      >
        <Sidebar closeSidebar={closeSidebar} />
      </Drawer>

      <div className={styles.content}>
        <Header handleSidebarToggle={handleSidebarToggle} />
        {/* {children} */}
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
