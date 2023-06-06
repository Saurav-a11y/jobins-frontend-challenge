import React from "react";

import notificationIcon from "../../assets/svg/notification.svg";
import avatarIcon from "../../assets/svg/avatar.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_content d-flex align-items-center justify-content-between w-100">
        <h1 className="navbar_content_title"> Dashboard</h1>
        <div className="navbar_content_right d-none d-lg-block">
          <img alt="notification" src={notificationIcon} className="me-2" />
          <img alt="avatar" src={avatarIcon} />
        </div>
      </div>
    </div>
  );
};
