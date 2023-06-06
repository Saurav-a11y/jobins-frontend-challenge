import React from "react";
import { Col, Row } from "reactstrap";
import { NavMenu } from "../Menu";

import logo from "../../assets/svg/logo.svg";
import burgericon from "../../assets/svg/indentDecrease.svg";

import "./styles.scss";

export const Layout = ({ children }) => {
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <Row>
        <Col md={3}>
          <div className="sidebar">
            <div className="sidebar_logo d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img alt="logo" src={logo} className="me-3" />
                <h2 className="sidebar_logo_title mb-0">Jobins </h2>
              </div>
              <img alt="burgericon" src={burgericon} />
            </div>
            <NavMenu />
          </div>
        </Col>
        <Col md={9}>
          <div className="content">
            <div>Nav</div>
            <div className="content_main">{children}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
