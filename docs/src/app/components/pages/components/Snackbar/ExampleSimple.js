import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      message: '',
    };
    this.messages = {
      short: 'Event added to your calendar.',
      long: 'Event added to your calendar. Please do not forget about it. This is a multiline message, ' +
      'be aware that 2 lines are the limit.',
    };
  }

  handleTouchTap = (message) => {

    this.setState({
      open: true,
      message: message,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={() => this.handleTouchTap(this.messages.short)}
          label="Add to my calendar"
        />
        <RaisedButton
          onTouchTap={() => this.handleTouchTap(this.messages.long)}
          label="Add to my calendar - Multiline"
          style={{marginLeft: '20px'}}
        />

        <Snackbar
          open={this.state.open}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={() => this.handleRequestClose()}
        />
      </div>
    );
  }
}
