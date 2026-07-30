interface Column<T> {
  key: string;
  label: string;
  sortable?: boolean;
  render: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowKey: (item: T) => string;
  selected?: Set<string>;
  onSelect?: (id: string, checked: boolean) => void;
  onSelectAll?: (checked: boolean) => void;
  sortField?: string;
  sortDir?: 'asc' | 'desc';
  onSort?: (field: string) => void;
  emptyMessage?: string;
}

export default function DataTable<T>({
  columns, data, rowKey, selected, onSelect, onSelectAll,
  sortField, sortDir, onSort, emptyMessage,
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🔍</div>
        <h3>{emptyMessage || 'No data found'}</h3>
        <p>Try adjusting your search or filter.</p>
      </div>
    );
  }

  return (
    <table className="table">
      <thead>
        <tr>
          {selected !== undefined && (
            <th style={{ width: 48 }}>
              <input
                className="checkbox"
                type="checkbox"
                checked={data.length > 0 && data.every((item) => selected.has(rowKey(item)))}
                onChange={(e) => onSelectAll?.(e.target.checked)}
              />
            </th>
          )}
          {columns.map((col) => (
            <th
              key={col.key}
              onClick={() => col.sortable && onSort?.(col.key)}
              style={{ cursor: col.sortable ? 'pointer' : 'default' }}
            >
              {col.label}
              {col.sortable && sortField === col.key && (
                <span style={{ marginLeft: 4 }}>{sortDir === 'asc' ? '▲' : '▼'}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const id = rowKey(item);
          return (
            <tr key={id} className={selected?.has(id) ? 'selected' : ''}>
              {selected !== undefined && (
                <td data-label="Select">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={selected.has(id)}
                    onChange={(e) => onSelect?.(id, e.target.checked)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td key={col.key} data-label={col.label}>{col.render(item)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
