import { ReactComponent as Balance } from "../../../svgs/balance.svg";
import { ReactComponent as Dashboard } from "../../../svgs/dashboard.svg";
import { ReactComponent as Logout } from "../../../svgs/logout.svg";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";


const activeStyle = {
  borderRadius: "5px",
  backgroundColor: "var(--color-button-bg)",
  color: "#FFFFFF",
  border: "none",
  svg: {
    fill: "#FFFFFF",
    backgroundColor: "red",
  },
};

const userRoles = ["USER", "ADMIN"];

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  // const { logout } = useActionCreator();
  // const role = useSelector((state: RootState) => state?.user?.role) as string;

  const handleLogout = () => {
    //logout();
    closeSidebar();
  };

  return (
    <main className={styles.nav}>
      <div className={styles.logoWrapper}></div>
      <span className={styles.space} />

      <div className={styles.mainNav}>

        <p>Selfcare portal</p>
        <NavLink
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className={styles.navLink}
        to={"/dashboard"}
        onClick={closeSidebar}
      >
        {({ isActive }) => (
          <>
            <Dashboard className={isActive ? styles.activeIcon : ""} />
            <span>Dashboard</span>
          </>
        )}
      </NavLink>

	  
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : {})}
          className={styles.navLink}
          to={"/balance"}
          onClick={closeSidebar}
        >
          {({ isActive }) => (
            <>
              <Balance className={isActive ? styles.activeIcon : ""} />
              <span>Balance</span>
            </>
          )}
        </NavLink>
     

      {/* <NavLink
        style={({ isActive }) => (isActive ? activeStyle : {})}
        className={styles.navLinklogout}
        to="/"
        onClick={handleLogout}
      >
        {({ isActive }) => (
          <>
            <Logout className={isActive ? styles.activeIcon : ""} />
            <span>Logout</span>
          </>
        )}
      </NavLink> */}
      </div>

      
    </main>
  );
};

export default Sidebar;
