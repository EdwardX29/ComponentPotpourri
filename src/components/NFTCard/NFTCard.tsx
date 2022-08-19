import React, {useEffect} from 'react'
import './NFTCard.css'


export default function NFTCard () {

    useEffect(() => {
        document.title = "NFT Card Component"
    })

    return (
    <div className="NFTCardComponent" >
    {/* <main> */}
    <div className="card">

      <div className="img-container">
        <img className="nft-pic" src="NFTCard/image-equilibrium.jpg" />
        <div className="overlay-container">
          <div className="overlay">
            <img src="NFTCard/icon-view.svg" />
          </div>

        </div>
        
      </div>

      <div className="collection-name">
        Equilibrium #3429
      </div>
        
      <div className="collection-description">
        Our Equilibrium collection promotes balance and calm.
      </div>

      <div className="sell">
        <span className="price">
          <img src="NFTCard/icon-ethereum.svg" />
          0.041 ETH
        </span>
        <span className="days-left">
          <img src="NFTCard/icon-clock.svg" />
          3 days left
        
        </span>
      </div>

      <div className="line"></div>

      <div className="author-info">
        <img className="author-avatar" src="NFTCard/image-avatar.png" />
        <span className="credit">
          Creation of <span className="author">Jules Wyvern</span>
        </span>
      </div>

    </div>
  {/* </main> */}
  </div>
)


}