import React from "react";
import pizzas from "./data/pizzas.json";
import AppCSS from "./App.module.css";

import Pizza from "./components/Pizza";
import Cart from "./components/Cart";

import PizzaSVG from "./svg/pizza.svg";

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzaSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default App;
