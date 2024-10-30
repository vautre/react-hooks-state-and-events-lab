import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({items}) {
  const [selectedCategory, setSelectedCategory] = useState(" ")

  const filterCategory = (event) => {
    setSelectedCategory(event.target.value)
  }
  // const [produce, setProduce] = useState( ["Lettuce", "Pomegranate"] )
  // const [dairy, setDairy] = useState( ["Yogurt", "String Cheese"] )
  // const {dessert, setDessert} = useState( ["Cookies"] )

  console.log(selectedCategory)

  const showItemCategory = items.filter((item) => {
    if (selectedCategory === " ") return true

    return item.category === selectedCategory
  }) 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="Filter" value={selectedCategory} onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {showItemCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
