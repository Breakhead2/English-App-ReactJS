// const TableRow = ({ children }) => {
//   return <div className="tableRow">{children}</div>;
// };

// export default TableRow;
import React from 'react';
import TableCell from './TableCell';

const TableRow = ({ values, tag }) => {
  if (values === null) {
    return (
      <div className="tableRow">
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </div>
    );
  }

  return (
    <div className="tableRow">
      {values.map((item, index) => {
        if (tag.type === 'input') {
          tag.atr = { ...tag.atr, value: item };
        }

        return (
          <TableCell key={index}>
            {React.createElement(
              tag.type,
              tag.atr,
              tag.type !== 'input' ? item : null
            )}
          </TableCell>
        );
      })}
    </div>
  );
};
// React.createElement('input', { placeholder: 'Enter a url', type: 'url', autoFocus: true }, 'default_url');
export default TableRow;
