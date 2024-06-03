import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../styles/UserProfile.css";
import ProfilePicBio from "./ProfilePicBio";
import userProfilePic from '../images/ColliemeetsbeagleLogo.png';
import dogProfilepic from '../images/dog-pic.avif';


export default function UserProfile() {

  const [user, setUser] = useState([]);
//fetching user by ID; test ID endpoint is used line 14
  useEffect(() => {
    fetch('http://localhost:3001/api/owners/6654ba90507bbb3a0105dc57')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);


  return (
    <div className="row">
      <div className="col-xs-12 col-md-6 " >

        <Card className>
          <Card.Body className>
            <ProfilePicBio
              name={user.name}
              src={userProfilePic}
              alt='User profile picture'
              bio={user.bio}
            />
            <span>
              
{/* should I turn these parts into two separate cards, attempt to call two different endpoints? */}
            </span>
          </Card.Body>
        </Card>
      </div>
      <div className="col-xs-12 col-md-6 ">
        <Card >
          <Card.Body >
            <ProfilePicBio
              name="Poppy"
              src={dogProfilepic}
              alt='User profile picture'
              bio="I am fun and affectionate! I love the beach and splashing around!"
            />

          </Card.Body>
        </Card>
      </div>
    </div>

  );
}