import Heading from './components/Heading';
import Form from './components/Form/Form';
import VerbsContext from './context/VerbsContext';
import verb from './data/verb';
import './App.css';

function App() {
  return (
    <VerbsContext.Provider value={{ ...verb }}>
      <div className="App">
        <Heading />
        <Form />
      </div>
    </VerbsContext.Provider>
  );
}

export default App;
