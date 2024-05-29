// src/App.js
import React from 'react';
import DogForm from '../components/DogForm';
import trails from '../components/trails';

function FindRoute() {
  return (
    <div className="FindRoute">
      <header className="FindRoute-header">
        <h1>Dog Form</h1>
      </header>
      <DogForm trails={trails} />
    </div>
  );
}

export default FindRoute;
