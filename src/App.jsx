import React, {useEffect, useState} from 'react';
import './App.css';
import Quote from './components/QuoteCard';
import Button from './components/Button';


function App() {
  const [quote, setQuote] = useState('');

  function changeQuote() {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
      .then(res => res.json())
      .then(res => setQuote(res[0]))
      .catch(console.error);
  }

  useEffect(() => changeQuote(), []);

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Quote quote={quote.quote} character={quote.character} image={quote.image} />
      <Button changeQuote={changeQuote} />
    </div>
  );
}

export default App;
