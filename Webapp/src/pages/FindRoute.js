
import React from 'react';
import DogForm from '../components/DogForm';
import trails from '../components/trailArr';
import Map from '../components/Map';

function FindRoute() {

  return (
    <div className="FindRoute">
      <header className="FindRoute-header">
        <h1>Dog Form</h1>
      </header>
      <DogForm trails={trails}/>
      <Map />
    </div>
  );
}

export default FindRoute;
