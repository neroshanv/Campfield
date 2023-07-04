import { useState } from "react";
import Box from "./Box";

function BoxGrid() {
    const [boxes, setBoxes] = useState([false, false, false, false, false, false, false, false, false]);
    const reset = () => {
        setBoxes([false, false, false, false, false, false, false, false, false]);
    };

    // everytime you click on the box, the colors change 

    // pass in some ID
    // we're going to call set boxes and use the updater syntax
    // to get the old boxes map over the old boxes, make a copy of them where we keep the original value for
    // most of them, except for the one with the index of whatever was passed in,
    // of course we pass that all to set boxes, 
    // which changes the state, 
    // triggers a rerender
    // and then would pass down a new value here to each box or to whichever box changed.
    const toggleBox = (idx) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, i) => {
                if (i === idx) {
                    return !value;
                } else {
                    return value;
                }
            });
        });
    };
};
return (
    <div className="BoxGrid">
        {/*idx represents how many box you clicked?*/}
        {boxes.map(b => <Box key={idx} isActive={b} toggle={() => toggleBox(idx)} />)}
        <button onClick={reset}>Reset</button>
    </div>
);


export default BoxGrid;