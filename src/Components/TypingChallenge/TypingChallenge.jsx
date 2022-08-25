import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import "./TypingChallenge.css"

const TypingChallenge = ({
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange
}) => {
        // console.log(testInfo)
    return ( 
        <div className="typing-challenge">
            <div className="timercontainer">
                <p className="timer">00:{timeRemaining > 11 ? timeRemaining : `0${timeRemaining}`}</p>
                <p className="timer-info">{!timerStarted && "Start Typing to Start the Test"}</p>
            </div>
        <div className="textarea-container">
            <div className="textarea-left">
                <div className="textarea text-paragraph">
                    {/* {selectedParagraph} */}
                    {
                        testInfo.map((individualLetterInfo, index) =>{
                            return <TestLetter  
                            key={index}
                            individualLetterInfo={individualLetterInfo} /> ;
                        })
                    }
                </div>
            </div>
            <div className="textarea-right">
                <textarea onChange={(e) => onInputChange(e.target.value)} name="" id="" cols="30" rows="10" className="textarea" placeholder='Start Typing Here'></textarea>
            </div>
        </div>

        </div>
     );
}
 
export default TypingChallenge;