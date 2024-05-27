import Image from 'react-bootstrap/Image';
import './SmallProfilePic.css';
import logo from './ColliemeetsbeagleLogo.png';

function Logo({src, alt}) {
    src= logo
    alt='Our logo of a cartoon person lifting a dog'
  

    return (
        <>
            <div><h1 className='appName'> colliemeetsbeagle</h1></div>
            <div><Image src={src} alt={alt} roundedCircle /> </div>
            

        </>

    );
}
export default Logo