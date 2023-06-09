import React from 'react'
import './TrendingCard.css'
const TrendingCard = (props) => {
    const {nft} = props;
  return (
    <div className="trending-card absolute-center">
        <div className="tc-inner-wrapper">
            <div className="tc-content">
                <img alt={nft.user_name} src={nft.banner} className="tc-banner"/>
                <div className="tc-user-info">
                    <div className="tc-ui-left">
                        <img src={nft.user_photo} alt={nft.username} className="tc-user-logo"/>
                        <div>
                        <div className="tc-ui-username">{nft.user_name}</div>
                        <div className="tc-ui-userhandle">{nft.userhandle}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
    </div>
  )
}

export default TrendingCard
