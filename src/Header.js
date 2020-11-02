import React, { useState } from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import VideocamIcon from "@material-ui/icons/Videocam";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon style={{ fontSize: 28 }} className="header-icon" />

        <Link to="/">
          <img src="./logo.jpg" className="header-logo" />
        </Link>
      </div>

      <div className="header-middle">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />

        <Link to={`/search/${inputSearch}`} className="header-input-icon">
          <SearchIcon className="search-icon" />
        </Link>
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
