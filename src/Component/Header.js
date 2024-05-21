import React from "react";

export default function Header(){
    return(
        <div className="header">
            <div className="header-part1">
                <img src="./images/logo.svg" alt="image" />
            </div>
            <div className="header-part2">
                <p className="cursor">Find a job</p>
                <p className="cursor">Post a job</p>
                <p className="cursor">Career advice</p>
            </div>
            <div className="header-part3">
                <img id="navicon" src="./images/dd.png" alt="" />
                <button id="login" className="cursor">Login</button>
                <button id="account" className="cursor">Create Account</button>
            </div>
        </div>
    )
}