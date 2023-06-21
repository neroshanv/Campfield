import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import Heading from "./Heading";
import DoubleDice from "./DoubleDice";
import ColorList from "./ColorList";

import Slots from "./Slots";
import "./app.css";


function App() {
  return (
    <div>
      <Heading color="magenta" text="Welcome!" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={["red", "pink", "purple", "teal"]} />
      {/*<Greeter person="Bill" from="Nero" />
      <Greeter person="Ted" from="Nero" />
  <Greeter person="Rosa" from="Nero" />*/}
      {/*<Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />*/}
      <ListPicker values={[1, 2, 3]} />



      <Slots val1="W" val2="W" val3="W" />
      <Slots val1="W" val2="L" val3="W" />
    </div>
  );
}

export default App;
