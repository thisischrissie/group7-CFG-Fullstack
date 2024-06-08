import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../styles/homepage.css";
import SmallProfilePic from "../components/SmallProfilePic";
import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import Banner from '../components/dogFactAPI.jsx';

export default function HomePage() {
  const [profiles, setProfiles] = useState([]); //store profiles here

  const fetchProfiles = async () => {
    try {
      const pupProfileResponse = await fetch("http://localhost:3001/api/dogs");
      const profileData = await pupProfileResponse.json();
      setProfiles(profileData);
    } catch (error) {
      console.log("Error fetching profiles:", error);
    }
  };

  
  const [user, setUser] = useState({});
  //is loading 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('http://localhost:3001/api/owners/6654ba90507bbb3a0105dc56')
      .then(response => response.json())
      .then(data => setUser(data))
      .then(() => setIsLoading(false))

      .catch(error => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
    fetchProfiles();
  }, []);



console.log(user)
  return (
        <div className="row">
          <div className="col-xs-12 col-md-6 " >
            <Card className="myPups">
              <Card.Body className="homepageCardBody">
                <div>
                  <Logo/>
                  <h1>Your Pups</h1>
                  </div>
                  
              </Card.Body> 
              </Card>  
               </div>

            {/* {isLoading ? <span>loading</span> : 
            <div><p>{user.name} </p> 
            {user.dogs.map((dog)=>(
            <ProfilePicBio
              name={dog.name}
              src={dog.images.URL}
              alt='User profile picture'
              />))
              }
            </div>
            } */}
            
          
              

        <div className="col-xs-12 col-md-6 ">
            <Card className="myPups">
              <Card.Body className="homepageCardBody">
                <div>
                  <h1>Connect with more puppy pals</h1>
                  </div>
                  <span className="homepageSpan">
                    <ul> 
                      {profiles.slice(0,4).map((dog) => (
                        <li key={dog.id}>
                          <SmallProfilePic />
                          <span className="homepageSpan">{dog.name}</span>
                          </li>
                )
                )}
              </ul>

            </span>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
