import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../styles/UserProfile.css";
import ProfilePicBio from "./ProfilePicBio";

export default function UserProfile() {

  //is loading 
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({});
  //fetching user by ID; test ID endpoint is used line 14
  useEffect(() => {
    fetch('http://localhost:3001/api/owners/6654ba90507bbb3a0105dc56')
      .then(response => response.json())
      .then(data => setUser(data))
      .then(() => setIsLoading(false))

      .catch(error => console.error('Error fetching users:', error));

  }, []);

  
  return (
    <div className="row">
      <div className="col-xs-12 col-md-6 " >

        <Card className>
          <Card.Body className>
            {isLoading ? <span>loading</span> :
              <ProfilePicBio
                name={user.name}
                src={user.photo}
                alt='User profile picture'
                bio={user.bio}
              />}
            <span>

            </span>
          </Card.Body>
        </Card>
      </div>
      <div className="col-xs-12 col-md-6 ">
        <Card >
          <Card.Body >
            {isLoading ? <span>loading</span> :
              user.dogs.map((dog) => (
               
              <div>
                <SmallProfilePic
                name={dog.name}
                src={dog.images[0]}
                alt='dog profile picture'
                bio={dog.bio}
                />
              </div>)) 
            }
        
          </Card.Body>
        </Card>
      </div>
    </div>
      )
};