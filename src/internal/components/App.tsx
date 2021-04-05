import React, { ReactElement } from 'react';
import logo from 'assets/logo.svg';
import { Counter } from 'counter/components/Counter';
import 'internal/components/App.css';
import Example from 'example/components/Exemple';

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Let's get started in here 🚀 !
        </p>
        <Example />
      </header>
    </div>
  );
}

export default App;
