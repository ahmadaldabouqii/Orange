import React from 'react';
import Item from './components/Item';
import Calc from './components/Calc';

class Card extends React.Component {
  render() {
    return (
      <div>
        <Item inc={this.increase} dec={this.decrease} />
        <Item inc={this.increase} dec={this.decrease} />
        <Item inc={this.increase} dec={this.decrease} />
        <Calc total={this.state.total} />
      </div>
    );
  }
}

export default Card;
