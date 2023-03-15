import VerbsContext from '../../context/VerbsContext';
import { useContext } from 'react';
import TableRow from './TableRow';

const Table = () => {
  const verbs = useContext(VerbsContext);

  return (
    <div className="table">
      <TableRow
        values={['Infinitive', 'Past Simple', 'Past Participle']}
        tag={{
          type: 'span',
          atr: null,
        }}
      />
      <TableRow
        values={['be', 'was, were', 'been']}
        tag={{
          type: 'input',
          atr: {
            type: 'text',
            placeholder: 'verb',
          },
        }}
      />
      <TableRow values={null} />
    </div>
  );
};

export default Table;
