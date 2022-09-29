import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { personalities, items } from "../data";
import designerCharacter from "../images/characters/designer.png";

export default function ResultPage() {
    const { personalityPath } = useParams();
    const possibleUrlPaths = personalities.map((personality) => personality.urlPath);
    if (!possibleUrlPaths.includes(personalityPath)) return;

    const personality = personalities.find((personality) => personalityPath === personality.urlPath);

    return (
        <div className="result">
            <h2>Congrats, you'll most likely be:</h2>
            <img src={designerCharacter} className="character" />
            {/* <h1>{personality.nickname}</h1>
            <img />
            <h3>The {personality.name}</h3>
            <p>{personality.description}</p> */}

            {/* <p className="return">Not satisfied? <NavLink to="../quiz">Retake the quiz</NavLink></p> */}
        </div>
    );
}