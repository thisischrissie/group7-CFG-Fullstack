import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../styles/UserProfile.css";
import ProfilePicBio from "../styles/ProfilePicBio.css";

export default function DogProfile() {
    const [profiles, setProfiles] = useState([]); //store profiles here

    const fetchProfiles = async () => {
      try {
        const pupProfileResponse = await fetch('http://localhost:3001/api/dogs')
        const profileData = await pupProfileResponse.json()
        setProfiles(profileData);
      }
    catch (error) {
        console.log("Error fetching profiles:", error)
      }
    };

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

  useEffect(() => {
    fetchProfiles();
  },[]);


  return (
    <div className="userProfileRow">
        <Card >
          <Card.Body >
            {isLoading ? <span>loading</span> :
              user.dogs.map((dog) => (
              <div>
                <ProfilePicBio
                name={dog.name}
                src={dog.images[0]}
                alt='Dog profile picture'
                bio={dog.bio}
                gender= {dog.gender}
                breed = {dog.breed}
                birthday = {dog.birthday}
                />
              </div>)) 
            }
        
          </Card.Body>
        </Card>
      </div>
      )
};
