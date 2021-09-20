import React, { useState }  from 'react';
import { useParams } from 'react-router-dom'
import FavButton from '../atoms/FavButton';

interface Props {
    // listName:string,
}

const ListPage: React.FC<Props> = ({
    ...props
  }: Props) => {
    const { listName } = useParams<{ listName: string }>();
    const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");
  
    function handleChange(e: React.FormEvent<HTMLElement>) {
      e.preventDefault();
      const newItem = inputValue;
      if (newItem !== "") setItems((lists) => [...lists, newItem]);
      setInputValue("");
    }
  
    function removeAll() {
      setItems([]);
    }
    return (
    <>
    <h2>{listName}</h2>
    <FavButton />
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
                    <label key={"label" + id}>
                      <input type="checkbox" id={item} key={id} />
                      {item}
                    </label>
                  </li>
                );
              })}
          </ul>
        </div>

        <button onClick={() => removeAll()}>Remove All</button>
</>
    );

};

export default ListPage;