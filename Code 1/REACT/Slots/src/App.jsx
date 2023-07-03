import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import Heading from "./Heading";
import DoubleDice from "./DoubleDice";

import Slots from "./Slots";
import "./app.css";

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
      {/*<Heading color="magenta" text="Welcome!" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />*/}
      <Slots val1="W" val2="W" val3="W" />
      <Slots val1="W" val2="L" val3="W" />
    </div>
  );
}

export default App;
