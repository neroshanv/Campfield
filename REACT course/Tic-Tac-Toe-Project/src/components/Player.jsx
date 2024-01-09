import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, SetIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="Player-name">{name}</span>;
    let btnCaption = "Edit";

    if (isEditing) {
        playerName = <input type="text" required value={playerName} onChange={handleChange} />;
        // btnCaption = "Save";
    }

    return (

        // checking if isActive is true (conditionally)
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            {/*                                 we check if we are editing, the button should say "save" otherwise we say "edit" */}
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>

        </li>
    );
}