import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1 className="sr-only">Advice Generator App</h1>

      <div className="container">
        <Card
          number={114}
          text="It is easy to sit up and take notice, what's difficult is getting up and taking action."
        />

        <div className="attribution">
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href="https://github.com/EstherMarie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esther Marie
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
