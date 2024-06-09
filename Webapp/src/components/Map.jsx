import React from 'react';
import GoogleMapReact from 'google-map-react'; 

const Map = ({ center }) => {
  const mapSettings = {
    center: center,
    zoom: 10
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} //Using .env key
        center={mapSettings.center}
        zoom={mapSettings.zoom}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;