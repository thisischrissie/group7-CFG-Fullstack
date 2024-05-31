import React from 'react';
import GoogleMapReact from 'google-map-react'; 

const Map = ({ markers }) => {
  const mapSettings = {
    center: { lat: 51.5074, lng: -0.1278 }, // Default center for the map
    zoom: 10 // Default zoom level
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBTJRNSMRED1Iz4DmpKGRVg87NhfsHCJ8s' }}
        defaultCenter={mapSettings.center}
        defaultZoom={mapSettings.zoom}
      >
        {/* Render markers on the map */}
        {markers && markers.map((marker, index) => (
          <Marker key={index} lat={marker.lat} lng={marker.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => <div className="marker">Marker</div>;

export default Map;
