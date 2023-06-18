import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";


function App() {
  return (
    <div>
      {/*<Greeter person="Bill" from="Nero" />
      <Greeter person="Ted" from="Nero" />
  <Greeter person="Rosa" from="Nero" />*/}
      {/*<Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />*/}
      <ListPicker values={[1, 2, 3]} />
    </div>
  );
}

export default App
