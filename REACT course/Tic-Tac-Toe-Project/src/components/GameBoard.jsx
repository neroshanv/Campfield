



export default function GameBoard({ onSelectSqaure, board }) {


    {/*const [gameBoard, setGameboard] = useState(initialGameBoard);

    // Goal : function that can be triggered when button is pressed 
    // we update which null and col from previous state
    function handleSelectSquare(rowIndex, colIndex,) {
        // setGameboard will update based on the previous state.
        setGameboard((prevGameBoard) => {
            // paste all of the existing elements of the old array as child elements
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = "X";
            return updatedBoard;
        });

        // call this function from inside handleSelectSquare because this function is triggers if a square was selected by clicking this button.

        onSelectSqaure();
    }
*/}

    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            {/* every button can only be clicked once*/}
                            {/* if playerSymbol is not equal to null then we know it's either an X or an O */}
                            <button onClick={() => onSelectSqaure(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
    );
};