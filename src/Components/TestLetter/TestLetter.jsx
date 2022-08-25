import React from 'react';
import './TestLetter.css'

const TestLetter = ({individualLetterInfo}) => {
    const {status} = individualLetterInfo;


    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status]
    //*************************************** */
    //This is another way to change the colours..
    // let statusClass;
    // if(status === "correct") {
    //     statusClass = "test-letter-correct";
    // } else if(status === "incorrect") {
    //     statusClass = "test-letter-incorrect"
    // } else {
    //     statusClass = "test-letter-not-attempted"
    // }
    //****************************************** */

    return ( 
        <span className={`test-letter ${statusClass}`}>{individualLetterInfo.testLetter}</span>
     );
}
 
export default TestLetter;