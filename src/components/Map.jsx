import React, { useEffect, useState, useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '500px',
};
const center = {
  lat: -34.397,
  lng: 150.644,
};

const MapComponent = ({ trails }) => {
  const [directions, setDirections] = useState(null);
  const directionsServiceRef = useRef(null);

  const fetchRoute = useCallback((trail) => {
    if (directionsServiceRef.current) {
      directionsServiceRef.current.route(
        {
          origin: trail.origin,
          destination: trail.destination,
          travelMode: 'DRIVING',
        },
        (response, status) => {
          if (status === 'OK') {
            setDirections(response);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        }
      );
    }
  }, []);

  useEffect(() => {
    if (trails.length > 0) {
      fetchRoute(trails[0]);  // Fetch the first trail's route by default
    }
  }, [trails, fetchRoute]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyA3kCKR6Ga3ulS90iodeVoSEm8WHYQorQs" libraries={libraries}>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
