import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="page home">
            <div className="container">
                <div className="greeting">
                    <h1>Hi. It's me, Google.</h1>
                    <h2>Let's be friends.</h2>
                    <NavLink to="quiz">
                        Take the short quiz &gt;
                    </NavLink>
                </div>

                <p className="logo">Place Logo Here</p>
            </div>
        </div>
    );
}