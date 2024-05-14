import React from "react";
export default function Second(){
    const element =[
        {heading:"Social Video Creator",
            link:"Pipeline.com",
            Country:"Germany",
            img1:"./images/box1pic1.svg",
            img2:"./images/box1pic2.svg"
        },
        {heading:"Esports Competition Coordinator",
            link:"Thescore",
            Country:"Canada",
            img1:"./images/box2pic1.svg",
            img2:"./images/box2pic2.svg"
        },
        {heading:"Graphic Designer",
            link:"Pipeline.com",
            Country:"Ireland",
            img1:"./images/box3pic1.svg",
            img2:"./images/box3pic2.svg"
        },
        {heading:"Esports Competition Coordinator",
            link:"Thescore",
            Country:"Canada",
            img1:"./images/box2pic1.svg",
            img2:"./images/box2pic2.svg"
        },
        {heading:"Social Video Creator",
            link:"Pipeline.com",
            Country:"Germany",
            img1:"./images/box1pic1.svg",
            img2:"./images/box1pic2.svg"
        },
        {heading:"Graphic Designer",
            link:"Pipeline.com",
            Country:"Ireland",
            img1:"./images/box3pic1.svg",
            img2:"./images/box3pic2.svg"
        },
        {heading:"Social Video Creator",
            link:"Pipeline.com",
            Country:"Germany",
            img1:"./images/box1pic1.svg",
            img2:"./images/box1pic2.svg"
        },
        {heading:"Graphic Designer",
            link:"Pipeline.com",
            Country:"Ireland",
            img1:"./images/box3pic1.svg",
            img2:"./images/box3pic2.svg"
        },
        {heading:"Social Video Creator",
            link:"Pipeline.com",
            Country:"Germany",
            img1:"./images/box1pic1.svg",
            img2:"./images/box1pic2.svg"
        },
        {heading:"Esports Competition Coordinator",
            link:"Thescore",
            Country:"Canada",
            img1:"./images/box2pic1.svg",
            img2:"./images/box2pic2.svg"
        },
        {heading:"Social Video Creator",
            link:"Pipeline.com",
            Country:"Germany",
            img1:"./images/box1pic1.svg",
            img2:"./images/box1pic2.svg"
        },
        {heading:"Graphic Designer",
            link:"Pipeline.com",
            Country:"Ireland",
            img1:"./images/box3pic1.svg",
            img2:"./images/box3pic2.svg"
        },
        {heading:"Social Video Creator",
            link:"Pipeline.com",
            Country:"Germany",
            img1:"./images/box1pic1.svg",
            img2:"./images/box1pic2.svg"
        },
        {heading:"Graphic Designer",
            link:"Pipeline.com",
            Country:"Ireland",
            img1:"./images/box3pic1.svg",
            img2:"./images/box3pic2.svg"
        },
        {heading:"Social Video Creator",
            link:"Pipeline.com",
            Country:"Germany",
            img1:"./images/box1pic1.svg",
            img2:"./images/box1pic2.svg"
        }
        
    ];
    return(
        <div className="secondContainer">
        <div className="second">
            <div className="second-part1">                
            </div>
            <div className="second-part2">
            </div>
        </div>
        <div className="faltu">
        <div className="secondDiv">
        <h1>Promoted Jobs</h1>
        <p>These opportunities are shown on every page of our site and shared daily on our Twitter account.</p>        
        </div>
        <div className="boxes">
       {element.map((go)=>(
           
            <div className="boxes-parts">
                <h1>{go.heading}</h1>
                <hr />
                <div className="boxes-parts-links">
                    <img src={go.img1} alt="img1" />
                    <h5>{go.link}</h5>
                </div>
                <div className="boxes-parts-links pad">
                    <img src={go.img2} alt="img2" />
                    <p>{go.Country}</p>
                </div>
            </div>           
           
       ))}
       </div>
        </div>
        </div>
    )
}