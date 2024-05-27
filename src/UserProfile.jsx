import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./UserProfile.css";
import ProfilePicBio from "./ProfilePicBio";
import userProfilePic from './ColliemeetsbeagleLogo.png';
import dogProfilepic from './dog-pic.avif'

function Homepage() {


  return (
        <div className="row">
          <div className="col-xs-12 col-md-6 " >
            
            <Card className>
              <Card.Body className>
                <ProfilePicBio
                name="Sally"
                src = {userProfilePic}
                alt='User profile picture'
                bio="I am looking for a doggie play date"
                />
                <span>
                
                </span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-md-6 ">
            <Card >
              <Card.Body >
              <ProfilePicBio
              name="Poppy"
              src = {dogProfilepic}
              alt='User profile picture'
              bio="I am fun and affectionate! I love the beach and splashing around!"
              />

              </Card.Body>
            </Card>
          </div>
          </div>

  );
}
export default Homepage;
