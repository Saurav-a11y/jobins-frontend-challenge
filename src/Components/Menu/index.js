import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import smartHome from "../../assets/svg/smart-home.svg";
import shopppingCart from "../../assets/svg/shopping-cart.svg";
import stars from "../../assets/svg/star.svg";
import circlePlus from "../../assets/svg/circle-plus.svg";
import box from "../../assets/svg/box.svg";
import "./styles.scss";
const menus = [
  {
    id: "01",
    title: "Main menu",
    menus: [
      {
        id: "abc",
        name: "dashboard",
        icon: smartHome,
      },
      {
        id: "bcd",
        name: "order management",
        icon: shopppingCart,
      },
      {
        id: "cde",
        name: "brand",
        icon: stars,
      },
    ],
  },
  {
    id: "02",
    title: "products",
    menus: [
      {
        id: "def",
        name: "add products",
        icon: circlePlus,
      },
      {
        id: "efg",
        name: "product list",
        icon: box,
      },
    ],
  },
];

export const NavMenu = ({ sidebarState }) => {
  return (
    <div className="navMenu mt-3">
      {menus.map((menu, i) => {
        return (
          <div className="mb-3">
            <p className="text-uppercase navMenu_title"> {menu.title} </p>
            <Nav vertical>
              {menu.menus.map((d, j) => {
                return (
                  <NavItem
                    className="d-flex align-items-center navMenu_item"
                    active={i === 0 && j === 0 && true}
                  >
                    <img src={d.icon} />
                    <NavLink
                      href="#"
                      active={i === 0 && j === 0 && true}
                      className={`text-capitalize navMenu_item_link ${
                        sidebarState && "d-none"
                      }`}
                    >
                      {" "}
                      {d.name}{" "}
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </div>
        );
      })}
    </div>
  );
};
