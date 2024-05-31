// src/pages/MapView.jsx
import React from 'react';
import DisplayMarkers from '../components/DisplayMarkers'; // Assuming this is the correct path to DisplayMarkers component

const MapView = () => {
  // Dummy locations for illustration, you can pass actual locations via props or state
  const locations = [
    { lat: 51.5074, lng: -0.1278 }, // London
    { lat: 53.4808, lng: -2.2426 }, // Manchester
    // Add more locations as needed
  ];

  return (
    <div>
      <h1>Map View</h1>
      <DisplayMarkers locations={locations} />
    </div>
  );
};

export default MapView;
