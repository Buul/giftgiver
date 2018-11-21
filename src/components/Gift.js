import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});
class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: '',
      present: '',
    };
  }

  handleChange = name => event => {
    this.setState({
      person: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { person } = this.state;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="person"
          label="Person"
          className={classes.textField}
          value={person}
          //   onChange={this.handleChange('person')}
          onChange={event => this.setState({ person: event.target.value })}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

Gift.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(Gift);
