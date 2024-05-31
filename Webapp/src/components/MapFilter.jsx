// src/pages/MapView.js
import React from 'react';
import DisplayMarkers from '../components/DisplayMarkers'; // Assuming you have a component for displaying markers

const MapView = () => {
  // Dummy locations for illustration, you can pass actual locations via props or state
  const locations = [
    { lat: 51.5074, lng: -0.1278 },
    { lat: 53.4084, lng: -2.9916 },
  ];

  return (
    <div>
      <h1>Map View</h1>
      <DisplayMarkers locations={locations} />
    </div>
  );
};

export default MapView;
