import React, { ReactElement } from 'react';
import logo from 'assets/logo.svg';
import 'internal/components/App.css';
import Example from 'example/containers/ExempleContainer';

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's get started in here 🚀 !
        </p>
        <Example />
      </header>
    </div>
  );
}

export default App;
