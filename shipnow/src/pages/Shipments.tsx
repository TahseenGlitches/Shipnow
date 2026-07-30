import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import MetricCard from '../components/MetricCard';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';
import { shipmentsData, type Shipment } from '../data/shipments';

export default function Shipments() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view') === 'grid' ? 'grid' : 'table';

  const [status, setStatus] = useState('all');
  const [search, setSearch] = useState('');
  const [sortField, setSortField] = useState('id');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return shipmentsData
      .filter((item) => {
        const matchesStatus = status === 'all' || item.status === status;
        const matchesSearch = [item.id, item.company, item.carrier, item.route, item.category, item.type]
          .some((v) => v.toLowerCase().includes(query));
        return matchesStatus && matchesSearch;
      })
      .sort((a, b) => {
        const dir = sortDir === 'asc' ? 1 : -1;
        const left = a[sortField as keyof Shipment] as string | number;
        const right = b[sortField as keyof Shipment] as string | number;
        if (typeof left === 'number' && typeof right === 'number') return (left - right) * dir;
        return String(left).localeCompare(String(right)) * dir;
      });
  }, [status, search, sortField, sortDir]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);
  const safePage = Math.min(page, totalPages);

  const statusTabs = ['all', 'Completed', 'Delivery', 'Pending'];

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const toggleView = (v: 'table' | 'grid') => {
    setSearchParams({ view: v });
  };

  return (
    <Layout title="Shipments">
      <header className="page-header">
        <div>
          <h1 className="page-title">Shipments</h1>
          <div className="breadcrumb">
            <a href="/dashboard">Dashboard</a> / <span className="current">Shipments</span>
          </div>
        </div>
        <div className="page-actions">
          <span className="view-switcher">
            <button className={view === 'table' ? 'active' : ''} onClick={() => toggleView('table')} title="Table View" aria-label="Table View">⊞</button>
            <button className={view === 'grid' ? 'active' : ''} onClick={() => toggleView('grid')} title="Grid View" aria-label="Grid View">⊟</button>
          </span>
          <button className="btn btn-dark" type="button" onClick={() => navigate('/create-shipment')}>+ New Shipment</button>
        </div>
      </header>

      <section className="metrics">
        <MetricCard label="Total Shipments" value="1,284" trend="+4.6%" direction="up" note="this week" icon="▣" />
        <MetricCard label="Pending" value="285" trend="+8.7%" direction="up" note="this week" icon="◔" />
        <MetricCard label="Delivery" value="594" trend="-4.2%" direction="down" note="from last week" icon="▣" />
        <MetricCard label="Completed" value="405" trend="+3.9%" direction="up" note="this week" icon="✓" />
      </section>

      <section className="card card-pad">
        <div className="toolbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <div className="tabs">
              {statusTabs.map((s) => (
                <button
                  key={s}
                  className={`tab ${status === s ? 'active' : ''}`}
                  onClick={() => { setStatus(s); setPage(1); }}
                >
                  {s === 'all' ? 'All' : s}
                </button>
              ))}
            </div>
            <input
              className="search-input"
              type="search"
              placeholder="Search id, company, etc"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <select
              className="select-input"
              value={`${sortField}:${sortDir}`}
              onChange={(e) => {
                const [f, d] = e.target.value.split(':');
                setSortField(f);
                setSortDir(d as 'asc' | 'desc');
              }}
            >
              <option value="id:asc">Sort by: ID</option>
              <option value="company:asc">Sort by: Company</option>
              <option value="progress:desc">Sort by: Progress</option>
              <option value="date:desc">Sort by: Date</option>
            </select>
            <select className="select-input"><option>This Month</option><option>Last Month</option></select>
          </div>
        </div>
      </section>

      {view === 'table' ? (
        <section className="card table-shell card-pad" style={{ display: 'block' }}>
          <div className="card-header">
            <div><h2 className="card-title">Shipment Table</h2><div className="card-kicker"><span>{selected.size} selected</span></div></div>
            <div className="ghost-row"><span className="pill gray">Select rows</span></div>
          </div>
          <div className="table-wrap" style={{ marginTop: 14 }}>
            <DataTable
              columns={[
                { key: 'id', label: 'Shipping ID', sortable: true, render: (r: Shipment) => <><strong style={{ color: 'var(--brand)' }}>{r.id}</strong><div className="small-muted">{r.type}</div></> },
                { key: 'company', label: 'Company', sortable: true, render: (r: Shipment) => <>{r.company}<div className="small-muted">{r.category}</div></> },
                { key: 'carrier', label: 'Carriers', render: (r: Shipment) => r.carrier },
                { key: 'route', label: 'Route', render: (r: Shipment) => r.route },
                { key: 'date', label: 'Date', sortable: true, render: (r: Shipment) => r.date },
                { key: 'progress', label: 'Progress', sortable: true, render: (r: Shipment) => <><div className="progress"><span style={{ width: `${r.progress}%` }} /></div><div className="small-muted" style={{ marginTop: 6 }}>{r.progress}%</div></> },
                { key: 'status', label: 'Status', render: (r: Shipment) => <span className={`status-pill ${r.statusClass}`}>{r.status}</span> },
              ]}
              data={pageData}
              rowKey={(r) => r.id}
              selected={selected}
              onSelect={(id, checked) => {
                setSelected((prev) => {
                  const next = new Set(prev);
                  checked ? next.add(id) : next.delete(id);
                  return next;
                });
              }}
              onSelectAll={(checked) => {
                setSelected((prev) => {
                  const next = new Set(prev);
                  pageData.forEach((r) => checked ? next.add(r.id) : next.delete(r.id));
                  return next;
                });
              }}
              sortField={sortField}
              sortDir={sortDir}
              onSort={handleSort}
              emptyMessage="No shipments found"
            />
          </div>
          <Pagination
            page={safePage}
            totalPages={totalPages}
            onPageChange={setPage}
            pageSize={pageSize}
            onPageSizeChange={(s) => { setPageSize(s); setPage(1); }}
          />
        </section>
      ) : (
        <section className="card card-pad" style={{ display: 'block' }}>
          <div className="card-header">
            <div><h2 className="card-title">Shipment Grid</h2><div className="card-kicker">Same data, card presentation</div></div>
            <div className="ghost-row"><span className="pill gray">Responsive cards</span></div>
          </div>
          <div className="card-grid" style={{ marginTop: 14 }}>
            {pageData.length === 0 ? (
              <div className="empty-state" style={{ gridColumn: '1/-1' }}>
                <div className="empty-icon">🔍</div>
                <h3>No shipments found</h3>
                <p>Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            ) : (
              pageData.map((row) => (
                <article key={row.id} className="card shipment-card">
                  <div className="shipment-card-head">
                    <div>
                      <div className="shipment-id">{row.id}</div>
                      <div className="small-muted">{row.type}</div>
                    </div>
                    <span className={`status-pill ${row.statusClass}`} style={{ fontSize: 10 }}>{row.status}</span>
                  </div>
                  <div className="route-box" style={{ background: '#F8FAFC', borderRadius: 12, padding: '10px 12px' }}>
                    <div className="route-line"><span>📍 Origin</span><strong style={{ fontSize: 13 }}>{row.route.split(' → ')[0]}</strong></div>
                    <div className="route-line"><span className="small-muted">{row.date.split(' — ')[0]} · {row.date.split(' — ')[1]}</span></div>
                    <div style={{ height: 1, background: 'var(--border)' }} />
                    <div className="route-line"><span>📍 Destination</span><strong style={{ fontSize: 13 }}>{row.route.split(' → ')[1]}</strong></div>
                    <div className="route-line"><span className="small-muted">ETA {row.date}</span></div>
                  </div>
                  <div className="company-row">
                    <div className="company-logo">{row.company.charAt(0)}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{row.company}</div>
                      <div className="small-muted">{row.category}</div>
                    </div>
                  </div>
                  <div>
                    <div className="route-line" style={{ marginBottom: 6 }}><span>Progress</span><strong>{row.progress}%</strong></div>
                    <div className="progress"><span style={{ width: `${row.progress}%`, height: 8 }} /></div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: 12, color: 'var(--muted)', borderTop: '1px solid var(--border)', paddingTop: 8 }}>
                    Carriers: <strong style={{ color: 'var(--text)' }}>{row.carrier}</strong>
                  </div>
                </article>
              ))
            )}
          </div>
          <Pagination
            page={safePage}
            totalPages={totalPages}
            onPageChange={setPage}
            pageSize={pageSize}
            onPageSizeChange={(s) => { setPageSize(s); setPage(1); }}
          />
        </section>
      )}
    </Layout>
  );
}
