import React from "react";

const Table = ({ columns, rows, format }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => 
            <th key={col.name}>{col.name}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) =>
          <tr key={rowIdx}>
            {columns.map((col, colIdx) => 
              <td key={colIdx}>{format(col.property, row[col.property])}</td>
            )}
          </tr>
        )}
      </tbody>
  </table>
  )
}

export default Table