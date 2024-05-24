import Image from 'react-bootstrap/Image';
import './ProfilePicBio.css';
import dogProfilePic from './dog-pic.avif';

function ProfilePicBio({url, src, alt, pupName, bio}) {
    src= dogProfilePic 
    alt='Dog profile picture'
    return (
        <>
            <div><Image href={url} src={src} alt={alt} roundedCircle /></div>
            <div className='containerNameBio'>
            <h2> {pupName}</h2>
            <p>{bio}</p>
            </div>



        </>
    
    );
}
export default ProfilePicBio
