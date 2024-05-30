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
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTJRNSMRED1Iz4DmpKGRVg87NhfsHCJ8s" }}
          defaultCenter={location}
          defaultZoom={5}>
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;