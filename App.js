({
  babel: true,
  plugins: ['jsdom-quokka-plugin']
})

import React from 'react';
import ReactDOM from 'react-dom';

// Creating root element
document.body.innerHTML += `<div id="app"></div>`;

function App() {
  return (
    <div>
      working!
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
