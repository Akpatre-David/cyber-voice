import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./header/header";
import styles from "./main.module.css";
import Sidebar from "./sidebar/sideBar";
import { Outlet } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetBalanceCall, GetBalancePayload } from "../../requests";
import { useAtom } from "jotai";
import { userBalance, userData } from "../../state";

interface ComponentProps {
  children?: React.ReactNode;
}
interface Props {
  window?: () => Window;
}

const Main: React.FC<ComponentProps & Props> = ({ children, window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user] = useAtom(userData);
  const [balance, setBalance] = useAtom(userBalance);
  const handleSidebarToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const closeSidebar = () => setMobileOpen(false);

  const container =
    window !== undefined ? () => window().document.body : undefined;

    // const getBalanceMutation = useQuery({
    //   queryFn: () => GetBalanceCall({clientType: user?.clientType,
    //     login: user?.login,
    //     clientId: user?.idClient }),
    //   queryKey: ['get-balance'], retry: 1
    // })

    // const getBalanceHandler = async () => {
    //   const payload: GetBalancePayload = {
    //    clientType: user?.clientType,
    //    login: user?.login,
    //    clientId: user?.idClient
    //   }
    //   try {
    //     await getBalanceMutation.mutateAsync(payload,{
    //       onSuccess: (data) => {
    //         setBalance(data)
    //       }
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

// useEffect(()=>{
//   getBalanceMutation
// },[user])

const { data, isLoading, error } = useQuery({
  queryKey: ['get-balance'],
  queryFn: ()=>GetBalanceCall({
       clientType: user?.clientType,
       login: user?.login,
       clientId: user?.idClient    
  }),
  enabled: !!user, 
  retry: 0,
});

useEffect(() => {
  if (data) {
    setBalance(data);
  }
}, [data]);

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
