import React from "react";
import MenuItem from "../components/MenuItem";
import { useState } from "react";
import { Data } from "./Data";
import "../styles/Menu.css";

function Menu() {
  const [filter, setFilter] = useState('');

  const searchText = (event) => {
    setFilter(event.target.value)
  }

  let dataSearch = Data.cardData.filter(item => {
    return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      <div>
        <input
        type="text"
        placeholder="Choose your favorite Pizza !!!"
        id="search"
        value={filter}
        onChange={searchText.bind(this)}
        />
      </div>
      <div className="menuList">
        {dataSearch.map((menuItem, key) => {
          return (
            <>
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;

