import Image from 'react-bootstrap/Image';
import './SmallProfilePic.css';
import dogProfilePic from './dog-pic.avif';

function SmallProfilePic({url, src, alt, pupName}) {
    src= dogProfilePic
    alt='Dog profile picture'
    url='/pupProfile/Leroy'

    return (
        <>
            <span><Image href={url} src={src} alt={alt} roundedCircle />
            <h2 className='pup-name'> {pupName}</h2></span>

        </>

    );
}
export default SmallProfilePic