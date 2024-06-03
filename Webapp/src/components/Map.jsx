import React from 'react';
import GoogleMapReact from 'google-map-react'; 

const Map = ({ markers, center }) => {
  const mapSettings = {
    center: center,
    zoom: 10
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBTJRNSMRED1Iz4DmpKGRVg87NhfsHCJ8s' }}
        center={mapSettings.center}
        zoom={mapSettings.zoom}
      >
        {markers && markers.map((marker, index) => (
          <Marker key={index} lat={marker.lat} lng={marker.lng} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => <div className="marker">Marker</div>;

export default Map;