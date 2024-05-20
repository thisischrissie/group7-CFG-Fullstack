import React from 'react';
import BreedCard from '../components/BreedCard.jsx';
import '../styles/Breeds.css';


function Breed()
{
    return (
    <div className="grid-container">
      <BreedCard imageUrl="corgi.jpg" imageAlt="Corgi" dogBreed="Corgi" />
      <BreedCard imageUrl="dog2.jpg" imageAlt="Image 2 description" dogBreed="Breed 2" />
      <BreedCard imageUrl="dog3.jpg" imageAlt="Image 3 description" dogBreed="Breed 3" />
    </div>
  );
}

export default Breed;