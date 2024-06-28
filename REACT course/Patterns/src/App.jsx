import Accordion from "./components/Accordion";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
        <Accordion.Item
          id="experience"
          className="accordion-item"
          title="We got 20 years of experience"
        >
          <article>
            <p> we are doing this along from our office</p>
            <p> Instead, we are working with local guides</p>
          </article>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>;
}

export default App;
