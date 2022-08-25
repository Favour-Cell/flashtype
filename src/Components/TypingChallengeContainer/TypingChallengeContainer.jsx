import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({ 
    selectedParagraph, 
    words, 
    characters, 
    wpm, 
    timeRemaining, 
    timerStarted,
    testInfo,
    onInputChange
}) => {
    return ( 
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* Word Typed */}
                <ChallengeDetailsCard cardName="Words" cardValue={characters} />
                {/* Characters Typed  */}
                <ChallengeDetailsCard cardName="Characters" cardValue={words} />
                {/* Speed */}
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm} />
            </div>
            {/* The Real Challenge */}
            <div className="typewriter-container">
                <TypingChallenge selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                testInfo={testInfo}
                onInputChange={onInputChange}
                />
            </div>
        </div>
     );
}
 
export default TypingChallengeContainer;