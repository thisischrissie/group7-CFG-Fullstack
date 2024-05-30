// src/components/Map.jsx
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { APIProvider, Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps';


const MapContainer = () => (
  <APIProvider apiKey={'AIzaSyA3kCKR6Ga3ulS90iodeVoSEm8WHYQorQs'} onLoad={() => console.log('Maps API has loaded.')}>
    <h1>Hello, world!</h1>
    <Map
      defaultZoom={13}
      defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
      onCameraChanged={(ev) => console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
    />
  </APIProvider>
);

const Foundmap = () => {
  useEffect(() => {
    const rootElement = document.getElementById('Foundmap');
    if (rootElement) {
      const root = createRoot(rootElement);
      root.render(<MapContainer />);
    } else {
      console.error('Could not find root element with id "Foundmap"');
    }
  }, []);

  return null; // This component doesn't render anything directly
};

export default Foundmap;
