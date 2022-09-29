import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { personalities, items } from "../data";
import logo from "../images/logo.svg";
import logoWhite from "../images/logo_w.svg";
import fb from "../images/links/fb.svg";
import ig from "../images/links/ig.svg";

const getResultPagePath = (selectedAnswers) => {
    let tally = [];
    const personalityKeys = personalities.map(personality => personality.key);
    for (const key of personalityKeys) {
        tally.push({
            personalityKey: key,
            points: 0
        });
    }

    items.forEach((item, i) => {
        const answer = item.answers[selectedAnswers[i]];
        for (const personalityKey of answer.personalityKeys) {
            let tallyIndex = tally.findIndex(tallyItem => tallyItem.personalityKey === personalityKey);
            tally[tallyIndex].points += 1;
        }
    });

    let mostPoints = Math.max(...tally.map(personality => personality.points));
    let userPersonality = tally.filter(personality => personality.points === mostPoints);
    
    let userPersonalityKey;
    if (userPersonality.length >= 2) {
        userPersonalityKey = "jt";
    } else {
        userPersonalityKey = userPersonality[0].personalityKey;
    }

    let futureUrlPath = personalities.find(personality => personality.key === userPersonalityKey).urlPath;
    return futureUrlPath;
};

const questionColors = ["blue", "red", "yellow", "green"];

function QuizPage() {
    const [currentSection, setCurrentSection] = useState("questions");
    const [selectedAnswers, setSelectedAnswers] = useState(Array(items.length).fill(-1));

    return (
        <div className="page quiz">
            <CurrentQuizSection 
                section={currentSection}
                setSection={setCurrentSection}
                selectedAnswers ={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
            />
        </div>
    );
}

function CurrentQuizSection({section, setSection, selectedAnswers, setSelectedAnswers}) {
    if (section === "questions") {
        return <QuestionsSection setSection={setSection} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />;
    } else {
        return <SocialMediaSection selectedAnswers={selectedAnswers}/>;
    }
}

function QuestionsSection({setSection, selectedAnswers, setSelectedAnswers}) {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    let currentQuestionData = items[currentQuestion - 1];
    let currentQuestionColor = questionColors[(currentQuestion - 1) % questionColors.length];

    const setSelectedAnswer = (i) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestion - 1] = i;
        setSelectedAnswers(newSelectedAnswers);
    };

    return (
        <section className={`questions questions--${currentQuestionColor}`}>
            <div 
                className={`head`}
            >
                <div className="container">
                    <p>Question {currentQuestion}/{items.length}</p>
                    <div className="progress-bar-container">
                        <div 
                            className={`
                                progress-bar 
                                ${currentQuestion === items.length ? 
                                    'progress-bar--complete' : 
                                    'progress-bar--incomplete'
                                }
                            `}
                            style={{
                                width: `${currentQuestion / items.length * 100}%`
                            }}>
                                &nbsp;
                        </div>
                    </div>
                </div>
            </div>

            <div className="question">
                <h2>{currentQuestionData.question}</h2>
                <div className="answers">
                    {currentQuestionData.answers.map((ans, i) => {
                        return (
                            <button 
                                key={i}
                                type="button" 
                                className={`answer ${i === selectedAnswers[currentQuestion - 1] ? "answer--selected": ""}`}
                                onClick={() => setSelectedAnswer(i)}
                            >
                                {ans.answer}
                            </button>
                        );
                    })}
                </div>

                <div className="question-nav">
                    {currentQuestion === 1 ? null :
                        <button
                            type="button"
                            className="back"
                            onClick={() => {
                                setCurrentQuestion(currentQuestion - 1);
                                window.scrollTo({top: 0, left: 0, behavior: "auto"});
                            }}
                        >
                            Back
                        </button>
                    }

                    <button
                        type="button"
                        className={`next ${selectedAnswers[currentQuestion - 1] === -1 ? "next--inactive" : ""}`}
                        onClick={() => {
                            if (selectedAnswers[currentQuestion - 1] !== -1) {
                                setCurrentQuestion(currentQuestion + 1);
                                window.scrollTo({top: 0, left: 0, behavior: "auto"});
                                
                                if (currentQuestion === items.length) {
                                    setSection("social-media");
                                }
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="foot">
                <p>What Type of Creator Are You?</p>
                <img src={logo} className="logo"/>
            </div>
        </section>
    );
}

function SocialMediaSection({ selectedAnswers }) {
    const navigate = useNavigate();

    return (
        <section className="social-media">
            <div className="container">
                <h2>Be <span className="in-the-now">#InTheNow</span> on our social media</h2>
                <div className="links">
                    <a
                        className="facebook"
                        href="https://www.facebook.com/gdsc.mapuamcm/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>Facebook</p> <img src={fb} />
                    </a>

                    <a
                        className="instagram"
                        href="https://www.instagram.com/gdsc_mapuamcm/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>Instagram</p> <img src={ig} />
                    </a>
                </div>

                {/* <NavLink to="../result" className="finish">
                    Finish &gt;
                </NavLink> */}

                <button
                    type="button"
                    className="finish"
                    onClick={() => navigate(`../result/${getResultPagePath(selectedAnswers)}`)}
                >
                    Finish Quiz
                </button>            
            </div>

            <div className="foot">
                <p>What Type of Creator Are You?</p>
                <img src={logoWhite} className="logo"/>
            </div>            
        </section>
    )
}

export default QuizPage;