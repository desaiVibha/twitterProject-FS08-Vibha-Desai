import ProfileMain from '../../components/ProfileMain/ProfileMain';
import './Profile.css';
import HomeOption from '../../components/HomeOption/HomeOption';
import LoginOption from '../../components/LoginOption/LoginOption';

function Profile(){

    return(
        <div className='home-style'>
             <div className="left-container">
                <HomeOption/>
            </div>
            <div className="centre-container">
                <ProfileMain/>                
            </div>
            <div className="right-container">
                <LoginOption/>
            </div>
        </div>
    );
}
export default Profile;