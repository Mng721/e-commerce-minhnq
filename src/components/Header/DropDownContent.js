import React from "react";
import "./header.sass";
import { FiUser } from "react-icons/fi";
import DropDownItem from "./DropDownItem";
import { TiShoppingBag } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

const DropDownContent = (props) => {
  const { open } = props;
  let listDropdown = [
    {
      icon: <FiUser size={"2em"} />,
      text: "Manage My Acount",
    },
    {
      icon: <TiShoppingBag size={"2em"} />,
      text: "My Order",
    },
    {
      icon: <MdOutlineCancel size={"2em"} />,
      text: "My Cancellations",
    },
    {
      icon: <FaRegStar size={"2em"} />,
      text: "My Reviews",
    },
    {
      icon: <TbLogout2 size={"2em"} />,
      text: "Logout",
    },
  ];
  return (
    <div className={`drop-down-content ${open ? "drop-down-open" : null}`}>
      {listDropdown.map((item, index) => {
        return <DropDownItem item={item} key={`dropdown-${index}`} />;
      })}
    </div>
  );
};

export default DropDownContent;
