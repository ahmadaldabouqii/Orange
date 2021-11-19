//Importing
import React from 'react';
import ReactDom from 'react-dom';

function getButtonText() {
  return 'Click Me';
}

// create react component
const App = () => {
  const styling = { backgroundColor: '#33f', color: '#fff' };
  return (
    <div>
      <label htmlFor="name" className="name">
        Enter Your Nameee
      </label>
      <input type="text" id="name" />
      <button style={styling}>{getButtonText()}</button>
    </div>
  );
};

// display the component on the screen (render)
ReactDom.render(<App />, document.querySelector('#root'));
