import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FindRoute = () => {
  const [answers, setAnswers] = useState({
    breedSize: '',
    likesWater: '',
    childFriendly: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigate('/FoundRoute', { state: { answers } });
  };

  return (
    <div>
      <h2>Answer the Questions</h2>
      <form>
        <label>
          Dog Breed Size:
          <select name="breedSize" onChange={handleChange}>
            <option value="">Select</option>
            <option value="big">Big</option>
            <option value="medium">Medium</option>
            <option value="small">Small</option>
          </select>
        </label>
        <label>
          Dog Likes Water:
          <select name="likesWater" onChange={handleChange}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label>
          Child Friendly:
          <select name="childFriendly" onChange={handleChange}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <button type="button" onClick={handleSubmit}>Show Me</button>
      </form>
    </div>
  );
};

export default FindRoute;
