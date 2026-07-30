interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange, pageSize, onPageSizeChange }: PaginationProps) {
  const startPage = Math.max(1, page - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  return (
    <div className="pagination" style={{ marginTop: 16 }}>
      <div className="pagination-left">
        <span className="small-muted">Show </span>
        <select
          className="select-input"
          style={{ width: 'auto', minWidth: 72, height: 32, padding: '0 10px' }}
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          <option value={8}>8</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
        </select>
        <span className="small-muted">results</span>
      </div>
      <div className="pagination-right">
        <div className="small-muted">Page {page} of {totalPages}</div>
        <div className="page-nav">
          <button className="page-btn icon" onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page <= 1}>‹</button>
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((p) => (
            <button key={p} className={`page-btn ${p === page ? 'active' : ''}`} onClick={() => onPageChange(p)}>{p}</button>
          ))}
          <button className="page-btn icon" onClick={() => onPageChange(Math.min(totalPages, page + 1))} disabled={page >= totalPages}>›</button>
        </div>
      </div>
    </div>
  );
}
