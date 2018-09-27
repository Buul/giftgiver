import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import '../styles/app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: [],
    };
  }

  handleClick = () => {
    const { gifts } = this.state;

    const ids = gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: maxId + 1 });
    this.setState({ gifts });
  };

  render() {
    return (
      <div id="boiler">
        <h2>Gift Giver</h2>
        <Button variant="contained" color="primary" id="btnAdd" onClick={this.handleClick}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
