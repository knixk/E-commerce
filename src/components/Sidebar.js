import Cart from "./Cart";
import { useState } from "react";
import data from "../data.json";
import { useContext } from "react";
import { MyContext } from "../App";

const Sidebar = ({ isCart }) => {
  const ctx = useContext(MyContext);
  const { items } = ctx;
  console.log(items);
  const [cart, setCart] = useState(isCart);
  return (
    <div className="sidebar">
      <h2>{cart ? "Your Items" : "Filters"}</h2>
      {/* <ul>{cart ? <></> : <>Filters</>}</ul> */}
      {cart ? <Cart /> : <h2>Sort by</h2>}
      <label for="cars"></label>
      <select name="cars" id="cars">
        <optgroup label="Swedish Cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German Cars">
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Sidebar;
