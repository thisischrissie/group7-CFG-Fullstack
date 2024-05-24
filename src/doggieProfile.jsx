import Button from './Button';
import Card from 'react-bootstrap/Card';
import ProfilePicBio from './ProfilePicBio';
function doggieProfile() {
    return (
        <>
        <Card>
        <Card.Body className="card-body">
        <span>
        <ProfilePicBio/>
        </span> 
        </Card.Body>
        <Button href="#" name="Connect with me!"/>
        </Card>
        </>
    
    );
}
export default doggieProfile