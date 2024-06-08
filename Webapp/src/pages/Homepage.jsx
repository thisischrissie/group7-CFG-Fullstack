import Card from "react-bootstrap/Card";
import "../styles/homepage.css";
import SmallProfilePic from "../components/SmallProfilePic";
import { useState, useEffect } from "react";
import ProfilePicBio from "../components/ProfilePicBio";

export default function HomePage() {

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
  },[]);

  return (
        <div className="row">
          <div className="col-xs-12 col-md-6 " >
            <Card className="myPups">
              <Card.Body className="homepageCardBody">
                <div>
                  <h1>{user.name}'s Pups</h1>
                  </div>
                  {isLoading ? <span>loading</span> : 
                  <div>
                  {user.dogs.map((dog)=>(
                    <ProfilePicBio
                    name={dog.name}
                    src={dog.images[0]}
                    alt='User profile picture'
                    />))
                    }
                    </div>
                     }
              </Card.Body> 
              </Card>  
               </div>

            
            
          
              

        <div className="col-xs-12 col-md-6 ">
            <Card className="myPups">
              <Card.Body className="homepageCardBody">
                <div>
                  <h1 className="homepagePupPals">Connect with more puppy pals</h1>
                  </div>
                  <span className="homepageSpan">
                    <ul> 
                      {profiles.slice(0,3).map((dog) => (
                        <li className="homepageDog" key={dog.id}>
                          <SmallProfilePic/>
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