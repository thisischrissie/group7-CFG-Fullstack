// DisplayAnswers.js - Component to display form answers
import React from 'react';

function DisplayAnswers({ formData }) {
  return (
    <div>
      <h2>Form Answers</h2>
      <p>Size of Dog: {formData.size}</p>
      <p>Likes Water: {formData.likesWater}</p>
      <p>Child Friendly: {formData.childFriendly}</p>
      <p>City: {formData.city}</p>
    </div>
  );
}

export default DisplayAnswers;
