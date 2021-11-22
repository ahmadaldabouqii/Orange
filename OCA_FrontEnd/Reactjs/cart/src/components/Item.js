import React from 'react';
import './Item.css';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  decrease = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
      this.props.dec();
    }
  };

  inecrease = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.props.inc();
  };

  render() {
    return (
      <div className="holder">
        <img
          src="https://images.news18.com/ibnlive/uploads/2021/01/1610716314_untitled-design-2021-01-15t184025.049.jpg?im=FitAndFill,width=1200,height=1200"
          alt="pizza"
        />
        <h3>Pizza</h3>
        <div>
          <button onClick={this.decrease}>-</button>
          <span>{this.state.counter}</span>
          <button onClick={this.inecrease}>+</button>
        </div>
      </div>
    );
  }
}

export default Item;
