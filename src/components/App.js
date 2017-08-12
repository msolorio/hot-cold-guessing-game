import React, { Component } from 'react';
import Message from './message';
import Input from './input';
import SubmitButton from './submit-button';
import GuessNumber from './guess-number';
import PreviousGuesses from './previous-guesses';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <div className="messageSection">
          <Message/>
        </div>
        <div className="guessSection">
          <Input/>
          <SubmitButton/>
          <GuessNumber/>
        </div>
        <div className="previousGuessSeciton">
          <PreviousGuesses/>
        </div>
      </div>
    );
  }
}
