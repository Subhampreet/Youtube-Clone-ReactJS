import React from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
        <div className="header-left">
            <MenuIcon style={{ fontSize: 28 }} className="header-icon"/>
            <img src="./logo.png" className="header-logo"  />

        </div>

        <div className="header-middle">
            <input type="text" placeholder="Search" />
            <SearchIcon className="header-input-icon" />
        </div>

      <div className="header-right">
        <VideocamIcon style={{ fontSize: 28 }} className="header-icon" />
        <AppsIcon style={{ fontSize: 28 }} className="header-icon" />
        <NotificationsIcon style={{ fontSize: 28 }} className="header-icon" />
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          className="header-avatar"
        />
      </div>
    </div>
  );
}

export default Header;
