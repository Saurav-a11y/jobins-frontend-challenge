import React, { useState } from "react";
import { Layout } from "../../Components/Layout";

import bussinessFinanceIcon from "../../assets/svg/businessfinance.svg";
import increaseicon from "../../assets/svg/upIncrease.svg";
import yenIcon from "../../assets/svg/yen.svg";
import americaIcon from "../../assets/svg/america.svg";
import brazilIcon from "../../assets/svg/brazil.svg";
import australiaIcon from "../../assets/svg/australia.svg";
import arrowUp from "../../assets/svg/arrowUp.svg";
import arrowDown from "../../assets/svg/arrowDown.svg";
import userAvatar from "../../assets/svg/userImg.svg";
import searchIcon from "../../assets/svg/search.svg";

import "./styles.scss";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Progress,
} from "reactstrap";
import { Table } from "../../Components/Table";

const countryList = [
  {
    id: "01",
    name: "United State",
    amount: "30K",
    progressValue: "40",
    flag: americaIcon,
    status: "increasing",
    value: "25.8%",
  },
  {
    id: "02",
    name: "Brazil",
    amount: "26K",
    progressValue: "30",
    flag: brazilIcon,
    status: "drecreasing",
    value: "16.2%",
  },
  {
    id: "03",
    name: "Australia",
    amount: "17K",
    progressValue: "20",
    flag: australiaIcon,
    status: "drecreasing",
    value: "11.9%",
  },
];

export const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Layout>
      <div className="dashboard">
        <div className="stats">
          <div className="upper-section d-flex justify-content-between">
            <div className="sales me-3 flex-grow-1">
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
            <div className="profit flex-grow-1 me-3">
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
            <div className="countries flex-grow-1">
              <div className="card">
                <div className="card_content">
                  {countryList.map((d, i) => {
                    return (
                      <div
                        key={d.id}
                        className="card_content_item d-flex align-items-center w-100 mb-1"
                      >
                        <img src={d.flag} alt="america" />
                        <div className="card_content_item_details mx-3 w-50">
                          <h5 className="mb-0"> {d.amount} </h5>
                          <span> {d.name} </span>
                        </div>
                        <div className="w-100 me-3">
                          {" "}
                          <Progress
                            value={d.progressValue}
                            className="card_content_item_progressBar"
                          />
                        </div>
                        <div className="card_content_item_stats d-flex align-items-center">
                          <img
                            src={
                              d.status === "increasing" ? arrowUp : arrowDown
                            }
                            className="me-2"
                          />
                          <span> {d.value} </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="userInfo mt-4">
          <div className="card ">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <div className="userInfo_card_details d-flex align-items-center">
                <img src={userAvatar} alt="avatra" className="me-1" />
                <div className="userInfo_card_details_info ">
                  <h4 className="mb-0">Rober Fox</h4>
                  <span>robert@gmail.com</span>
                </div>
              </div>
              <div className="userInfo_card_information">
                <h5>PERSONAL INFORMATION</h5>
                <div className="userInfo_card_information_details">
                  <div className="userInfo_card_information_details_contact d-flex">
                    <p>Contact Number</p>
                    <span>(201) 555-0124 </span>
                  </div>
                  <div className="userInfo_card_information_details_birth d-flex">
                    <p>Date of birth</p>
                    <span>1st Jan, 1985 </span>
                  </div>
                  <div className="userInfo_card_information_details_member d-flex">
                    <p>Menber Since</p>
                    <span>3rd March, 2023 </span>
                  </div>
                </div>
              </div>
              <div className="userInfo_card_address me-5">
                <h5>PERSONAL INFORMATION</h5>
                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                <div className="userInfo_card_address_stats d-flex align-items-center justify-content-between">
                  <div className="userInfo_card_address_stats_order ">
                    <h6>150</h6>
                    <span>Total Order</span>
                  </div>
                  <div className="userInfo_card_address_stats_completed">
                    <h6>140</h6>
                    <span>Completed</span>
                  </div>
                  <div className="userInfo_card_address_stats_cancel">
                    <h6>10</h6>
                    <span>Cancel</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab d-flex">
              <div className="tab_item active">All Orders</div>
              <div className="tab_item">Completed</div>
              <div className="tab_item">Cancel</div>
            </div>
          </div>
        </div>
        <div className="dataComponent mt-4">
          <div className="dataComponent_filters d-flex justify-content-between">
            <div className="dataComponent_filters_dropDown flex-grow-0 me-3">
              <Dropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                direction={"down"}
                disabled
              >
                <DropdownToggle caret>Status: All</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Header</DropdownItem>
                  <DropdownItem>Some Action</DropdownItem>
                  <DropdownItem text>Dropdown Item Text</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="flex-grow-1">
              <div className="dataComponent_filters_search w-25">
                <Input name="search" placeholder="Search" type="text" />
                <img
                  src={searchIcon}
                  className="dataComponent_filters_search_icon"
                />
              </div>
            </div>
            <div className="dataComponent_filters_date">
              <Dropdown toggle={() => console.log("open")} direction={"down"}>
                <DropdownToggle caret>Filter by date range</DropdownToggle>
                <DropdownMenu></DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="dataComponent_table my-4">
            <Table />
          </div>
        </div>
      </div>
    </Layout>
  );
};
