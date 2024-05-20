import React from 'react';
import BreedCard from '../components/BreedCard.jsx';
import '../styles/Breeds.css';

function Breed()
{
    return (
    <div className="grid-container">
      <BreedCard imageUrl="https://example.com/image1.jpg" imageAlt="Image 1 description" dogBreed="Breed 1" />
      <BreedCard imageUrl="https://example.com/image2.jpg" imageAlt="Image 2 description" dogBreed="Breed 2" />
      <BreedCard imageUrl="https://example.com/image3.jpg" imageAlt="Image 3 description" dogBreed="Breed 3" />
    </div>
  );
}

export default Breed;