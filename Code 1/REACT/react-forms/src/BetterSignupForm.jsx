import { useState } from "react";
function BetterSignupFormForm() {
    // there's no username yet that's why usestate is empty
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
    });
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.name;
        // return copy of the object that contains all the existing data
        // take whatever that changed
        // and set it to the new value
        setFormData((currData) => {
            return {
                ...currData,
                [changedField]: newvalue,
            };
        });
    };
    const handleSubmit = () {

    }
}
return (
    <div>
        <label htmlFor="firstname">First Name</label>
        {/*whenever the useState("") is updated , value={username} updates as well*/}
        <input
            type="text"
            placeholder="first name"
            value={formData.firstName}
            onChange={handleChange}
            id="firstname"
            name="firstName"
        />
        <label htmlFor="lastname">First Name</label>
        {/*whenever the useState("") is updated , value={username} updates as well*/}
        <input
            type="text"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleChange}
            id="lastname"
            name="lastName"
        />
        <label htmlFor="password">Password</label>
        {/*whenever the useState("") is updated , value={username} updates as well*/}
        <input
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            name="password"
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
);


export default BetterSignupForm;