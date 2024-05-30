import React from 'react';
import DogForm from '../components/DogForm';
import trails from '../components/trails';
import Map from '../components/Map';

function FoundRoute() {
  return (
    <div>
      <DogForm trails={trails} />
      <Map />
    </div>
  );
}

export default FoundRoute;
