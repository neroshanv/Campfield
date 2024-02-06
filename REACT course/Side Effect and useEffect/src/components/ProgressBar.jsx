import { useState } from "react";

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemainingTime] = useState(timer);

    // updating state every 10 milliseconds
    // REACT has to compare the unconfirmed value to figure out whither the 2nd useEffect function should run again.
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return <progress value={remainingTime} max={timer} />
}