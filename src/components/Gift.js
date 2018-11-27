import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: '',
      present: '',
    };
  }

  render() {
    const { removeGift, gift } = this.props;
    const { present, person } = this.state;
    return (
      <div className="gift">
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              id="inputPerson"
              text={person}
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              text={present}
              id="inputPresent"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button className="btn btn-danger" id="btnRemove" onClick={() => removeGift(gift.id)}>
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
