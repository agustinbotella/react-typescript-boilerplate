import React from "react";
import CartCSS from "./Cart.module.css";

interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div className={CartCSS.cartContainer}>
        <button type="button" className={CartCSS.button}>
          2 Pizzas
        </button>
        <div className={CartCSS.cartDropDown}>
          <ul>
            <li>Napoletana</li>
            <li>Margueritta</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
