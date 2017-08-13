import React from 'react';

export default function GuessNumber(props) {
  return (
    <div className="jsxGuessNumber">
      <span className="guessNumberPrefix">Number of Guesses: </span>
      <span className="js-numberOfGuesses">{props.numberOfGuesses}</span>
    </div>
  );
}