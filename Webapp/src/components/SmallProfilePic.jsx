import Image from 'react-bootstrap/Image';
import dogProfilePic from '../images/dog-pic.avif';
import styled from 'styled-components';

function SmallProfilePic({url, src, alt, pupName}) {
    src= dogProfilePic
    alt='Dog profile picture'
    url='/pupProfile/Leroy'

    return (
        <>
            <Span>
                <Image 
                href={url} 
                src={src} 
                alt={alt} 
                roundedCircle />
            <h2 className='pup-name'> {pupName}</h2></Span>

        </>

    );
}
export default SmallProfilePic

//component css
// const Image = styled.img `
//     width: 70px;
//     height: 60px;
//     border-radius: 50%;    
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: transparent;
//     `
  
const Span = styled.span `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: transparent;
    `
    
//styling for h2 className 'pup-name'?
const PupName = styled.h2 `
`
