import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MapComponent from '../components/Map';


const trails = [
  { id: 1, name: 'Trail 1', category: 'big_yes_yes_yes', origin: 'Place A', destination: 'Place B' },
  { id: 2, name: 'Trail 2', category: 'medium_no_yes_no', origin: 'Place C', destination: 'Place D' },
  // Add more trails here
];

const ResultPage = () => {
  const location = useLocation();
  const [filteredTrails, setFilteredTrails] = useState([]);

  useEffect(() => {
    const { answers } = location.state;
    const category = `${answers.breedSize}_${answers.likesWater}_${answers.childFriendly}_${answers.includesWater}`;
    const matchedTrails = trails.filter((trail) => trail.category === category);
    setFilteredTrails(matchedTrails);
  }, [location.state]);

  return (
    <div className="result-page">
      <div className="trails-list">
        <h2>Recommended Walking Trails</h2>
        <ul>
          {filteredTrails.map((trail) => (
            <li key={trail.id}>{trail.name}</li>
          ))}
        </ul>
      </div>
      <div className="map-container">
        <MapComponent trails={filteredTrails} />
      </div>
    </div>
  );
};

export default ResultPage;
