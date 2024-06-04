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
        bootstrapURLKeys={{ key: 'AIzaSyBTJRNSMRED1Iz4DmpKGRVg87NhfsHCJ8s' }}
        center={mapSettings.center}
        zoom={mapSettings.zoom}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
