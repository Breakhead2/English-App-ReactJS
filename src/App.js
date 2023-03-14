import Row from './components/Row';
import Heading from './components/Heading';
import Placeholder from './components/Placeholder';
import Store from './components/Store';
import Button from './components/UI/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Training Irregular Verbs</h1>
      <Row>
        <Heading text="Infinitive" />
        <Heading text="Past Simple" />
        <Heading text="Past Participle" />
      </Row>
      <Row>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Row>
      <Store />
      <Button />
    </div>
  );
}

export default App;
