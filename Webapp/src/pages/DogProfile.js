import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../styles/homepage.css";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ProfilePicBio from "../components/ProfilePicBio";

function DogProfile() {
    
  const {dogid} = useParams()
  const [dogData, setDogData] = useState(null); 
 
    
    useEffect(() => {
      const fetchDogData = async() => {
        const response = await fetch(`http://localhost:3001/api/dogs/${dogid}`);
        const data = await response.json();
        setDogData(data); 
      };
      fetchDogData();
    }, [dogid]);
       

return (
    <div>
<Card>
    <Card.Body>
                  <div>
                    {dogData && 
                        <>
                        <ProfilePicBio
                        name={dogData.name} 
                        bio= {dogData.bio}
                        src={dogData.images[0]}
                        gender= {dogData.gender}
                        breed = {dogData.breed}
                        birthday = {dogData.birthday}

                        alt='Dog profile picture'
                    
                    />
                    
                    <h2> {dogData.gender}</h2>
                    <h2> {dogData.birthday}</h2>
                    <h2>{dogData.breed}</h2>
                    </>
                    }
                    
                    
                    </div>
                    </Card.Body>
                    </Card>
                    </div>
  
)}


export default DogProfile;