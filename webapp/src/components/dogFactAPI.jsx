import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [dogFacts, setDogFacts] = useState([]);

  useEffect(() => {
    fetchDogFacts();
  }, []);

  const fetchDogFacts = async () => {
    try {
      const response = await fetch('https://dog-api.kinduff.com/api/facts?number=5');
      if (response.ok) {
        const data = await response.json();
        setDogFacts(data.facts);
      } else {
        console.error('Failed to fetch dog facts:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error fetching dog facts:', error);
    }
  };

  // Function to pick a random fact from the fetched facts
  const pickRandomFact = () => {
    if (dogFacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * dogFacts.length);
      return dogFacts[randomIndex];
    }
    return '';
  };

  return (
    <div style={styles.banner}>
      <p>{pickRandomFact()}</p>
    </div>
  );
};

const styles = {
  banner: {
    backgroundColor: '#caf377',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    margin:'0 0 10px',
  },
};

export default Banner;
