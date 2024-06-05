import UploadImage from './UploadImage';
import Card from 'react-bootstrap/Card';
import Dropdown from './Dropdown';
import Button from './Button';
import { useState } from "react";
import '../styles/UserProfileForm.css'
import RadioButton from './RadioButton';
import React from 'react';

function UserProfileForm() {

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
    
    const [selectedTemperament, setSelectedTemperament] = useState("");
    function onSelectTemperament (event) {
        const value = event.target.value;
        setSelectedTemperament(value);
      }
    
      const temperament = [
        "Friendly",
        "Independant",
        "Playful",
        "Quiet",
        "Shy",
        "Affectionate"
      ];

      const items= [
        {value: 'She/her', label: 'She/her'},
        {value: 'He/him', label: 'He/him'},
        {value: 'They/them', label:'They/them'},
        {value: 'Unknown', label: 'Prefer not to say'}
      ];
      const [value, setValue] = useState("")
      const pupGender= [
        {value: 'Female', label: 'Female'},
        {value: 'Male', label: 'Male'},
        {value: 'Unknown', label: 'Prefer not to say'}
      ];
      const [genderValue, setgenderValue] = useState("")

    return (
      <>
    <div className="row">
    <div className="col-xs-12 col-md-6 " >
        <Card className="doggieProfileCard">
            <Card.Body className="doggie-card-body">
              <h1> Create your user profile</h1>
  
              <span><h2>Dog owner name:</h2></span>
              <span><textarea name="ownerName" rows={1} cols={20} /></span>  
            <span><h2>Dog owner pronouns:</h2></span>
             
              <span><RadioButton className="radioButton"
              name="pronouns"
              items={items}
              value={value}
              onChange={setValue}/>
              </span>
              <span><h2>Dog owner bio:</h2></span>
              <span><textarea name="ownerBio" rows={2} cols={30} /></span> 
            <h1> Create your pup's profile:</h1>
            <span><h2>Pup name:</h2></span>
              <span><textarea name="ownerName" rows={1} cols={20} /></span>  
            <span><h2>Pup gender:</h2></span>
             
              <span><RadioButton className="radioButton"
              name="gender"
              items={pupGender}
              value={genderValue}
              onChange={setgenderValue}/>
              </span>
              <span><h2>Pup bio:</h2></span>
              <span><textarea name="pupBio" rows={2} cols={30} /></span> 
            <span><h2>Breed</h2>  </span>  
                <Dropdown
                options={breeds}
                selectedOptions={selectedBreed}
                onSelect={onSelectBreed}
                placeholder="Please select a Breed"/>
                <span><h2>Temperament</h2>  </span>  
                <Dropdown
                options={temperament}
                selectedOptions={selectedTemperament}
                onSelect={onSelectTemperament}
                placeholder="Please select a Temperament"
                />
        
                <span><h2>Favourite Toy</h2></span>
                <textarea name="dogToy" rows={1} cols={30} />
                <span><h2>Favourite Activity</h2></span>
                <textarea name="dogActivity" rows={1} cols={30} />
                
                <span><h2>Upload puppy profile picture: </h2></span>
                <UploadImage/>
                <span>
              <Button className="newButton"
                // onClick ="POST request" 
                buttonName="Add another pup"
                color="#CAF377"/>
                <Button className="newButton"
                // onClick ="POST request" 
                buttonName="Submit"
                color="#CAF377"/>
              </span>
            </Card.Body>
        </Card>
        </div>
        </div>
        </>

    );
}
export default UserProfileForm
//https://blog.logrocket.com/react-hook-form-complete-guide/ - full guide buiding a form
//https://youtu.be/_tUdtt6H5CE?t=208 - to build a form in react for both dog owner info and dog info. How do i add another pup? create a button to ask if they would like to add another pup? before they submit?
//https://www.youtube.com/watch?v=fv9gYJ3IJys - upload image using Dropzone
//  change button colour to darker shade on hover. 