
import React, { useState } from 'react';


const DogForm = ({ trails }) => {
  const [formData, setFormData] = useState({
    size: '',
    likesWater: '',
    childFriendly: '',
    city: ''
  });
  const [matchedTrail, setMatchedTrail] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = trails.find((trail) => {
      return (
        trail.size === formData.size &&
        trail.likesWater === formData.likesWater &&
        trail.childFriendly === formData.childFriendly && 
        trail.city === formData.city
      );
    });

    setMatchedTrail(matched);
    
    // Navigate to /foundroute
    window.location.href = '/foundroute';
  };


  return (
    <div>
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

        <a href="/FoundRoute">
  <button type="button">Submit</button>
</a>
      </form>
      </div>
  );
};

export default DogForm;