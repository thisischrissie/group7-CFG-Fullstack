
import React from 'react';
import DogForm from '../components/DogForm';
import trails from '../components/trails';
import Foundmap from '../components/Map';

function FindRoute() {
  return (
    <div className="FindRoute">
      <header className="FindRoute-header">
        <h1>Dog Form</h1>
      </header>
      <DogForm trails={trails} />
      <Foundmap />
    </div>
  );
}

export default FindRoute;
