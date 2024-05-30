
import React, { useState } from 'react';
import DogForm from '../components/DogForm';
import trails from '../components/trails';
import Map from '../components/Map';

function FindRoute() {

  const [showMap, setShowMap] = useState(false); // State to manage the visibility of the Map component

  // Function to toggle the visibility of the Map component
  const toggleMapVisibility = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="FindRoute">
      <header className="FindRoute-header">
        <h1>Dog Form</h1>
      </header>
      <DogForm trails={trails} toggleMapVisibility={toggleMapVisibility}/>
      {showMap && <Map />}
    </div>
  );
}

export default FindRoute;
