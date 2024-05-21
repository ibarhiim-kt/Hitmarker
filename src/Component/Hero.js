import React from "react";
export default function Hero()
{
    return(
        <div className="heroContainer">
        <div className="hero">
            <div className="hero-part1">
                <h1>The home of gaming <br />and esports jobs</h1>
                <p>With over 8,000 active listings from more than 50 countries, Hitmarker is the largest gaming and esports jobs platform in the world. Find your dream career. Hire top talent. Make your mark.</p>
                <div className="hero-part1-buttons ">
                    <button className="cursor">View Jobs</button>
                <div className="video cursor">
                    <img src="./images/videoIcon.svg" alt="img" />
                    <p>Watch our video</p>
                </div>
                </div>                
            </div>
            <div className="hero-part2">
                <img src="./images/heroImage.svg" alt="image" />
            </div>
        </div>
        <div className="heroFooter">
            <img src="./images/heroFooterImg.svg" alt="image" />
        </div>
        </div>
    )
}