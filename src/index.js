import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hi!</div>;
}

console.log(process.env.API_KEY);

ReactDOM.render(<App />, document.querySelector('.container'));
