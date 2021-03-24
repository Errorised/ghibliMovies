import React from "react";
import Navigation from "./Layout/Ui/Navigation/Navigation";
import Movies from "./components/Movies/Movies";
import { Redirect, Route, Switch } from "react-router-dom";
import Details from "./components/Movies/Details/Details";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/movies/:id" component={Details} />
        <Route path="/movies" component={Movies} />
        <Redirect from="/" exact to="/movies" />
      </Switch>
    </div>
  );
}

export default App;
