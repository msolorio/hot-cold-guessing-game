import React from 'react';

export default function PreviousGuesses(props) {
  const listOfGuesses = props.previousGuesses.map((guess, index) => {
    return <li key={index}>{guess}</li>
  })

  return (
    <div className="jsxPreviousGuesses">
      <ul>{listOfGuesses}</ul>
    </div>
  );
}