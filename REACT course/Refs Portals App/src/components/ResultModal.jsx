import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    const dialog = useRef();

    // set to true, if ramaining time is smaller or equal than 0
    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    // Meaning: define properties and methods that should be accessible on this component from outside this component    
    useImperativeHandle(ref, () => {
        return {
            open() {
                //dialog.current.showModel();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" open>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2> Your Score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
});

export default ResultModal;