import * as React from 'react';
import './App.css';
import Hello from './playground/Hello';
import Dialog from './playground/SimpleDialog';
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
          <Hello name="hey" enthusiasmLevel={8}/>
          <Dialog/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
