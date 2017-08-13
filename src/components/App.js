import React, { Component } from 'react';
import Message from './message';
import Input from './input';
import SubmitButton from './submit-button';
import GuessNumber from './guess-number';
import PreviousGuesses from './previous-guesses';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.submitGuess = this.submitGuess.bind(this);

    this.state = {
      playerWins: false,
      secretNumber: Math.floor(Math.random() * 100) + 1,
      message: 'Make Your Guess',
      inputVal: '',
      numberOfGuesses: 0,
      previousGuesses: []
    };
  }

  decideTemperature(currentGuess) {
    const difference = Math.abs(currentGuess - this.state.secretNumber);

    switch(true) {
      case (difference <= 5):
        return 'very hot';
      case (difference <= 10):
        return 'hot';
      case (difference <= 20):
        return 'warm';
      case (difference <= 30):
        return 'lukewarm';
      case (difference <= 40):
        return 'cool';
      case (difference <= 50):
        return 'cold';
      default:
        return 'frigid';
    }
  }

  handleGuessIsNaN(currentGuess) {
    if (isNaN(currentGuess)) {
      this.setState({
        message: 'Your guess must be a number'
      });
    }
  }

  submitGuess() {
    const currentGuess = parseInt(this.state.inputVal);

    switch(true) {

      case isNaN(currentGuess):
        this.setState({
          message: 'guess is not a number'
        });
        return;

      case (!(currentGuess > 0 && currentGuess <= 100)):
        this.setState({
          message: 'number must be between 1 and 100 inclusive'
        });
        return;

      case (currentGuess === this.state.secretNumber):
        this.setState((prevState) => ({
          playerWins: true,
          message: `You guessed the secret number: ${this.state.secretNumber}. Way to go. You get a gold star.`,
          numberOfGuesses: prevState.numberOfGuesses + 1,
          previousGuesses: prevState.previousGuesses.concat(parseInt(this.state.inputVal))
        }));
        return;

      default:
        
        const temperature = this.decideTemperature(parseInt(this.state.inputVal));

        this.setState((prevState) => ({
          message: `Your current temperature is: ${temperature}`,
          numberOfGuesses: prevState.numberOfGuesses + 1,
          previousGuesses: prevState.previousGuesses.concat(parseInt(this.state.inputVal)),
          inputVal: ''
        }));
    }
  }

  render() {
    const inputAndButton = (
      <div className="inputAndButton">
        <Input
          onChange={inputVal => this.setState({inputVal})}
          value={this.state.inputVal} />
        <SubmitButton
          submitGuess={this.submitGuess} />
      </div>
    );

    return (
      <div className="App">
        <div className="messageSection">
          <Message message={this.state.message} />
        </div>
        <div className="guessSection">
          {!this.state.playerWins ? inputAndButton : null}
          <GuessNumber
            numberOfGuesses={this.state.numberOfGuesses} />
        </div>
        <div className="previousGuessSeciton">
          <PreviousGuesses
            previousGuesses={this.state.previousGuesses} />
        </div>
      </div>
    );
  }
}
