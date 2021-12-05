import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom'
import FavButton from '../atoms/FavButton';

interface Props {
    // listId: number,
}

interface Item {
  id: string,
  name: string
}

const ListPage: React.FC<Props> = ({
  // listId,
    ...props
  }: Props) => {
    const { listName } = useParams<{ listName: string }>();
    const { listId } = useParams<{ listId: string }>();
    // const [items, setItems] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const [error, setError] = useState<any>();
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Item[]>([]);
  
    useEffect(() => {
      fetch("https://glacial-castle-81771.herokuapp.com/items/"+listId)
          .then(res => res.json())
          .then(
              (data) => {
                  setIsLoaded(true);
                  setItems(data);
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              }
          )
    }, []);

    function handleChange(e: React.FormEvent<HTMLElement>) {
      e.preventDefault();
      // const newItem = inputValue;
      const newItem:Item = {id:'', name: inputValue}
      if (newItem.name !== "") setItems((lists) => [...lists, newItem]);
      setInputValue("");
    }
  
    function removeAll() {
      setItems([]);
    }

    if (error) {
        return <div>Error: {error ? error.message : 'something happens'})</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
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
                          <input type="checkbox" id={item.id} key={id} />
                          {item.name}
                        </label>
                      </li>
                    );
                  })}
              </ul>
            </div>
    
            <button onClick={() => removeAll()}>Remove All</button>
    </>
        );
    
    }
};

export default ListPage;