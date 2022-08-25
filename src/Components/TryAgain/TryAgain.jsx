import React from 'react';
import './TryAgain.css'

const TryAgain = ({
    words,
    characters,
    wpm,
    startAgain
}) => {
    return ( 
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                <p>
                    <b>characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>    
            </div>
        
        <div>
            <button onClick={() => startAgain()} className='end-btns start-again-btn'>
                Re-try
            </button>
            <button onClick={() => window.open("https://www.facebook.com/sharer/sharer.php?u=CheckThisOut", "facebook-share-dialog", "width=800, height=600")} className='end-btns share-btn'>
                Share
            </button>
            <button onClick={() => window.open("https://twitter.com/intent/tweet?text=CheckThisOut ", "twitter", "width=800, height=600")} className='end-btns tweet-btn'>
                Tweet
            </button>
        </div>
        </div>
     );
}
 
export default TryAgain;