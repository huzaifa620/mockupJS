import React from "react";
import ActiveLink from "../../../UiElements/NavLink/NavLink";
import Menu, { MenuItem, MenuLink } from "./MainMenu.styled";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    label: "Workshop Floor",
    path: "/workshop",
  },
  {
    id: 3,
    label: "Worker Performance Metrics",
    path: "/workerperformance",
  },
  {
    id: 4,
    label: "Workflow Optimizer",
    path: "/workflowoptimizer",
  },
  {
    id: 5,
    label: "Demand Forecasting",
    path: "/demandforecasting",
  }
];

const MainMenu = ({ className, onClick }) => {
  return (
    <Menu className={className}>
      {menuItems.map((item) => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MainMenu;
