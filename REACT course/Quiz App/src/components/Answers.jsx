import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
    // useRef - managing values that are stored and managed independently from the component function lifecycle to which they belong.
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        // sort will not return a new array.
        // instead edit the array.
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (

        <ul id="answers">
            {shuffledAnswers.current.map(answer => {
                const isSelected = selectedAnswer === answer;
                let cssClasses = '';

                if (answerState === 'answered' && isSelected) {
                    cssClasses = 'selected'

                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClass = answerState;
                    };
                }

                return (
                    <li key={answer} className="answer">
                        <button onClick={() => onSelect(answer)}
                            className={cssClasses}
                            disabled={answerState !== ''}>{answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}