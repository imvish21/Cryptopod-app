import React from "react";
import "./Layout.css";
import { NavLink } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import logo from "../assets/LOGO.jpg";
import user from "../assets/user_profile.png";
import * as boxicons from "boxicons";
import { BiSolidDashboard } from "react-icons/bi";
import { BiLogoBitcoin } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { PiNotificationFill } from "react-icons/pi";
import { FcButtingIn } from "react-icons/fc";
import "@fontsource/rubik";
import "@fontsource/poppins";

const Layout = () => {
  return (
    <div className="layout" id="layout">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="sidebar">
        <div className="navitems">
          <BiSolidDashboard className="icon icon1" />
          <NavLink to="/" className="li-item item1">
            Dashboard
          </NavLink>
        </div>
        <div className="navitems item2">
          <BiLogoBitcoin className="icon icon2" />
          <NavLink to="/trade" className="li-item item2">
            Trade
          </NavLink>
        </div>
        <div className="navitems item3">
          <FaWallet className="icon icon3" />
          <NavLink to="/wallet" className="li-item item3">
            Wallet
          </NavLink>
        </div>
        <div className="navitems item4">
          <IoSettings className="icon icon4" />
          <NavLink to="/settings" className="li-item item4">
            Settings
          </NavLink>
        </div>
      </div>
      <div className="topnav">
        <div className="cryptopod">
          <h1>Cryptopod</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" className="search-bar" />
        </div>
        <div className="notification-bar">
          <BiMessageAltDetail className="message" />
          <PiNotificationFill className="notification" />
        </div>
        <div className="profile">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
