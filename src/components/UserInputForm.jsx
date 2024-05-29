import React, { useState } from 'react';

const UserInputForm = ({ onSubmit }) => {
  const [selections, setSelections] = useState({
    dropdown1: '',
    dropdown2: '',
    radioButton: '',
  });

  const handleDropdownChange = (e) => {
    const { name, value } = e.target;
    setSelections({ ...selections, [name]: value });
  };

  const handleRadioButtonChange = (e) => {
    const { name, value } = e.target;
    setSelections({ ...selections, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the selections to the parent component
    onSubmit(selections);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Dropdown 1:</label>
        <select name="dropdown1" value={selections.dropdown1} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          {/* Populate options based on your data */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Dropdown 2:</label>
        <select name="dropdown2" value={selections.dropdown2} onChange={handleDropdownChange}>
          <option value="">Select an option</option>
          {/* Populate options based on your data */}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label>Radio Buttons:</label>
        <div>
          <label>
            <input
              type="radio"
              name="radioButton"
              value="option1"
              checked={selections.radioButton === 'option1'}
              onChange={handleRadioButtonChange}
            />
            Option 1
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="radioButton"
              value="option2"
              checked={selections.radioButton === 'option2'}
              onChange={handleRadioButtonChange}
            />
            Option 2
          </label>
        </div>
        {/* Add more radio button options as needed */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInputForm;
