import React from "react";
import { AppBar, Paper, Tab, Tabs } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Header = () => {
  return (
    <Tabs
      variant="fullWidth"
      indicatorColor="primary"
      textColor="primary"
      aria-label="icon tabs example"
      className="header-bar"
      
      
    >
      <Tab icon={<SearchIcon />} aria-label="search" />
      <Tab icon={<MailOutlineIcon />} aria-label="mail" />
      <Tab icon={<CalendarTodayIcon />} aria-label="calendar" />
      <Tab icon={<NotificationsNoneIcon />} aria-label="notification" />
      <Tab icon={<PermIdentityIcon />} aria-label="User" />
    </Tabs>
  );
};
export default Header;
