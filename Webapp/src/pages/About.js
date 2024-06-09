import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "@uiw/react-back-to-top";
import styled from "styled-components";
import "../styles/About.css";

//styling components-tara
const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

// const Link = styled.a`
//   color: #606c38;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

const AccordionItem = styled.div`
  border: 1px solid #ccd5ae;
  border-radius: 15px;
  padding: 20px;
`;

const AccordionHeader = styled.div`
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ isFirst }) => (isFirst ? "#FEFAE0" : "#E9EDC9")};
  cursor: ${({ isFirst }) => (isFirst ? "default" : "pointer")};
  padding: 20px;
`;

const AccordionBody = styled.div`
  padding: 10px;
  display: ${({ active }) => (active ? "block" : "none")};
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
  color: #582f0e;
`;

const Text = styled.p`
  margin-top: 10px;
  color: #283618;
`;

function About() {
  const [cards] = useState([
    // Cards for each of the developer profiles
    {
      title: "Meet our developers👩‍💻",
    },
    {
      title: "Cecilia 🐾",
      text: "Born in Taiwan, currently living in London. The inspiration for my project came from my partner’s family, who often call him while walking their dogs because they’re bored. Walking your dog can sometimes feel like a mundane chore, so why not make it more enjoyable by connecting with fellow dog lovers for joint walks? My favourite dog breed is Sheltie. For this project, I will primarily focus on developing the front-end using React, with a particular emphasis on the Login page. Additionally, I aim to implement a hash function to encrypt user passwords, enhancing the security of our website for all users.",
    },
    {
      title: "Tara 🐶",
      text: "From Fermanagh, NI. I wanted to be involved in a project where I loved the concept and would also push me out of my comfort zone whilst having fun! Since I took my first breath I’ve loved dogs! My favourite dog breed is Jack Russel Terrier. My little dog Socks, who has since passed showed me dogs really are mans best friend, he would follow me loyally everywhere for 17 years. I want the website to show owners new routes to discover that may be more accommodating to both them and their dogs, promoting a healthy doggy lifestyle while doing so. Helping to implement the API, building web pages, testing and documentation.",
    },
    {
      title: "Emily 🦴",
      text: "Living in Manchester. I wanted to bring a sense of community to dog parents. I have loved dogs since I was a little kid! Favourite breed: Samoyeds. My favourite social media dog: @mayapolarbear she is so clever and such a sweet girl. I hope that this website is easy to navigate and makes dog walking much more enjoyable and exciting to both the dog owner and their dog! Project contribution: designing the website and doing the frontend of the homepage and the profile pages. Fun fact: I have switched from a career in nutrition to web development to explore my creative side",
    },
    {
      title: "Chrissie 🐕‍🦺",
      text: "I’m born in London with a Filipino background. When Cecilia pitched the idea to create an app that could help dogs make new friends, I was immediately sold. My parents would always dog-sit for their employers when I was a child. Growing up and entering university I have always been around dogs doing dog-sitting as a second job; I never really saw it as work really! Tibetan mastiff. I have only seen one in real life when I was in a village in the Himalayas. They are BIG but so majestic, and I hope to go back again and officially befriend one. In general it can be difficult connecting with new dog friends and finding good places to take them. The initial first meet-up can also be tricky to navigate, so we hope to make that a little easier for dogs and their owners! My family have one Springer Spaniel called Axl, now owned by my sister, so I'm essentially his Auntie. For this project, I am connecting back-end through Nodejs, MongoDB and Redux. Also building some React components.",
    },
    {
      title: "Grace 🐩",
      text: "Born in London and grew up in Kent. I love theidea of connecting dog lovers! Living in London, I often hear of dog owners looking for fellow dog lovers to connect with. Community is often difficult to find, and our app solves this issue. I love miniature dachshunds and often dog-sit. I am currently working as a Tech Recruiter, and keen to switch to being a Developer. I have challenged myself with doing this frontend page with react on this project as my strongest experience is backend with Python and SQL.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Container>
      <div className="mission-box">
        <p>
          <strong>Our Mission:</strong> Connecting Pet Pals, One Walk at a Time!
          Creating a vibrant community for dog enthusiasts, fostering a deeper
          sense of connection among fellow dog lovers.
          {/* <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit React Documentation"
          >
            Learn more
          </Link> */}
        </p>
      </div>
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div key={index} className="col-md-6 mb-4">
              <AccordionItem className="card">
                <AccordionHeader
                  isFirst={index === 0}
                  className="card-header"
                  data-bs-toggle="collapse" // Make sure it's data-bs-toggle
                  data-bs-target={`#collapse${index}`} // Make sure it's data-bs-target
                  onClick={() => handleAccordionClick(index)}
                >
                  <Title className="accordion-header" id={`heading${index}`}>
                    {card.title}
                  </Title>
                </AccordionHeader>
                <AccordionBody
                  active={activeIndex === index}
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${index}`}
                  data-parent="#accordion"
                >
                  {card.text && <Text>{card.text}</Text>}
                </AccordionBody>
              </AccordionItem>
            </div>
          ))}
        </div>
      </div>
      <BackToTop top={30} size={50} buttonText="Top">
        Top
      </BackToTop>
    </Container>
  );
}

export default About;