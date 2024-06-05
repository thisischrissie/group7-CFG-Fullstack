import '../styles/ProfilePicBio.css';
import Card from 'react-bootstrap/Card';

function ProfilePicBio(props) {
    const {url, src, alt, name, bio } = props
 
    return (
    <container>
            <div className ="bigProfilePic"><img 
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
export default ProfilePicBio