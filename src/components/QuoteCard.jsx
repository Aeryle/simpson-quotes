import React from 'react';

function QuoteCard({quote, character, image}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img src={image} alt={character} style={{
        width: '64px'
      }} />
      <ul style={{
        listStyleType: 'none'
      }}>
        <li><strong>Name</strong>: {character}</li>
        <li><strong>Quote</strong>:
          <q>{quote}</q>
        </li>
      </ul>
    </div>
  );
}

export default QuoteCard;