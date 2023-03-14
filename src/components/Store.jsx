import { useState } from 'react';
import Verb from './Verb';

const Store = () => {
  const [verbs, setVerbs] = useState([
    'do',
    'did',
    'done',
    'dude',
    "didn't",
    'dumb',
  ]);

  return (
    <div className="store">
      {verbs.map((verb) => (
        <Verb text={verb} />
      ))}
    </div>
  );
};

export default Store;
