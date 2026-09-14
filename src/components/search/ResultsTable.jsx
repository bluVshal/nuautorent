import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './search.css';

// Turn a camelCase field key into a readable header, e.g.
// "bookingPickUpDate" -> "Booking Pick Up Date".
const humanize = (key) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (c) => c.toUpperCase())
    .trim();

// Format a cell value for display. `type` (from the column config) forces a
// format; otherwise booleans are still rendered as Yes/No.
const formatCell = (value, type) => {
  if (value === null || value === undefined || value === '') {
    return '';
  }
  if (type === 'boolean' || typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
  if (type === 'date') {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toLocaleDateString();
  }
  return value;
};

/**
 * Renders search results in a table below the search criteria.
 *
 * - `value`   the slice's result array (a rejected thunk stores an error
 *             string instead, which we treat as "no rows").
 * - `status`  the slice status ('idle' | 'loading' | 'succeeded' | 'failed').
 * - `columns` optional [{ field, header }]; auto-derived from the data if omitted.
 * - `exclude` optional field keys to hide when auto-deriving columns.
 */
const ResultsTable = ({ value, status, columns, exclude = [], emptyMessage = 'No records found' }) => {
  // Nothing searched yet — don't show an empty table.
  if (status === 'idle') {
    return null;
  }

  const data = Array.isArray(value) ? value : [];

  const cols =
    columns && columns.length
      ? columns
      : data[0]
        ? Object.keys(data[0])
            .filter((key) => !exclude.includes(key))
            .map((key) => ({ field: key, header: humanize(key) }))
        : [];

  return (
    <div className="results-container">
      <DataTable
        value={data}
        loading={status === 'loading'}
        emptyMessage={emptyMessage}
        size="small"
        stripedRows
      >
        {cols.map((c) => (
          <Column
            key={c.field}
            field={c.field}
            header={c.header}
            body={(row) => formatCell(row[c.field], c.type)}
            sortable
          />
        ))}
      </DataTable>
    </div>
  );
};

export default ResultsTable;
