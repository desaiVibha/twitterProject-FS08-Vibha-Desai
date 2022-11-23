import React from 'react';
import Tweet from '../Tweet/Tweet.js';
//import Tweet from '../Tweet/Tweet';
import './ProfileMain.css';
import {useEffect} from 'react';
import {useState} from 'react';

function ProfileMain(){

    const [ptweets, setPtweets]=useState([]);
    useEffect(()=>{
        fetch("jordanwalke.json").then(
            (resp)=>{
                return resp.json();
            }
        ).then(
            (resp)=>{
                console.log(resp);
                setPtweets(resp);
            }
        );
    },[]); 

    return(
        <div className='profile-main'>
            <div className='cover'>
                <a href="#"><img className='profile-img' src="https://pbs.twimg.com/profile_images/1333329963383103489/ee7VrWQy_400x400.jpg"></img></a>
                                
            </div>
            <div className='follow-btn-container float-end'>
                <button className='follow-btn'>Follow</button>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">Tweets</a>
                    </li>
                    <li>
                        <a href="#">Tweets & Replies</a>
                    </li>
                    <li>
                        <a href="#">Media</a>
                    </li>
                    <li>
                        <a href="#">Likes</a>
                    </li>
                </ul>
            </div> 
            {
                ptweets.map(ptweet=>
                    <div>
                        <Tweet data={ptweet}/>
                        <hr/>
                    </div>
                    
                    )
                }
            
          

            
                   
            
           

        </div>
    );
}
export default ProfileMain;