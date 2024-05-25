import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./homepage.css";
import SmallProfilePic from "./SmallProfilePic";
import Button from "./Button";
// import { useState, useEffect } from "react";

function Homepage() {

  const acceptButtonLink = "#"; // put or patch to update database.
  const declineButtonLink = "#"; // put or patch to update database.

  // const [profiles, setProfiles] = useState([]); //store profiles here
  // const [showAllProfiles, setShowAllProfiles] = useState(false); //make profiles visible or not
  // const maxProfilesShown = 2; //num of profiles initially shown

  //fetch friend request and friends list from backend, order to be friend requests first.

  // const fetchProfiles = async () => {
  // try{
  //     //API GET Requests here
  //     const pupProfileResponse = await fetch('/doggieprofilename')
  //     const profileData = await pupProfileResponse.json()
  //     setProfiles(profileData);
  //   }
  // catch (error) {
  //     console.log("Error fetching profiles:", error)
  //   }
  // };

  // //show more and show less links, max profiles on page shown initially to be 2 profiles
    
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
            <Card className="pupsAndFriends">
              <Card.Body className="card-body">
                {/* Get request for a list of friend requests here before friends list*/}
                <span> 
                  <h1>Play Dates</h1>
                  {/* <ul>  */}
                    {/* {profiles.map((request) =>(
                      // get id from sql?
                      <li key={request.id}> */}
                      <span>
                        <SmallProfilePic />
                        <div className="button-container">
                          <Button
                          onClick={acceptButtonLink}
                          buttonName="Accept"
                          color="#CAF377"
                          />
                          <Button
                          onClick={declineButtonLink}
                          buttonName="Reject"
                          color="#E08C7E"
                          />
                          </div>
                          </span>
                          {/* </li>
                          ))}
                          </ul> */}
                          </span>
                          {/* {!showAllProfiles && profiles.length > maxProfilesShown &&(
                            <a name="See More" onClick={handleShowMore}/>
                          )
                          }
                          {showAllProfiles (
                            <a name="See Less" onClick={handleShowLess}/>
                          )} */}
                  
                <span>
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
                <h1> Quiz</h1>
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
