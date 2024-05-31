// src/components/DisplayMarkers.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const DisplayMarkers = ({ filteredData }) => {
  const mapContainerStyle = {
    height: '400px',
    width: '800px',
  };

  const center = {
    lat: 53.4808, // Default center (latitude of Manchester)
    lng: -2.2426, // Default center (longitude of Manchester)
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBTJRNSMRED1Iz4DmpKGRVg87NhfsHCJ8s">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {filteredData.map((location, index) => (
          <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default DisplayMarkers;
