import "./Box.css";
import { useState } from "react";
function Box(isActive, toggle) {
    return <div
        onClick={toggle}
        class="Box"
        style={{ backgroundColor: isActive ? "red" : "black" }}></div>
}

export default Box;