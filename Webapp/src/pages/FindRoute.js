import React from 'react';
import DogForm from '../components/DogForm';
import MapView from '../components/MapView';

const FindRoute = ({ trails }) => {
  return (
    <div>
      <h1>Find a Dog-Friendly Route</h1>
      <DogForm trails={trails} />
      <MapView markers={markers} /> {/* Pass markers data to the Map component */}
    </div>
  );
};

export default FindRoute;
