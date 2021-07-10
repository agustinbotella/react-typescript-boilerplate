import * as React from "react";
import PizzaCSS from "./Pizza.module.css";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface PizzaProps {
  pizza: Pizza;
}

const Pizza: React.FC<PizzaProps> = ({ pizza }) => {
  return (
    <div className={PizzaCSS.container}>
      <li>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
      </li>
    </div>
  );
};

export default Pizza;
