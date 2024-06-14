import styles from "./header.module.css";
import { FormControlLabel, IconButton, Switch, SwitchProps, styled } from "@mui/material";
import { ReactComponent as HamburgerMenuIcon } from "../../../svgs/hamburger-menu.svg";
import { ReactComponent as Avatar } from "../../../svgs/headerProfile.svg";
import { ReactComponent as Back } from "../../../svgs/back.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../utils/logout";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../store/store";

interface HeaderProps {
  handleSidebarToggle?: () => void;
}


const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Header: React.FC<HeaderProps> = ({ handleSidebarToggle }) => {
  // const username = useSelector((state: RootState) => state?.user?.name);
  //eslint-disable-next-line
  const [_, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

 
  return (
    <div className={styles.head}>
      <div>
         <IconButton
        aria-label="open sidebar"
        edge="start"
        onClick={handleSidebarToggle}
        sx={{ mr: 0, visibility: { xs: "visible", md: "hidden" } }}
      >
        <HamburgerMenuIcon />
      </IconButton>
      <Link to="" className={styles.back}> <Back />Back to main website</Link>
      </div>
     <div className={styles.others}>
       <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="Voice"
      />
      
      <div className={styles.profileGroup}>
        <IconButton onClick={handleClick}>
          <Avatar />
        </IconButton>
        <span className={styles.text}>
          Hello Godwin Agbonmajiaziowe
        </span>
      </div>
      <button className={styles.signOut} onClick={logout}>Sign out</button>
     </div>
     
  
    </div>
  );
};

export default Header;
