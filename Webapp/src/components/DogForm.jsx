import React, { useState } from 'react';
import styled from 'styled-components';
import Map from '../components/Map'; // Ensure this path is correct

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9; //Behind the user input form
  padding-top: 20px; //removed height so this does not have to be so large to account for navbar
`;

const FormContainer = styled.div`
padding: 20px;
background-color: white; //Form colour
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
width: 100%;
max-width: 400px;
display: ${({ isFormSubmitted }) => (isFormSubmitted ? 'none' : 'flex')};
flex-direction: column;
`;

const SubmitButton = styled.button`
padding: 10px 20px;
background-color: #8a5d3d;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
align-self: center;

  &:hover {
    background-color: #B4927A;
  }
`;


const Title = styled.h2`
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const RadioGroup = styled.div`
  margin-bottom: 20px;
`;

const RadioLabel = styled.label`
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #8a5d3d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #B4927A;
  }
`;

const ResultWrapper = styled.div`
display: grid;
grid-template-columns: 3fr 2fr;
gap: 20px;
max-width: 100%;
max-height: 80%; // Maximum height
margin: 0 auto;
overflow: auto; // Enable scrollbars
`;

const ResultContainer = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MapContainer = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  gap: 10px;
  margin-top: auto;
`;

const ImageGroup = styled.div`
display: flex;
flex-direction: column;
align-self: center;
width: 50%;
overflow: hidden;
`;

const WalkImage = styled.div`
display: flex;
align-self: center;
overflow: hidden;
max-height: 200px;
max-width: 700px;
`;

const DogForm = ({ trails }) => {
  const [formData, setFormData] = useState({
    size: '',
    likesWater: '',
    childFriendly: '',
    city: ''
  });
  const [matchedTrail, setMatchedTrail] = useState(null);
  const [randomRoute, setRandomRoute] = useState(null);
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
      return;
    }

    const randomIndex = Math.floor(Math.random() * matchedTrails.length);
    const randomMatchedTrail = matchedTrails[randomIndex];
    const randomRoute = getRandomRoute(randomMatchedTrail.routes, null);

    setMatchedTrail(randomMatchedTrail);
    setRandomRoute(randomRoute);
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
    <PageWrapper>
      <FormContainer isFormSubmitted={isFormSubmitted}>
        <ImageGroup>
        <img src="./Walk.png" alt="Find your perfect route"/></ImageGroup>
        <Title>Find your Perfect Route</Title>
        <form onSubmit={handleSubmit}>
          <Label>
            Size of Dog:
            <Select name="size" value={formData.size} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="big">Big</option>
              <option value="medium">Medium</option>
              <option value="small">Small</option>
            </Select>
          </Label>

          <Label>
            Likes Water:
            <RadioGroup>
              <RadioLabel>
                <input
                  type="radio"
                  name="likesWater"
                  value="yes"
                  checked={formData.likesWater === 'yes'}
                  onChange={handleChange}
                  required
                /> Yes
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  name="likesWater"
                  value="no"
                  checked={formData.likesWater === 'no'}
                  onChange={handleChange}
                  required
                /> No
              </RadioLabel>
            </RadioGroup>
          </Label>

          <Label>
            Child Friendly:
            <RadioGroup>
              <RadioLabel>
                <input
                  type="radio"
                  name="childFriendly"
                  value="yes"
                  checked={formData.childFriendly === 'yes'}
                  onChange={handleChange}
                  required
                /> Yes
              </RadioLabel>
              <RadioLabel>
                <input
                  type="radio"
                  name="childFriendly"
                  value="no"
                  checked={formData.childFriendly === 'no'}
                  onChange={handleChange}
                  required
                /> No
              </RadioLabel>
            </RadioGroup>
          </Label>

          <Label>
            City:
            <Select name="city" value={formData.city} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="Manchester">Manchester</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London">London</option>
            </Select>
          </Label>
          
          <SubmitButton><Button type="submit">Submit</Button></SubmitButton>
          
        </form>
      </FormContainer>

      {isFormSubmitted && matchedTrail && (
        <ResultWrapper>
          <ResultContainer>
            <h3>Recommended for you in <b>{matchedTrail.city}</b></h3>
            {/* <p>City: </p> */}
            <p>Route: {randomRoute.name}</p>
            <WalkImage>
            <img src={randomRoute.ImageURL} alt={randomRoute.name} /></WalkImage>
            <p>{randomRoute.description}</p>
            <ButtonGroup>
            <Button type="button" onClick={handleRefresh}>Refresh</Button>
            <Button type="button" onClick={handleReload}>Reload</Button>
            </ButtonGroup>
          </ResultContainer>
          <MapContainer>
            <Map
              markers={matchedTrail.locations}
              center={matchedTrail.locations[0]}
            />
          </MapContainer>
        </ResultWrapper>
      )}
    </PageWrapper>
  );
};

export default DogForm;
