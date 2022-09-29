import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { items } from "../data";

function QuizPage() {
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState("questions");
    const [selectedAnswers, setSelectedAnswers] = useState(Array(items.length).fill(-1));
    const [points, setPoints] = useState({
        "ds": 0,
        "pv": 0,
        "wr": 0,
        "co": 0,
        "il": 0,
        "dv": 0,
    });

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
    } else if (section === "promotion") {
        return <PromotionSection setSection={setSection} />;
    } else {
        return <SocialMediaSection />;
    }
}

function QuestionsSection({setSection, selectedAnswers, setSelectedAnswers}) {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    let currentQuestionData = items[currentQuestion - 1];

    const setSelectedAnswer = (i) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestion - 1] = i;
        setSelectedAnswers(newSelectedAnswers);
        console.log(selectedAnswers.toString());
    }

    return (
        <section className="questions">
            <div className="head">
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
                                    setSection("promotion");
                                }
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}

function PromotionSection({setSection}) {
    return (
        <section className="promotion">
            <h2>Bonus Question:</h2>
            <h3>Would you mind liking and sharing our page?</h3>

            <div className="choices">
                <button 
                    type="button" 
                    className="confirm"
                    onClick={() => setSection("social-media")}
                >
                    Yes, I will!
                </button>

                {/* <button
                    type="button"
                    className="reject"
                    onClick={() => navigate("../result")}
                >
                    Next time
                </button> */}

                <NavLink to="../result" className="reject">
                    Next time
                </NavLink>
            </div>

            {/* <button
                type="button"
                className="finish"
                onClick={() => navigate("../result")}
            >
                Finish &gt;
            </button> */}

            <NavLink to="../result" className="finish">
                Finish &gt;
            </NavLink>
        </section>
    );
}

function SocialMediaSection() {
    return (
        <section className="social-media">
            <h2>Be #InTheNow with our social media pages</h2>

            <div className="links">
                <a
                    className="facebook"
                    href="https://www.facebook.com/gdsc.mapuamcm/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Check out our Facebook
                </a>

                <a
                    className="instagram"
                    href="https://www.instagram.com/gdsc_mapuamcm/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Follow us on Instagram
                </a>
            </div>

            <NavLink to="../result" className="finish">
                Finish &gt;
            </NavLink>
        </section>
    )
}

export default QuizPage;