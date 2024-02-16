//GOAL : show currently active question to user.
// when the question was answered by user
// i want to switch to a different question.

import { useState, useCallback, useRef } from "react";
import QUESTIONS from '../questions.js';
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {

    // 1st state is when i want to register the answers selected by user
    const [userAnswers, setUsersAnswers] = useState([]);

    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

    // we can't exceed the number of questions we have.
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectedAnswer
    ) {


        //store selected answer
        // return updated state:
        // - spread in all existing user answers
        // - at the end append the selected answer as a new element
        // so we don't lose old state and get the latest state
        setUsersAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    },
        []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (<Summary userAnswers={userAnswers} />
        )
    };



    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}