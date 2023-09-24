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
      <div className="App">
        <nav>
          <h3>E-Commerce</h3>
          <ul>
            <li>Cart</li>
            <li>Items</li>
            <li>Login / Sign Up</li>
          </ul>
        </nav>

        <h2>Today's picks</h2>

        <main>
          <Sidebar isCart={false} />

          <>
            <div className="items">
              {items.map((item) => {
                const { id, name, price } = item;
                return (
                  <div className="card" key={id}>
                    <img alt="flower-pot" src={flowerPot} />
                    <p>{name}</p>
                    <p>
                      Price: <span>${price}</span>
                    </p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                  </div>
                );
              })}
            </div>
            {/* <RenderList /> */}
            <Sidebar isCart={true} />
          </>
        </main>
      </div>
    </MyContext.Provider>
  );
}
