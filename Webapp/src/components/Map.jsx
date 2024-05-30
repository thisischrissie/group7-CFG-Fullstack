import React from "react";
import "../styles/map.css";
import GoogleMapReact from "google-map-react";


const location = {
  address: "Manchester",
  lat: 53.29012,
  lng: -2.15226,
};

const Map = () => {
  return (
    <div className="map">
      {/* <h2 className="map-h2"></h2> */}
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "Secret key" }}
          defaultCenter={location}
          defaultZoom={5}>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;