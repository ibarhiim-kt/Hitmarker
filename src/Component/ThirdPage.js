import React from "react";
export default function ThirdPage(){
    return(
        <div className="thirdpage">
            
            <div className="thirdpage-part2">
                <div className="thirdpage-part2-part1">
                    <div id="h1">
                        <img src="./images/comma.svg" alt="" />
                    </div>
                    
                    <img id="thirdPageImg1" src="./images/Image.png" alt="img" />
                    <img id="dots" src="./images/dots.svg" alt="img" />
                </div>
                <div className="thirdpage-part2-part2">
                    <div className="thirdpage-part2-part2-para1">
                        <h1>What pepole say</h1>
                        <div className="thirdpage-part2-part2-para1-img">
                        <div id="arro2">
                            <img src="./images/arro2.svg" alt="" />
                        </div>
                        <div id="arro3">
                            <img src="./images/arro3.svg" alt="" />
                        </div>
                        {/* <img id="arrow2" src="./images/arrow2.svg" alt="image1" />
                        <img src="./images/arrow3.svg" alt="image2" /> */}
                        </div>
                    </div>
                    <div className="thirdpage-part2-part2-para2">
                            <div className="boldLine"></div>
                            <div className="thirdpage-part2-part2-para2-para">
                            <div className="thirdpage-part2-part2-para2-para-part1">
                                <div className="darrell">
                                <h1>Darrell Steward</h1>
                                <p>CEO, ESport.</p>
                                </div>
                                <div className="star">
                                    <img src="./images/stars.svg" alt="img" />
                                </div>
                            </div>                                
                            <div className="thirdpage-part2-part2-para2-para-part2">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}