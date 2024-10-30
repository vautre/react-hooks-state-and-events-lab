import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function toggleCart() {
    setInCart(inCart => !inCart)
  }  

  return (
    <li className=" ">
      <span>{name}</span>
      <span className="category">{category}</span>

      <button onClick={toggleCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"} </button>

    </li>
  );
}

export default Item;
