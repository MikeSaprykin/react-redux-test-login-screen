import * as React from 'react';
import { Logo } from '../../components';
import { LoginForm } from '../login/Login';
import './App.css';

const notebook = require('./notebook.png');

export class App extends React.Component {
  render() {
    return (
      <div className="App">
          <img className="background-image" src={notebook} />
        <div className="App-header">
          <Logo />
          <h2>Welcome to React</h2>
        </div>
        <LoginForm />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
