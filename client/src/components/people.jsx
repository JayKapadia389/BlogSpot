import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function People(props){
    let navigate = useNavigate();

    function parseBody(fullText){
        let shortText = fullText.length > 200
        ? fullText.slice(0, 197) + "..."
        : fullText;

        return shortText ;
    }

    return(

        <div id="people-component"> 

        {props.profilesArray.map((obj)=>{
            return(

                <div className="people-card">

                <div>

                    <div 
                    className="profile"
                    onClick={()=>{

                        (obj.userId == props.currentUserId) ? navigate("/userprofile") : navigate(`/authorprofile?userId=${obj.userId}`) ;

                    }}>

                        <div className="profile-pic-div pc-profile-pic-div">
                            <img className="profile-pic" src={obj.profilePic}></img>
                        </div>

                        <p className="pc-author">{obj.firstName} {obj.lastName}</p>

                        <div className="empty"></div>

                        <button className="pc-follow-btn-mobile">follow</button>

                    </div>

                    <div className="pc-bio">

                        {parseBody(obj.bio)}                        

                    </div>

                </div>

                <div className="pc-follow-wrap">

                    <button className="pc-follow-btn">Follow</button>

                </div>

           </div>
                
            )
        })}

        </div>
    )
}

export default People