import React from 'react';
import Item from './components/Item';
import Calc from './components/Calc';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  increase = () => {
    this.setState({ total: this.state.total + 1 });
  };

  decrease = () => {
    this.setState({ total: this.state.total - 1 });
  };

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

export default App;
