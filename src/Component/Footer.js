import React from "react";
export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="footerLogo footerCols footerlogoextra">
                <img src="./images/brandLogo.svg" alt="img" />
                <p>Open an account in minutes, get full Control for much longer. </p>
            </div>
        <div className="footer">            
            <div className="footerLogo footerCols">
                <img src="./images/brandLogo.svg" alt="img" />
                <p>Open an account in minutes, get full Control for much longer. </p>
            </div>
            <div className="firstCol footerCols">
                <h1>Company</h1>
                <a href="#">About</a><br />
                <a href="#">Careers</a><br />
                <a href="#">Mobile</a><br />
            </div>
            <div className="secondCol footerCols">
                <h1>Contact</h1>
                <a href="#">Help/FAQ</a><br />
                <a href="#">Press</a><br />
                <a href="#">Affiliates</a><br />
            </div>
            <div className="thirdCol footerCols">
                <h1>More</h1>
                <a href="#">Airline fees</a><br />
                <a href="#">Airlines</a><br />
                <a href="#">Low fair tips</a><br />
            </div>
            <div className="fourthCol footerCols">
            <h1>Discover Our App</h1>
                <div className="fourthCol-buttons">                    
                    <button id="footerPlayButton">
                        <img src="./images/playstore.svg" alt="img" />
                        <div className="buttonPara">
                        <p id="playPara">GET IT ON</p>
                        <p id="big">Google Play</p>
                        </div>
                    </button>
                    <button>
                        <div id="appleDot">
                        <img src="./images/appleDot.svg" alt="img" />
                        <img src="./images/apple.svg" alt="img" />
                        </div>
                        <div className="buttonPara">
                        <p id="small">Available on the</p>
                        <p id="big">App Store</p>
                        </div>
                    </button>
                </div>
                <div className="socialLogos">                    
                    {/* <img  src="./images/fb.svg" alt="" />
                    <img id="insta" src="./images/insta.svg" alt="" />
                    <img src="./images/twitter.svg" alt="" /> */}
                    <div id="facebook">
                        <img src="./images/facebook1.svg" alt="img" />
                    </div>
                    <div id="instagram">
                        <img src="./images/instagram1.svg" alt="" />
                    </div>
                    <div id="twitter">
                        <img src="./images/twitter1.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
        <div className="fourthCol footerCols discoverextra">
            <h1>Discover Our App</h1>
                <div className="fourthCol-buttons">                    
                    <button id="footerPlayButton">
                        <img src="./images/playstore.svg" alt="img" />
                        <div className="buttonPara">
                        <p id="playPara">GET IT ON</p>
                        <p id="big">Google Play</p>
                        </div>
                    </button>
                    <button>
                        <div id="appleDot">
                        <img src="./images/appleDot.svg" alt="img" />
                        <img src="./images/apple.svg" alt="img" />
                        </div>
                        <div className="buttonPara">
                        <p id="small">Available on the</p>
                        <p id="big">App Store</p>
                        </div>
                    </button>
                </div>
                <div className="socialLogos">                    
                    {/* <img  src="./images/fb.svg" alt="" />
                    <img id="insta" src="./images/insta.svg" alt="" />
                    <img src="./images/twitter.svg" alt="" /> */}
                    <div id="facebook">
                        <img src="./images/facebook1.svg" alt="img" />
                    </div>
                    <div id="instagram">
                        <img src="./images/instagram1.svg" alt="" />
                    </div>
                    <div id="twitter">
                        <img src="./images/twitter1.svg" alt="" />
                    </div>
                </div>
            </div>
        <hr />
        <p id="bottomPara">All right reserved Hitmarker</p>
        </div>
    )
}