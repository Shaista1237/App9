import React, { useState } from 'react';
import './App.css';

function App() {
  const [primeNumbers, setPrimeNumbers] = useState([]);

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const findPrimeNumbers = () => {
    const primes = [];
    for (let i = 1; i <= 100; i++) {
      if (isPrime(i)) primes.push(i);
    }
    setPrimeNumbers(primes);
  };

  return (
    <div className="App">
      <h1>Prime Numbers between 1 and 100</h1>
      <button onClick={findPrimeNumbers}>Print Prime Numbers</button>
      <div>
        {primeNumbers.map((prime, index) => (
          <p key={index}>{prime}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
