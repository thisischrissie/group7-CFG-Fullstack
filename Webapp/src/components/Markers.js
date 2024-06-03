import React, { useState, useEffect } from 'react';
import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import trails from './trails'; 

const GoogleMapWithMarkers = ({ selectedCity }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const routesForCity = trails.find(route => route.city === selectedCity);
    if (routesForCity) {
      setMarkers(routesForCity.locations);
    } else {
      setMarkers([]);
    }
  }, [selectedCity]);

  return (
    <Map
      defaultZoom={10}
      defaultCenter={{ lat: 51.5074, lng: -0.1278 }}
      mapId='9d785efbbdbba147'
    >
      {markers.map((location, index) => (
        <AdvancedMarker key={index} position={location}>
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </Map>
  );
};

export default GoogleMapWithMarkers;
