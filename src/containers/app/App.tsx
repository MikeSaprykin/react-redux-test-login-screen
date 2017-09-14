import * as React from 'react';
import { Logo } from '../../components';
import { LoginForm } from '../login/Login';
import './App.css';

const notebook = require('./notebook.png');

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
          <img className='app-notebook-image' src={notebook} alt='Notebook'/>
          <div className='app-login'>
              <div className='app-login-logo'>
                <Logo />
              </div>
            <LoginForm />
          </div>
      </div>
    );
  }
}
