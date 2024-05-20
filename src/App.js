import React from 'react';
//import HomePage from './Home';
import Breeds from './pages/InfoBreeds';

function App() {
  return (
    <div>
      <Breeds imageUrl="https://example.com/image1.jpg" imageAlt="Image 1 description" dogBreed="Terrior" />
    </div>
  );
}

export default App;
