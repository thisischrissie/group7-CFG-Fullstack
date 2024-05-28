import Image from 'react-bootstrap/Image';
import '../styles/SmallProfilePic.css';
import logo from '../images/ColliemeetsbeagleLogo.png';

function Logo() {
  

    return (
        <>
            <div><h1 className='appName'> colliemeetsbeagle</h1></div>
            <div><Image src={logo} alt="Our logo of a cartoon person lifting a dog" roundedCircle /> </div>
            

        </>

    );
}
export default Logo;