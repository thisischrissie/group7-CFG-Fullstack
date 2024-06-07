import Image from 'react-bootstrap/Image';
import logo from '../images/ColliemeetsbeagleLogo.png';
import styled from 'styled-components';

export default function Logo() {

    return (
   
            <div><h1 className='appName'> colliemeetsbeagle</h1></div>
            <div><Image className="profilePicBioImg" src={logo} alt="Our logo of a cartoon person lifting a dog" roundedCircle /> </div>


        </>

    );
}

// // logo css
// const Image = styled(Image)`
//     width:500px;
//     height: 450px;
//     border-radius: 50%;    
//     display: block;
//     align-items: center;
//     justify-content: center;
//     background-color: transparent;
// `


const AppName = styled.h1`
    font-size: xx-large
`