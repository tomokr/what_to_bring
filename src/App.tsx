import React, { Fragment } from "react";
import "./App.css";
import "milligram";
import ListPage from "./components/pages/ListPage";

function App() {

  return (
    <Fragment>
      <div className="container">
        <h1 className="title">What to bring - list</h1>
       <ListPage />
        <br />
        <a href="https://github.com/tomokr/shopping_list">
          https://github.com/tomokr/shopping_list
        </a>
      </div>
    </Fragment>
  );
}

export default App;
