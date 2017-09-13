import * as React from 'react';
import { Logo } from '../../components';
import { LoginForm } from '../login/Login';
import './App.css';

// const notebook = require('./notebook.png');

export class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="app-login">
            <Logo />
            <LoginForm />
          </div>
      </div>
    );
  }
}
