import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/esm/Image";
import styled from "styled-components";

function ProfilePicBio(props) {
    const {url, src, alt, name, bio } = props
    return (
    <container>
            <div className ="bigProfilePic"><img className="profilePicBioImg" 
            href={url} 
            src={src} 
            alt={alt} 
            roundedCircle /></div>
            <Card className="nameBio">
            <div><h1 className="name">{name}</h1></div>
            <div><h2 className="bio">{bio}</h2></div>

            </Card>
        </container>


    
    );
}

//component css

const ProfilePic = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Profile Pic",
}))`
  width: 200px;
  height: 180px;
  border-radius: 50%;
  align-content: center;
  justify-content: center;
  display: flex;
`;

const Name = styled.h1`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: xx-large;
  color: #8a5d4d;
  align-content: center;
  justify-content: center;
`;

const Bio = styled.h2`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
`;

// const Card = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-evenly;
//     background-color: white;
//     color:#8A5D4D;
//    `

const BigProfileDiv = styled.div`
    align - content: center;
    justify - content: center;
    display: flex;
`;
