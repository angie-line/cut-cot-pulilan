import Dropdown from './dropdown';
import { useState } from "react";

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
   
    return (
     <li className="menu-items">
      {items.submenu ? (
       <>
        <button type="button" aria-expanded={dropdown ? "true" : "false"}
      onMouseOver={() => setDropdown((prev) => !prev)}
     >
      {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;