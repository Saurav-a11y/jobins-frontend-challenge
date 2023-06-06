import React from "react";
import { Layout } from "../../Components/Layout";

import bussinessFinanceIcon from "../../assets/svg/businessfinance.svg";
import increaseicon from "../../assets/svg/upIncrease.svg";
import yenIcon from "../../assets/svg/yen.svg";

import "./styles.scss";

export const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <div className="stats">
          <div className="upper-section d-flex">
            <div className="sales me-3">
              <div className="card d-flex flex-row align-items-center">
                <div className="card_icon">
                  <img alt="business" src={bussinessFinanceIcon} />
                </div>
                <div className="card_horizontal" />
                <div className="card_details">
                  <div className="card_details_header">
                    <h3 className="m-0"> Total Sales & Costs </h3>
                    <span> Last 7 days </span>
                  </div>
                  <div className="card_details_content">
                    <h4 className="m-0">$350K</h4>
                  </div>
                  <div className="card_details_footer">
                    <img
                      src={increaseicon}
                      className="card_details_footer_icon"
                    />
                    <span className="card_details_footer_figure">8.56k</span>
                    <span className="card_details_footer_date">
                      vs last 7 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profit">
              <div className="card d-flex flex-row align-items-center">
                <div className="card_details">
                  <div className="d-flex">
                    <div className="card_icon mt-1 me-4">
                      <img alt="business" src={yenIcon} />
                    </div>
                    <div className="card_details_header">
                      <h3 className="m-0"> Total Profit </h3>
                      <span> Last 7 days </span>
                    </div>
                  </div>
                  <div className="card_details_content">
                    <h4 className="m-0">50K</h4>
                  </div>
                  <div className="card_details_footer">
                    <img
                      src={increaseicon}
                      className="card_details_footer_icon"
                    />
                    <span className="card_details_footer_figure">12%</span>
                    <span className="card_details_footer_date">
                      vs last 7 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="countries">
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
