import React, { useState } from 'react';
import Map from './Map'; // Import Map component

const DogForm = ({ trails }) => {
  const [formData, setFormData] = useState({
    size: '',
    likesWater: '',
    childFriendly: '',
    city: ''
  });
  const [matchedTrail, setMatchedTrail] = useState(null);
  const [isMapShown, setIsMapShown] = useState(false); // State to track if map should be shown

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!trails) {
      console.error('Trails data is not available');
      return;
    }

    const matched = trails.find((trail) => {
      return (
        trail.size === formData.size &&
        trail.likesWater === formData.likesWater &&
        trail.childFriendly === formData.childFriendly &&
        trail.city === formData.city
      );
    });

    setMatchedTrail(matched);
    setIsMapShown(true); // Show the map after submitting the form
  };

  return (
    <div>
      <h2>Dog Form</h2>
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
      
      {matchedTrail && isMapShown ? (
        <div>
          <h3>Matched Trail:</h3>
          <p>City: {matchedTrail.city}</p>
          <p>Routes:</p>
          <ul>
            {matchedTrail.routes.map((route, index) => (
              <li key={index}>{route}</li>
            ))}
          </ul>
          {/* Display other details of the matched trail */}
          <Map /> {/* Show the map */}
        </div>
      ) : null}
    </div>
  );
};

export default DogForm;
