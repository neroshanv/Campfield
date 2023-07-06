import { useState } from "react";
function UsernameForm() {
    // there's no username yet that's why usestate is empty
    const [username, setUsername] = useState("")
    const updateUsername = (evt) => {
        // whatever the user typed into that form, the piece of state called username with
        // that new value that causes a rerender because the state changes.
        // when that happens new value={username} is rerendered
        setUsername(evt.target.value);
    }
    return (
        <div>
            <label htmlFor="username">Enter a username</label>
            {/*whenever the useState("") is updated , value={username} updates as well*/}
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={updateUsername}
                id="username"
            />
            <button>Submit</button>
        </div>
    )
}

export default UsernameForm;