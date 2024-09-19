import Header from './components/Header';
import TabButtons from './components/TabButtons';
import { CORE_CONCEPTS } from './data.js'
import CoreConcepts from "./components/CoreConcepts";
import { useState } from 'react';
import {EXAMPLES} from "./data.js";

function App() {
    const [ selectedValue, setSelectedValue ] = useState('');

    function handleClick(value) {
        setSelectedValue( value );
    }
  return (
    <div>
    <Header />
        <main>
            <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                    {CORE_CONCEPTS.map((items) => <CoreConcepts key={items.title} {...items} />)}
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButtons isSelected={selectedValue === 'components'} onSelect = {() => handleClick('components')}>Components</TabButtons>
                    <TabButtons isSelected={selectedValue === 'jsx'} onSelect = {() =>handleClick('jsx')}>JSX</TabButtons>
                    <TabButtons isSelected={selectedValue === 'props'} onSelect = {() =>handleClick('props')}>Props</TabButtons>
                    <TabButtons isSelected={selectedValue === 'state'} onSelect = {() =>handleClick('state')}>State</TabButtons>
                </menu>
                {!selectedValue ? <p>Please select a topic</p> :
                    <section id='tab-content'>
                        <h3>{EXAMPLES[selectedValue].title}</h3>
                        <p>{EXAMPLES[selectedValue].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedValue].code}
                            </code>
                        </pre>
                    </section>
                }
            </section>
        </main>
    </div>
  );
}

export default App;
