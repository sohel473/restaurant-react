import { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";

class Menu extends Component {
  state = {
    dishes: DISHES,
  };

  render() {
    const menu = this.state.dishes.map((item) => {
      return <MenuItem key={item.id} dish={item} />;
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{menu}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
