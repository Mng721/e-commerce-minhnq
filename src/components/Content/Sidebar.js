import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <NavLink to={"/"} className={"sidebar-item"}>
        Woman's fashion
        <IoIosArrowForward />
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Men's fashion
        <IoIosArrowForward />
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Electronic
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Home & Lifestyle
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Medicine
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Sports & Outdoor
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Baby's & Toys
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Groceries & Pets
      </NavLink>
      <NavLink to={"/"} className={"sidebar-item"}>
        Heath & Beauty
      </NavLink>
    </>
  );
};

export default Sidebar;
