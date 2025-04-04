import React, { useState } from "react";

const QuoteGenerator = () => {
  const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference. - Roy T. Bennett",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. - Sam Levenson"
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#e3f2fd',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        padding: '30px',
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
      }}>
        <p style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333',
          lineHeight: '1.6',
        }}>
          "{quote}"
        </p>
        <button onClick={getRandomQuote} style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#0288d1',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
          fontWeight: 'bold'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0277bd'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#0288d1'}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
