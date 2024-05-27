import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APIProvider } from '@vis.gl/react-google-maps';
import MapComponent from './components/Map.jsx';
import trails from '../components/trails';

const FoundRoute = () => {
  const location = useLocation();
  const [matchingTrail, setMatchingTrail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find a matching trail based on user's answers
    const answers = location.state ? location.state.answers : {};
    const matchingTrail = trails.find(trail => {
      let matches = true;

      if (answers.breedSize) {
        matches = matches && trail.size === answers.breedSize;
      }

      if (answers.likesWater) {
        matches = matches && trail.water === answers.likesWater;
      }

      if (answers.childFriendly) {
        matches = matches && trail.childFriendly === answers.childFriendly;
      }

      // Additional condition for big breed
      if (answers.breedSize === 'big') {
        matches = matches && trail.distance > 10; // Assuming distance property exists for trail
      }

      return matches;
    });

    if (matchingTrail) {
      setMatchingTrail(matchingTrail);
    } else {
      // If no matching trail found, navigate to some other page
      navigate('/someOtherPage');
    }
  }, [location.state, navigate]);

  return (
    <APIProvider apiKey={'Secret'}>
      <div>
        <h2>Found Route</h2>
        {/* Render MapComponent with matching trail */}
        {matchingTrail && (
          <MapComponent
            trails={[matchingTrail]}
            google={{ apiKey: 'Secret' }}
          />
        )}
      </div>
    </APIProvider>
  );
};

export default FoundRoute;
