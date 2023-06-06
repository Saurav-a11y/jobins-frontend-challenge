import React from "react";
import { Col, Row } from "reactstrap";
import { NavMenu } from "../Menu";

import logo from "../../assets/svg/logo.svg";

import "./styles.scss";

export const Layout = ({ children }) => {
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <Row>
        <Col md={3}>
          <div className="sidebar">
            <div className="sidebar_logo"></div>
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
