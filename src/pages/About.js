import React, { useState } from 'react';
import './About.css'; // importing the CSS file - connecting it
import 'bootstrap/dist/css/bootstrap.min.css';


function About() { //  function to About
  const [cards] = useState([
    {
      title: 'Card-1',
      text: 'Lorem ipsum'
    },
    {
      title: 'Card-2',
      text: 'Lorem ipsum'
    }, 
    {
      title: 'Card-3',
      text: 'Lorem ipsum'
    },
    {
      title: 'Card-4',
      text: 'Lorem ipsum'
    },
    {
      title: 'Card-5',
      text: 'Lorem ipsum'
    },
    {
      title: 'Card-6',
      text: 'Lorem ipsum'
    },
  ])
  return (
    <div className="App">
      <div className="App-content">
        <p>
          <strong>Our Mission:</strong> Connecting Pet Pals, One Walk at a Time! Creating a vibrant community for dog enthusiasts, fostering a deeper sense of connection among fellow dog lovers. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

      </div>
      <div className='container'>
        <h1>Responsive Cards</h1>
        <div className="cards">
          {
            cards.map((card, i)=> (

              <div key={i}className='card'>
              <h3>
                {card.title}
              </h3>
              <p> 
               {card.text} </p>
               <button className="btn">Explore</button> 
            </div>  
            ))
          }
          <div className='card'>
            <h3> Card 7 </h3>
            <p> 
             Lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; // Export the component named About
