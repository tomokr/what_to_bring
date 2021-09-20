import React, { Fragment, useState } from "react";
import "./App.css";
import "milligram";
import NavBar from "./components/atoms/NavBar";
import ListMenuPage from "./components/pages/ListMenuPage";
import ListPage from "./components/pages/ListPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="container">
      <NavBar />

      <h1 className="title">What to bring - list</h1>

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/listpage">
            <ListMenuPage />
          </Route>
          <Route path="/list/:listName" component={ListPage} />
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
        <br />
        <a href="https://github.com/tomokr/shopping_list">
          https://github.com/tomokr/shopping_list
        </a>
      </div>
    </Router>
  );
}

export default App;
