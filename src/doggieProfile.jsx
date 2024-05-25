import ProfilePicBio from './ProfilePicBio';
import Card from 'react-bootstrap/Card';
import Dropdown from './Dropdown';
import Button from './Button';
import { useState } from "react";
import './DoggieProfile.css'
// import CarouselPic from './CarouselPic';

function DoggieProfile() {
    const [selectedBreed, setSelectedBreed] = useState("");
    function onSelectBreed(event) {
        const value = event.target.value;
        setSelectedBreed(value);
      }
    
      const breeds = [
        "Bulldog",
        "Golden Retreiver",
        "Husky",
        "Sheltie",
        "Labrador",
        "Samoyed",
        "Yorkshire Terrier"
      ];
    
    return (
        <>
    <div className="row">
        <div className="col-xs-12 col-md-12" ></div>
        <Card >
        <Card.Body className="pic-bio-card-body">
        <span>
        <ProfilePicBio/>
        </span>        
    
        </Card.Body>
        </Card>
    </div>
    <div className="col-xs-12 col-md-6 " >
        <Card className="doggieProfileCard">
            <Card.Body className="doggie-card-body">
                <span><h2>Breed</h2> <Dropdown
                options={breeds}
                selectedOptions={selectedBreed}
                onSelect={onSelectBreed}
                placeholder="Please select a Breed"/></span>
                <span><h2>Temperament</h2> </span>  
                <span><h2>Favourite Snack</h2></span>
                <span><h2>Favourite Toy</h2></span>
                <Button className="newButton"
                // onClick ="GET request" 
                buttonName="Connect with me!"
                color="#CAF377"/>

            </Card.Body>
        </Card>
        </div>
        {/* <div className="col-xs-12 col-md-6" >
        <Card>
            <Card.Body className="doggie-carousel-pics">
            <CarouselPic/>
            </Card.Body>
        </Card>
        </div> */}
        </>
    
    );
}
export default DoggieProfile