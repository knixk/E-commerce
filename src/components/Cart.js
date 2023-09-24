import data from "../data.json";
import RenderList from "./RenderList";
import flowerPot from "../flower-pot.jpg";
import { useContext } from "react";
import { MyContext } from "../App";

const size = {
  height: "100px",
  width: "100px"
};

const Cart = (props) => {
  const ctx = useContext(MyContext);
  const { itemsInCart, SetItemsInCart } = ctx;

  // Cart is basically the filter of items and we hav to do a few more things

  // console.log(itemsInCart);
  // console.log(items, "im items");
  // console.log(props);

  return (
    <ul className="cart">
      {itemsInCart.map((item) => {
        const { id, name, price } = item;
        return (
          <div className="" key={id}>
            <img alt="flower-pot" style={size} src={flowerPot} />
            <p>{name}</p>
            <p>
              Price: <span>${price}</span>
            </p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Cart;
