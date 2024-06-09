import React, { useState } from 'react';
import '../styles/About.css'; // Importing the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
  const [cards] = useState([ //cards for each of the developer profiles
    {
      title: 'Meet our developers!👩‍💻',
    },
    {
      title: 'Cecilia 🐾',
      text: "Born in Taiwan, currently living in London. The inspiration for my project came from my partner’s family, who often call him while walking their dogs because they’re bored. Walking your dog can sometimes feel like a mundane chore, so why not make it more enjoyable by connecting with fellow dog lovers for joint walks? My favourite dog breed is Sheltie. For this project, I will primarily focus on developing the front-end using React, with a particular emphasis on the Login page. Additionally, I aim to implement a hash function to encrypt user passwords, enhancing the security of our website for all users."
    }, 
    {
      title: 'Tara 🐶',
      text: "From Fermanagh, NI. I wanted to be involved in a project where I loved the concept and would also push me out of my comfort zone whilst having fun! Since I took my first breath I’ve loved dogs! My favourite dog breed is Jack Russel Terrier. My little dog Socks, who has since passed showed me dogs really are mans best friend, he would follow me loyally everywhere for 17 years. I want the website to show owners new routes to discover that may be more accommodating to both them and their dogs, promoting a healthy doggy lifestyle while doing so. Helping to implement the API, building web pages, testing and documentation."
    },
    {
      title: 'Emily 🦴',
      text:"Living in Manchester. I wanted to bring a sense of community to dog parents. I have loved dogs since I was a little kid! Favourite breed: Samoyeds. My favourite social media dog: @mayapolarbear she is so clever and such a sweet girl. I hope that this website is easy to navigate and makes dog walking much more enjoyable and exciting to both the dog owner and their dog! Project contribution: designing the website and doing the frontend of the homepage and the profile pages. Fun fact: I have switched from a career in nutrition to web development to explore my creative side"
    },
    {
      title: 'Chrissie 🐕‍🦺',
      text: "I’m born in London with a Filipino background. When Cecilia pitched the idea to create an app that could help dogs make new friends, I was immediately sold. My parents would always dog-sit for their employers when I was a child. Growing up and entering university I have always been around dogs doing dog-sitting as a second job; I never really saw it as work really! Tibetan mastiff. I have only seen one in real life when I was in a village in the Himalayas. They are BIG but so majestic, and I hope to go back again and officially befriend one. In general it can be difficult connecting with new dog friends and finding good places to take them. The initial first meet-up can also be tricky to navigate, so we hope to make that a little easier for dogs and their owners! My family have one Springer Spaniel called Axl, now owned by my sister, so I'm essentially his Auntie. For this project, I am connecting back-end through Nodejs, MongoDB and Redux. Also building some React components."
    },
    {
      title: 'Grace 🐩',
      text: 'Born in London and grew up in Kent. I love the idea of connecting dog lovers! Living in London, I often hear of dog owners looking for fellow dog lovers to connect with. Community is often difficult to find, and our app solves this issue. I love miniature dachshunds and often dog-sit. I am currently working as a Tech Recruiter, and keen to switch to being a Developer. I have challenged myself with doing this frontend page with react on this project as my strongest experience is backend with Python and SQL.'
    },
  ]);
// box to contain class names and then bootstrap cards with accordion
  return (
    <div className="App">
      <div className="mission-box">  
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
        <div className="row row-cols-1 row-cols-md-2">
          {
            cards.map((card, i) => (
              <div key={i} className="col mb-4 about-card">
                <div className="card">
                  <div className="card-header">
                    <h2 className="accordion-header" id={`heading${i}`}>
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded="false" aria-controls={`collapse${i}`}>
                        {card.title}
                      </button>
                    </h2>
                  </div>
                  <div id={`collapse${i}`} className="accordion-collapse collapse" aria-labelledby={`heading${i}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>{card.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default About; // Export the component
