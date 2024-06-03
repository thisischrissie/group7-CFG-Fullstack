import '../styles/Button.css';

// button to be able to change text, link and color so it is reusable throughout the web app. 
function Button(props) {
  const {buttonLink, buttonName, color} = props
  const buttonStyle = {
    backgroundColor: color,
  };

  
  return (
    <>
    <button className="newButton" style={buttonStyle} onClick={buttonLink} > {buttonName}
    </button>
    </>
  );
}

export default Button;