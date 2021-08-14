import React, { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    const newItem = inputValue;
    if (newItem !== "") setItems((lists) => [...lists, newItem]);
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
            items.map((item, id) => {
              return (
                <li key={id}>
                  <input type="checkbox" id={item} key={id} />
                  <label key={"label" + id}>{item}</label>
                </li>
              );
            })}
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
