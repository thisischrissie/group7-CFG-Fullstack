import '../styles/ProfilePicBio.css';
import Card from 'react-bootstrap/Card';
import defaultImage from '../images/ColliemeetsbeagleLogo.png';

function ProfilePicBio(props) {
    const {url, src, alt, name, bio } = props

    return (
    <container>
            <div className ="bigProfilePic"><img className="profilePicBioImg" 
            href={url} 
            src={src ? src : defaultImage} //if photo link doesnt work, use default picture
            alt={alt} 
            roundedCircle /></div>
            <Card className="nameBio">
            <div><h1 className="name">{name}</h1></div>
            <div><h2 className="bio">{bio}</h2></div>

            </Card>
        </container>


    
    );
}
export default ProfilePicBio