import styled from 'styled-components';

// button to be able to change text, link and color so it is reusable throughout the web app. 
function Button(props) {
  const {buttonLink, buttonName, color} = props
  const buttonStyle = {
    backgroundColor: color,
  };

  
  return (
    <>
    <NewButton 
    style={buttonStyle} 
    onClick={buttonLink}> {buttonName}
    </NewButton>
    </>
  );
}

export default Button;

//button css
const NewButton = styled.button`
  border: 1px solid #8A5D4D;
  border-radius:20px;
  color: black;
  padding: 3px;
  width: 10vh;
  height: fit-content;
  margin: auto;
  display: flex;
`

// .button-container {
  // display: flex
// }
