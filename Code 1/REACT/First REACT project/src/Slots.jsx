export default function Slots(val1, val2, val3) {
    const isWinner = val1 === val2 && val1 === val3;
    return (
        <div>
            <h1>
                {val1} {val2} {val3}
            </h1>
            <h2>{isWinner ? "you Win!" : "you Lose!"}</h2>
            {/* If winner then h3 activates*/}
            {isWinner && <h3>Congrats</h3>}
        </div>
    );
}