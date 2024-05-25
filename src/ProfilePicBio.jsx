
import './ProfilePicBio.css';
import dogProfilePic from './dog-pic.avif';
import Card from 'react-bootstrap/Card';

function ProfilePicBio({url, src, alt, pupName, bio}) {
    src= dogProfilePic 
    alt='Dog profile picture'
    pupName='Poppy'
    bio="I am fun and affectionate! I love the beach and splashing around!"

// const handleShowMore =() => {
//   setShowAllProfiles(true);
// };
// const handleShowLess =() => {
//   setShowAllProfiles(false);
// };


    return (
    <container>
            <div className ="bigProfilePic"><img 
            href={url} 
            src={src} 
            alt={alt} 
            roundedCircle /></div>
            <Card className="pupNameBio">
            <div><h1 className="pupName">{pupName}</h1></div>
            <div><h2 className="pupBio">{bio}</h2></div>
            {/* {!showAllProfiles && profiles.length > maxProfilesShown &&(
                <a name="See More" onClick={handleShowMore}/>
                    )
                    }
                {showAllProfiles (
                <a name="See Less" onClick={handleShowLess}/>
                    )} */}
            </Card>
        </container>


    
    );
}
export default ProfilePicBio