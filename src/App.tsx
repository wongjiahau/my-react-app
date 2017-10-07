import * as React from 'react';
import './App.css';
import Login from './components/login/Login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>hello guy</h2>
          </div>
          <p className="App-intro">
            To get started, edit
            <code>src/App.tsx</code>
            and save to reload.
          </p>
          <Login/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
