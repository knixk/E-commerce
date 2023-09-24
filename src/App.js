import "./styles.css";
import flowerPot from "./flower-pot.jpg";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import data from "./data.json";
import cart from "./cart.json";

import { useState, useContext, createContext } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import RenderList from "./components/RenderList";

export const MyContext = createContext();

export default function App() {
  const [items, setItems] = useState(data);
  const [itemsInCart, setItemsInCart] = useState(cart);
  // console.log(data);

  const handleAddToCart = () => {
    console.log("yes");
  };

  return (
    <MyContext.Provider
      value={{ items, itemsInCart, setItems, setItemsInCart }}
    >
      <div className="App"></div>
    </MyContext.Provider>
  );
}
