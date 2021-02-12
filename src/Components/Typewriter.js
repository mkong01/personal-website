import React from "react";
// import "./HeroSection.css";
import Typewriter from "typewriter-effect";

function App() {
    return (
        <div className="A">
            <h2>
            <typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("String")
                }}
            />
            </h2>
        </div>
    );
}
export default Typewriter;

