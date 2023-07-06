import { useState } from "react";
function SignupFormForm() {
    // there's no username yet that's why usestate is empty
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const updatefirstName = (evt) => {
        // whatever the user typed into that form, the piece of state called username with
        // that new value that causes a rerender because the state changes.
        // when that happens new value={username} is rerendered
        setFirstName(evt.target.value);
        const updateLastName = (evt) => {
            setLastName(evt.target.value);
        };
    }
    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            {/*whenever the useState("") is updated , value={username} updates as well*/}
            <input
                type="text"
                placeholder="first name"
                value={firstName}
                onChange={updateFirstName}
                id="firstname"
            />
            <label htmlFor="lastname">First Name</label>
            {/*whenever the useState("") is updated , value={username} updates as well*/}
            <input
                type="text"
                placeholder="last name"
                value={lastName}
                onChange={lastName}
                id="lastname"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SignupForm;