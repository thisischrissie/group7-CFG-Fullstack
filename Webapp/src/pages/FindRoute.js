import React from 'react';
import DogForm from '../components/DogForm';
import Map from '../components/Map';

const FindRoute = ({ trails }) => {
  return (
    <div>
      <h1>Find a Dog-Friendly Route</h1>
      <DogForm trails={trails} />
      <Map/>
    </div>
  );
};

export default FindRoute;
