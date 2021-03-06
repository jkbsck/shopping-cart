import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Info from "./pages/Info";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Social />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route exact path="/shopping-cart">
            <Redirect to="/" />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
