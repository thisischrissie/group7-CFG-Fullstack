import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapComponent = (props) => {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: 37.774929, lng: -122.419416 }} // Default center coordinates
        style={{ width: '100%', height: '100%' }} // Set the map container's width and height
      >
        {/* Render Markers for each trail */}
        {props.trails.map((trail) => (
          trail.originCoords && ( // Check if originCoords exists
            <Marker
              key={trail.id}
              title={trail.name}
              position={{ lat: trail.originCoords.lat, lng: trail.originCoords.lng }}
            />
          )
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3kCKR6Ga3ulS90iodeVoSEm8WHYQorQs', // Replace with your Google Maps API key
})(MapComponent);
