import { useState, useRef } from 'react';

import ResultModal from './ResultModal.jsx';

export default function TimeChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);


    const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // timer expired because we did not stop it in time.
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open()
    };

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    // player lost because the timer expired before it was stopped by the player. 
    function handleStart() {
        // setInterval executes this function everytime 10 seconds expire
        timer.current = setInterval(() => {
            // this state updates every 10 miliseconds with the updated time remaining
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }


    return (
        <>
            {/*{timerExpired && ( */}
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            {/*})}*/}
            <section class="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined} >
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section >
        </>
    );
}