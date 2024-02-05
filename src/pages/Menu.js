import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="menu">
      <h2 className="menuTitle">Our Menu</h2>
      <div className="menuList">
        {MenuList.map((item, key) => {
          return (
            <MenuItem
              key={key}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
