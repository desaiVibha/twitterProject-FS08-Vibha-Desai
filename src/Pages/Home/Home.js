import './Home.css'
import HomeOption from '../../components/HomeOption/HomeOption';
import LoginOption from '../../components/LoginOption/LoginOption';
import Feed from '../../components/Feed/Feed';

function Home(){
    return(
        <div className='home-style'>
            <div className="left-container">
                <HomeOption/>
            </div>
            <div className="centre-container">
                <Feed/>                
            </div>
            <div className="right-container">
                <LoginOption/>
            </div>
        </div>
        
    );
}
export default Home;