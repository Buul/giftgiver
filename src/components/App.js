import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import '../styles/app.scss';
import { maxNumber } from '../helper';

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
    gifts.push({ id: maxNumber(ids) + 1 });
    this.setState({ gifts });
  };

  handleRemoveGift = id => {
    const { gifts } = this.state;
    const giftsFilter = gifts.filter(gift => gift.id !== id);
    this.setState({ gifts: giftsFilter });
  };

  render() {
    const { gifts } = this.state;
    return (
      <div id="boiler">
        <h2>Gift Giver</h2>
        <div id="giftList">
          {gifts.map(gift => (
            <Gift gift={gift} key={gift.id} removeGift={this.handleRemoveGift} />
          ))}
        </div>
        <Button id="btnAdd" className="btn btn-success" onClick={this.handleClick}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
