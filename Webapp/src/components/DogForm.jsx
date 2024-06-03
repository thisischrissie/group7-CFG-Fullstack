import React, { useState } from 'react';
import Map from '../components/Map'; 

const DogForm = ({ trails }) => {
  const [formData, setFormData] = useState({
    size: '',
    likesWater: '',
    childFriendly: '',
    city: ''
  });
  const [matchedTrail, setMatchedTrail] = useState(null);
  const [randomRoute, setRandomRoute] = useState(null);
  const [isMapShown, setIsMapShown] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getRandomRoute = (routes, excludeRoute) => {
    const filteredRoutes = routes.filter(route => route !== excludeRoute);
    if (filteredRoutes.length === 0) return excludeRoute;
    const randomIndex = Math.floor(Math.random() * filteredRoutes.length);
    return filteredRoutes[randomIndex];
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!trails) {
      console.error('Trails data is not available');
      return;
    }

    const matchedTrails = trails.filter((trail) => {
      return (
        trail.size === formData.size &&
        trail.likesWater === formData.likesWater &&
        trail.childFriendly === formData.childFriendly &&
        trail.city === formData.city
      );
    });

    if (matchedTrails.length === 0) {
      setMatchedTrail(null);
      setIsMapShown(false);
      return;
    }

    const randomIndex = Math.floor(Math.random() * matchedTrails.length);
    const randomMatchedTrail = matchedTrails[randomIndex];
    const randomRoute = getRandomRoute(randomMatchedTrail.routes, null);

    setMatchedTrail(randomMatchedTrail);
    setRandomRoute(randomRoute);
    setIsMapShown(true);
    setIsFormSubmitted(true);
  };

  const handleRefresh = () => {
    if (matchedTrail) {
      const newRandomRoute = getRandomRoute(matchedTrail.routes, randomRoute);
      setRandomRoute(newRandomRoute);
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <h2>Dog Form</h2>
      
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Size of Dog:
            <select name="size" value={formData.size} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="big">Big</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
            </select>
          </label>
          <br />

          <label>
            Likes Water:
            <input
              type="radio"
              name="likesWater"
              value="yes"
              checked={formData.likesWater === 'yes'}
              onChange={handleChange}
              required
            /> Yes
            <input
              type="radio"
              name="likesWater"
              value="no"
              checked={formData.likesWater === 'no'}
              onChange={handleChange}
              required
            /> No
          </label>
          <br />

          <label>
            Child Friendly:
            <input
              type="radio"
              name="childFriendly"
              value="yes"
              checked={formData.childFriendly === 'yes'}
              onChange={handleChange}
              required
            /> Yes
            <input
              type="radio"
              name="childFriendly"
              value="no"
              checked={formData.childFriendly === 'no'}
              onChange={handleChange}
              required
            /> No
          </label>
          <br />

          <label>
            City:
            <select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="manchester">Manchester</option>
              <option value="liverpool">Liverpool</option>
              <option value="london">London</option>
            </select>
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      ) : null}

      {matchedTrail && isMapShown ? (
        <div>
          <h3>Matched Trail:</h3>
          <p>City: {matchedTrail.city}</p>
          <p>Route: {randomRoute}</p>
          <button type="button" onClick={handleRefresh}>Refresh</button>
          <button type="button" onClick={handleReload}>Re-answer Questions</button>
          <Map
            markers={matchedTrail.locations}
            center={matchedTrail.locations[0]}
          />
        </div>
      ) : null}
    </div>
  );
};

export default DogForm;
