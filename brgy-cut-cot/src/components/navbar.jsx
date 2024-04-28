import { menuItemsData } from '../menuitemsdata';
import MenuItems from './menuitems';

const Navbar = () => {
  return (
    <div className="nav-area">
    <nav className="desktop-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;