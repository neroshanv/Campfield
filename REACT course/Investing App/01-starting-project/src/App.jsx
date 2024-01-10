import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  // if this condition is not met, inputIsValid will be false.
  const inputIsValid = userInput.duration >= 1;

  // function that should trigger whenever we change the value in these output fields "Initial Investment, Annual Investment, Expected return, Duration"
  // Goal: one generic function that can be connected to all inputs

  // for updating state where we get the previous userinput
  // and where we then return our updated state object into this new object so that we copy all the old values into this new object
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...preUserInput,
        // adding a + will force a conversion of this string to number value
        [inputIdentifier]: +newValue,
      };
    });
  }



  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
