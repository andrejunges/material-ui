import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openSingleLine: false,
      openMultiLine: false,
    };
  }

  handleTouchTap = (fieldName) => {
    this.setState({
      [fieldName]: true,
    });
  };

  handleRequestClose = (fieldName) => {
    this.setState({
      [fieldName]: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          onTouchTap={() => this.handleTouchTap('openSingleLine')}
          label="Add to my calendar"
        />
        <RaisedButton
          onTouchTap={() => this.handleTouchTap('openMultiLine')}
          label="Add to my calendar - Multiline"
          style={{marginLeft: '20px'}}
        />

        <Snackbar
          open={this.state.openSingleLine}
          message="Event added to your calendar."
          autoHideDuration={4000}
          onRequestClose={() => this.handleRequestClose('openSingleLine')}
        />
        <Snackbar
          open={this.state.openMultiLine}
          message="Event added to your calendar. Please do not forget about it
            - this is a multiline message, be aware that 2 lines are the limit."
          autoHideDuration={4000}
          onRequestClose={() => this.handleRequestClose('openMultiLine')}
        />
      </div>
    );
  }
}
