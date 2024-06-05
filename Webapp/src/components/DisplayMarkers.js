import React from 'react';
import GoogleMapReact from 'google-map-react'; 

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
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBTJRNSMRED1Iz4DmpKGRVg87NhfsHCJ8s' }}
        defaultCenter={center}
        defaultZoom={10}
      >
        {locations.map((location, index) => (
          <Marker key={index} lat={location.lat} lng={location.lng} text="My Marker" />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '10px 15px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default DisplayMarkers;