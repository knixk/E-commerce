import data from "../data.json";
import flowerPot from "../flower-pot.jpg";

const RenderList = (list) => {
  console.log(list);
  return (
    <div className="items">
      {data.map((item) => {
        const { id, name, price } = item;
        return (
          <div className="card" key={id}>
            <img alt="flower-pot" src={flowerPot} />
            <p>{name}</p>
            <p>
              Price: <span>${price}</span>
            </p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default RenderList;
