import React, { Fragment, useState } from "react";
import "./App.css";
import "milligram";
import ListPage from "./components/pages/ListPage";
import ListMenu from "./components/atoms/ListMenu";

function App() {

  const listItems = [
    'list1',
    'list2',
    'list3'
  ]
  const [title, setTitle] = useState<string>('default');
  const menuClicked = (event: React.MouseEvent<HTMLElement>) => {
    setTitle(event.currentTarget.className);
  }
 
  return (
    <Fragment>
      <div className="container">
        <h1 className="title">What to bring - list</h1>
        <h2>List Menu</h2>
        {listItems.map((list) =>
        <ListMenu listName={list} onClick={menuClicked} className={list}/>
        )}
       <ListPage listName={title}/>
        <br />
        <a href="https://github.com/tomokr/shopping_list">
          https://github.com/tomokr/shopping_list
        </a>
      </div>
    </Fragment>
  );
}

export default App;
