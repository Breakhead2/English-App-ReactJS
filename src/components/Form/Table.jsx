import TableCell from './TableCell';
import TableRow from './TableRow';

const Table = () => {
  return (
    <div className="table">
      <TableRow>
        <TableCell className="tableCell">
          <span className="tableHeading">Infinitive</span>
        </TableCell>
        <TableCell className="tableCell">
          <span className="tableHeading">Past Simple</span>
        </TableCell>
        <TableCell className="tableCell rightCell">
          <span className="tableHeading">Past Participle</span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="tableCell">
          <input className="myInput" type="text" placeholder="verb" />
        </TableCell>
        <TableCell className="tableCell">
          <input
            className="myInput"
            type="text"
            placeholder="verb"
            value="was/were"
          />
        </TableCell>
        <TableCell className="tableCell rightCell">
          <input className="myInput" type="text" placeholder="verb" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell className="tableCell bottomCell"></TableCell>
        <TableCell className="tableCell bottomCell"> </TableCell>
        <TableCell className="tableCell bottomCell rightCell"></TableCell>
      </TableRow>
    </div>
  );
};

export default Table;
