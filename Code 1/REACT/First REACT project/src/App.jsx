import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import Heading from "./Heading";
import DoubleDice from "./DoubleDice";
import ColorList from "./ColorList";
import Colorbox from "./ColorBox";

import Slots from "./Slots";
import "./app.css";
import Property from "./Property";
import ColorBox from "./ColorBox";
import ColorBoxGrid from "./ColorBoxGrid";

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];


function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
      {/*<Heading color="magenta" text="Welcome!" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />*/}

      {/*<ColorList colors={["red", "pink", "purple", "teal"]} />*/}
      {/*<Greeter person="Bill" from="Nero" />*/}
      {/*<Greeter person="Ted" from="Nero" />*/}
      {/*<Greeter person="Rosa" from="Nero" />*/}
      {/*<Die numSides={20} />
      <Die numSides={6} />
      <Die numSides={10} />*/}
      {/*<ListPicker values={[1, 2, 3]} />*/}

      {/*<Slots val1="W" val2="W" val3="W" />*/}
      {/*<Slots val1="W" val2="L" val3="W" />*/}

      <PropertyList properties={properties} />
    </div>
  );
}

export default App;
