import React, { Fragment, useState } from "react";
import "./App.css";
import "milligram";
import ListPage from "./components/pages/ListPage";
import ListMenu from "./components/atoms/ListMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

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
    <Router>
      <div className="container">
      <h1 className="title">What to bring - list</h1>
      <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {listItems.map((list)=><ListMenu listName={list} onClick={menuClicked} className={list} />)}
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <a href="https://github.com/tomokr/shopping_list">
          https://github.com/tomokr/shopping_list
        </a>

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/listpage">
            <ListPage listName={title} />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
