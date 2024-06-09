import Image from 'react-bootstrap/Image';
import '../styles/SmallProfilePic.css';


function SmallProfilePic(props) {
    const {src, alt, pupName} = props

    return (
        <>
            <span className="smallProfilePicNameSpan"><Image className="profilePicBioImg"  src={src} alt={alt} roundedCircle />
            <h2 className='pup-name'> {pupName}</h2></span>

        </>

    );
}
export default SmallProfilePic