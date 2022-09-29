import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";

export default function HomePage() {
    return (
        <div className="page home">
            <div className="container">
                <div className="greeting">
                    <h1>Hi. It's me, 
                         <span className="blue"> G</span>
                         <span className="red">o</span>
                         <span className="yellow">o</span>
                         <span className="blue">g</span>
                         <span className="green">l</span>
                         <span className="red">e</span>
                    </h1>
                    <h2>Let's be friends.</h2>
                    <NavLink to="quiz">
                        Take the short quiz &gt;
                    </NavLink>
                </div>

                <img src={logo} className="logo"/>
                {/* <p className="logo">Place Logo Here</p> */}
            </div>
        </div>
    );
}