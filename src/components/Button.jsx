import React from 'react';

function Button({changeQuote}) {
  return (
    <button onClick={changeQuote}>Click to change quote</button>
  );
}

export default Button;