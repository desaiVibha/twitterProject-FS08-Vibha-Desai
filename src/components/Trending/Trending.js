import './Trending.css';
function Trending(props){
    return(
        <div className='trending-main'>
            <p className='header_small'>{props.data.header}</p>
            <p className='text'>{props.data.text}</p>
            <p className='header_small'>{props.data.tweetCount}</p>
        </div>        
    );

}
export default Trending;