import React from 'react';

export default function Input(props) {
  return (
    <div className="jsxInput">
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type="text"
        placeholder="input" />
    </div>
  );
}