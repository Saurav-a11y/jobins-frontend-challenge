import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import { NavMenu } from "../Menu";

import logo from "../../assets/svg/logo.svg";
import burgericon from "../../assets/svg/indentDecrease.svg";

import "./styles.scss";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  const [sidebarState, setSidebarState] = useState(false);

  const handleHideSideBar = () => {
    setSidebarState(!sidebarState);
  };

  return (
    <div className="container-fluid px-0 overflow-hidden">
      <Row>
        <Col lg={!sidebarState ? 3 : 1} xxl={!sidebarState ? 2 : 1}>
          <div className="sidebar">
            <div className="sidebar_logo d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img alt="logo" src={logo} className="me-3" />
                <h2
                  className={`sidebar_logo_title mb-0 ${
                    sidebarState && "d-none"
                  }`}
                >
                  Jobins{" "}
                </h2>
              </div>
              <img
                alt="burgericon"
                className="sidebar_logo_bugerIcon"
                src={burgericon}
                onClick={handleHideSideBar}
              />
            </div>
            <div className="d-none d-lg-block">
              <NavMenu sidebarState={sidebarState} />
            </div>
          </div>
        </Col>
        <Col lg={!sidebarState ? 9 : 11} xxl={!sidebarState ? 10 : 11}>
          <div className="container-xs container-lg container-xxl">
            <div className="content">
              <Navbar />
              <div className="content_main">{children}</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
