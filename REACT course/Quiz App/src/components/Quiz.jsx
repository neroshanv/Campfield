//GOAL : show currently active question to user.
// when the question was answered by user
// i want to switch to a different question.

import { useState } from "react";
import QUESTIONS from '../questions.js';
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {

    // 1st state is when i want to register the answers selected by user
    const [userAnswers, setUsersAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    // we can't exceed the number of questions we have.
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        //store selected answer
        // return updated state:
        // - spread in all existing user answers
        // - at the end append the selected answer as a new element
        // so we don't lose old state and get the latest state
        setUsersAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed</h2>
        </div>
    };

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    // sort will not return a new array.
    // instead edit the array.
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    timeout={10000}
                    onTimeout={() => handleSelectAnswer(null)}
                />
                <p >{QUESTIONS[activeQuestionIndex].text}</p>;
                <ul id="answers">
                    {shuffledAnswers.map(answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}