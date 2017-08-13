import React from 'react';

export default function SubmitButton(props) {
  return (
    <div className="jsxSubmitButton">
      <button
        className="submitButton"
        onClick={props.submitGuess}>Submit</button>
    </div>
  );
}
