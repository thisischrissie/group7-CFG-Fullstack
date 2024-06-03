import React from 'react';
import Map from '../components/Map';
import trails from '../components/trailArr'; 

const FoundRoute = () => {
  const markers = trails.map(trail => ({
    lat: trail.locations[0].lat,
    lng: trail.locations[0].lng
  }));

  return (
    <div>
      <h2>Found Route</h2>
      <Map markers={markers} /> 
    </div>
  );
};

export default FoundRoute;