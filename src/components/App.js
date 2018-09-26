import React, { Component } from 'react';
import '../styles/app.scss';

class App extends Component {
  handleChange = param => {
    console.log(param);
  };

  render() {
    return (
      <div id="boiler">
        <h1>React Easy Boilerplate</h1>
        <button type="button" onClick={() => this.handleChange('TEST ECMA6')}>
          ECMA6
        </button>
        <p>Teste Sass</p>
      </div>
    );
  }
}

export default App;
