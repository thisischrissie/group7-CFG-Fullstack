// src/components/DisplayMarkers.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const DisplayMarkers = ({ locations }) => {
  const mapContainerStyle = {
    height: '400px',
    width: '800px',
  };

  const center = {
    lat: locations.length > 0 ? locations[0].lat : 51.5074, // Default center if no locations
    lng: locations.length > 0 ? locations[0].lng : -0.1278, // Default center if no locations
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBTJRNSMRED1Iz4DmpKGRVg87NhfsHCJ8s">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {locations.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default DisplayMarkers;
