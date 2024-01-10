import { useState, Fragment } from 'react';

import reactImg from './assets/react-core-concepts.png';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data-with-examples.js';
// Do not have access to these files so far //
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';



const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'   - These could be our 4 identifiers that should be received through that paramenter. //
    setSelectedTopic(selectedButton);
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
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* function will automatically receive an array item as an input. This function will be executed by JS for every item in that array */}
            {/* key value is used as unique value that identifies a list item. */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={ } {...conceptItem} />)}
            {/* function above is doing exactly what's below */}
            {/*
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}></TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}></TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}></TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}></TabButton>
          </menu>
          {/* if we don't have a selected topic, render this paragraph here otherwise render nothing */}
          {!selectedTopic ? (<p>Please select a topic.</p>) : (
            <div id='tab-content'>

              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )}

          {/* or we render this paragraph */}


        </section>
      </main>
    </div>
  );
}


return (
  <>
    <Header />
    <main>

    </main>
  </>
);


export default App;
