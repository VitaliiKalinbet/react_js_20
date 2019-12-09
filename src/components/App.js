import React from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>React is awesome</h1>

      <h2>Counter</h2>
      <Counter />

      <hr />
      <h2>Dropdown1</h2>
      <Dropdown defaultState />

      <hr />
      <h2>Dropdown2</h2>
      <Dropdown />
    </div>
  );
}

App.propTypes = {};

export default App;
