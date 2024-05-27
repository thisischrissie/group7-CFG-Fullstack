import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./homepage.css";
import SmallProfilePic from "./SmallProfilePic";
import Logo from "./Logo";  

// import { useState, useEffect } from "react";

function Homepage() {

  // const [profiles, setProfiles] = useState([]); //store profiles here
  // const [showAllProfiles, setShowAllProfiles] = useState(false); //make profiles visible or not
  // const maxProfilesShown = 2; //2 profiles initially shown for my pups, 4 profiles for pups near you



  // const fetchProfiles = async () => {
  // try{
  //     //API GET Requests here
  //     const pupProfileResponse = await fetch('')
  //     const profileData = await pupProfileResponse.json()
  //     setProfiles(profileData);
  //   }
  // catch (error) {
  //     console.log("Error fetching profiles:", error)
  //   }
  // };

  // //show more and show less links, max profiles on page shown initially to be 2 profiles for my pups
    
  // useEffect(() => {
  //   fetchProfiles();
  // },[]);

  // const handleShowMore =() => {
  //   setShowAllProfiles(true);
  // };
  // const handleShowLess =() => {
  //   setShowAllProfiles(false);
  // };

  return (
        <div className="row">
          <div className="col-xs-12 col-md-6 " >
            
            <Card className="myPups">
              <Card.Body className="card-body">
                
                <span>

                  <Logo/>
                  <h1>Your Pups</h1>
                  {/* <ul> 
                    {profiles.map((request) =>(
                      // get id from sql?
                      <li key={request.id}> */}
                        <SmallProfilePic />
                        <SmallProfilePic />
                          {/* </li>
                          )
                        )}
                          </ul> */}
                        </span>
                        <span>
                  {/* {!showAllProfiles && profiles.length > maxProfilesShown &&(
                  <a name="See More" onClick={handleShowMore}/>
                    )
                    }
                    {showAllProfiles (
                    <a name="See Less" onClick={handleShowLess}/>
                    )} */}
                </span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-md-6 ">
            <Card className="pupsNearYou">
              <Card.Body className="card-body">
                <div>
                  <h1>Pups near you</h1>
                </div>
                <span>
                  <SmallProfilePic />
                </span>
                <span>
                  <SmallProfilePic />
                </span>

                <span>
                  <SmallProfilePic />
                </span>
                <span>
                  <SmallProfilePic />
                </span>
              </Card.Body>
            </Card>
          </div>
          </div>

  );
}
export default Homepage;
