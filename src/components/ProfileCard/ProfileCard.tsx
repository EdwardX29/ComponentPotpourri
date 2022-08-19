import React, {useEffect} from 'react'
import './ProfileCard.css'

export default function ProfileCard() {

    useEffect(() => {
        document.title = "Profile Card Component"
    })

    return (
        <div className="ProfileCardComponent" >
        <main>
        <div className="card-component">
          <div className="card-top">
            <img src="ProfileCard/bg-pattern-card.svg" alt="Card Pattern" />
          </div>
          <div className="profile-img-container">
            <img  className="profile-img" src="ProfileCard/image-victor.jpg" alt="Image of profile" />
          </div>
          
          <div className="user-info">
              <span className="user-name">Victor Crest</span> 
              <span className="user-age">26</span> 
         </div>
          <div className="user-location-div">
              <span className="user-location">London</span>
          </div>
          <div className="line"></div>
          <div className="stats">
            <div className="followers">
              <span>80K</span> 
              <span>Followers</span>
            </div>        
            <div className="likes">
              <span>803K</span>
              <span>Likes</span>
            </div>        
            <div className="photos">
              <span>1.4K</span>
              <span>Photos</span>
            </div>  
          </div>
        </div>
      </main>
      </div>

    )

}