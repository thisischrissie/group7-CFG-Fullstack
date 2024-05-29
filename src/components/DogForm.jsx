
import React, { useState } from 'react';
//import trails from '../components/trails';

const DogForm = ({ trails }) => {
  const [formData, setFormData] = useState({
    size: '',
    likesWater: '',
    childFriendly: ''
  });
  const [matchedArray, setMatchedArray] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = trails.find((answer, index) => {
      return (
        answer.size === formData.size &&
        answer.likesWater === formData.likesWater &&
        answer.childFriendly === formData.childFriendly
      );
    });

    setMatchedArray(matched);

    // Reload the page
    
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

        <button type="submit">Submit</button>
      </form>

      {matchedArray && (
        <div>
          <h3>Matched Array:</h3>
          <pre>{JSON.stringify(matchedArray, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DogForm;
