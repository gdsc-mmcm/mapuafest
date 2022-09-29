import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { personalities, items } from "../data";
import logoWhite from "../images/logo_w.svg";
import designerCharacter from "../images/characters/designer.png";
import communicatorCharacter from "../images/characters/communicator.png";
import developerCharacter  from "../images/characters/developer.png";
import jackOfAllTradesCharacter from "../images/characters/jackofalltrades.png";
import photovideographerCharacter from "../images/characters/photovideographer.png";

export default function ResultPage() {
    const { personalityPath } = useParams();
    const possibleUrlPaths = personalities.map((personality) => personality.urlPath);
    if (!possibleUrlPaths.includes(personalityPath)) return;

    const personality = personalities.find((personality) => personalityPath === personality.urlPath);

    return (
        <div className="result">
            <div className="container">
                <h2>Congrats, you will most likely be:</h2>

                <div className="center">
                    <h1>The {personality.name}</h1>
                    <img src={personality.imgSrc} className="character" />
                </div>

                <div className="bottom">
                    <h3>The {personality.name}</h3>
                    <p className="return">Not satisfied? <NavLink to="../quiz" className="retake">Retake the quiz</NavLink></p>
                </div>
            </div>
            {/* <h1>{personality.nickname}</h1>
            <img />
            <h3>The {personality.name}</h3>
            <p>{personality.description}</p> */}


            <div className="foot">
                <p>What Type of Creator Are You?</p>
                <img src={logoWhite} className="logo"/>
            </div>            
        </div>
    );
}