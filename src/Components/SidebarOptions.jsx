import React from "react";
import "./SidebarOptions.css";

export const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div className={`SidebarOptions ${active && "SidebarOptions--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
