// src/pages/FindRoute.js
import React from 'react';
import DogForm from '../components/DogForm';

const FindRoute = ({ trails }) => {
  return (
    <div>
      <h1>Find a Dog-Friendly Route</h1>
      <DogForm trails={trails} />
    </div>
  );
};

export default FindRoute;
