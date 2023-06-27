import { useState } from "react";
import "./ColorBox.css";


function randomChoice(arr) {
    {/* random color to change too */ }
    {/* pick a random index from color */ }
    const idx = Math.floor(Math.random() * arr.length)
    {/* return a random element from that array*/ }
    return arr[idx];
}
function ColorBox({ colors }) {
    {/* setColor is the function}*/ }
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    };
    return (
        <div
            className="ColorBox"
            onClick={changeColor}
            style={{ backgroundColor: color }}>
        </div>
    );
}

export default ColorBox;