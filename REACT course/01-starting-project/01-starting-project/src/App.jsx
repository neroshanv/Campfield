import reactImg from './assets/react-core-concepts.png';
// Do not have access to these files so far //
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'   - These could be our 4 identifiers that should be recieved through that paramenter. //
    console
  }

  const description = reactDescriptions[genRandomInt(2)];
  return (
    <div>
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
