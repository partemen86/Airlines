import React, { useState } from "react";

const Table = ({ columns, rows, format, perPage, className }) => {
  const [page, setPage] = useState(0)
  const total = rows.length
  const start = page * perPage
  const end = start + perPage > total ? total : start + perPage

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  return (
    <div>
      <table className={className}>
        <thead>
          <tr>
            {columns.map(col => 
              <th key={col.name}>{col.name}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.slice(start, end).map((row, rowIdx) =>
            <tr key={rowIdx}>
              {columns.map((col, colIdx) => 
                <td key={colIdx}>{format(col.property, row[col.property])}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <p>Showing {start + 1} - {end} of {total} results</p>
        <p>
          <button
            onClick={previousPage}
            disabled={start < perPage}
          >
            Previos Page
          </button>
          <button
            onClick={nextPage}
            disabled={end >= total}
          >
            Next Page
          </button>
        </p>
      </div>
    </div>
  )
}

export default Table