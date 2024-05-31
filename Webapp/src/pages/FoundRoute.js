import React, { useState } from 'react'
import DogForm from '../components/DogForm';
//import trails from '../components/trails';
import Map from '../components/Map';
import Useransers from '../components/UserAnswersArr';

function FoundRoute() {

  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data); 
  };

  return (
    <div>
      <DogForm onSubmit={handleFormSubmit} />
      {formData && <Useransers formData={formData} />}
      <Map />
    </div>
  );
}

export default FoundRoute;
