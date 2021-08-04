import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    // const newItem = {
    //   itemName: inputValue,
    //   quantity: 1,
    //   isSelected: false,
    // };
    e.preventDefault();
    const newItem = inputValue;

    console.log(items);
    // const newItems = [...items, newItem];

    setItems((lists) => [...lists, newItem]);
    // console.log(newItems);
    console.log(newItem);
    console.log(items);
    setInputValue("");
  }

  return (
    <Fragment>
      <h1>Shopping List</h1>
      <div className="ShoppingListMain">
        <div className="header">
          <form onSubmit={handleChange}>
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            ></input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>

      <div>
        <ul style={{ listStyleType: "none" }}>
          {items.length > 0 &&
            items.map((item) => {
              return (
                <li key={item.id}>
                  <input type="checkbox" id={item} key={item.id} />
                  <label key={"label" + item.id}>{item}</label>
                </li>
              );
            })}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
