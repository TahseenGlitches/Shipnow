import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import WarehouseInventoryCard from '../components/WarehouseInventoryCard';
import CapacityUsageCard from '../components/CapacityUsageCard';
import { warehouseData } from '../data/warehouse';

export default function Warehouse() {
  const w = warehouseData;

  // Package status filter tabs
  const statusFilters = ['All', 'Expected', 'Received', 'Sent'];

  const storageData = [
    { floor: '1', sector: 'A1 – A10', category: 'Electronics', used: 80, available: '20/100' },
    { floor: '2', sector: 'B1 – B10', category: 'Apparel', used: 60, available: '40/100' },
    { floor: '1', sector: 'C1 – C10', category: 'Home & Kitchen', used: 90, available: '10/100' },
    { floor: '3', sector: 'D1 – D10', category: 'Automotive Parts', used: 50, available: '50/100' },
    { floor: '2', sector: 'E1 – E10', category: 'Beauty & Health', used: 70, available: '30/100' },
  ];

  return (
    <Layout title="Warehouse">
      <header className="page-header">
        <div>
          <h1 className="page-title">Warehouse</h1>
          <div className="breadcrumb"><Link to="/dashboard">Dashboard</Link> / <span className="current">Warehouse</span></div>
        </div>
        <div className="ghost-row">
          <span className="pill dark">Road Freight</span>
          <span className="pill gray">Rail Freight</span>
          <span className="pill gray">Ocean Freight</span>
          <span className="pill gray">Air Freight</span>
        </div>
      </header>

      {/* 3 Metric Cards */}
      <section className="metrics" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {w.stats.map((stat, i) => (
          <article key={i} className="card metric">
            <div>
              <div className="metric-label">{stat.label}</div>
              <div className="metric-value">{stat.value}{stat.suffix ? <span className="small-muted"> {stat.suffix}</span> : ''}</div>
              <div className="metric-footer"><span className="trend up">{stat.trend}</span></div>
            </div>
            <div className="icon-box">{['▣', '◫', '◔'][i]}</div>
          </article>
        ))}
      </section>

      {/* Warehouse Inventory Card */}
      <WarehouseInventoryCard />

      {/* Middle Row: Capacity Usage + Package Status */}
      <section className="grid-2">
        <CapacityUsageCard />

        {/* Package Status */}
        <article className="card card-pad">
          <div className="card-header">
            <h2 className="card-title">Package Status</h2>
            <span className="pill gray">⋯</span>
          </div>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
            {statusFilters.map((s) => (
              <span key={s} className={`pill ${s === 'All' ? 'dark' : 'gray'}`} style={{ cursor: 'pointer', padding: '6px 14px', fontSize: 12 }}>
                {s}
              </span>
            ))}
          </div>
          {/* Package feed */}
          <div className="section-stack" style={{ marginTop: 14 }}>
            {w.packages.map((pkg, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < w.packages.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{pkg.id}</div>
                  <div className="small-muted" style={{ marginTop: 2 }}>{pkg.date}</div>
                </div>
                <span className={`status-pill ${pkg.statusClass}`}>{pkg.status}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Warehouse Storage Table */}
      <article className="card card-pad">
        <div className="card-header">
          <h2 className="card-title">Warehouse Storage</h2>
          <div className="ghost-row">
            <span className="pill gray">Filter ▼</span>
            <span className="pill gray">Sort by ▼</span>
            <span className="pill gray">Section ▼</span>
          </div>
        </div>
        <div className="table-wrap" style={{ marginTop: 14 }}>
          <table className="table">
            <thead>
              <tr>
                <th>Floor</th><th>Sector</th><th>Category</th><th>Storage Used</th><th>Percentage</th><th>Available Space</th>
              </tr>
            </thead>
            <tbody>
              {storageData.map((row, i) => (
                <tr key={i}>
                  <td data-label="Floor">{row.floor}</td>
                  <td data-label="Sector"><strong>{row.sector}</strong></td>
                  <td data-label="Category">{row.category}</td>
                  <td data-label="Storage Used">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="progress" style={{ width: 100, height: 8 }}>
                        <span style={{
                          width: `${row.used}%`,
                          background: row.used >= 80 ? 'var(--danger)' : row.used >= 60 ? 'var(--warning)' : 'var(--success)',
                        }} />
                      </div>
                    </div>
                  </td>
                  <td data-label="Percentage"><strong className={row.used >= 80 ? 'pill yellow' : 'pill gray'}>{row.used}%</strong></td>
                  <td data-label="Available Space" style={{ color: row.used >= 80 ? 'var(--danger)' : 'var(--success)', fontWeight: 700 }}>
                    {row.available}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

      {/* Warehouse Map */}
      <article className="card warehouse-map">
        <div className="warehouse-map-header">
          <h2 className="card-title">Warehouse Map</h2>
          <span className="floor-pill">Floor 1</span>
        </div>
        <div className="map-zone-grid">
          <div className="zone-card">
            <div className="zone-title">Electronics</div>
            <div className="zone-bins">
              {['A1', 'A2', 'A3'].map((b) => (<div key={b} className="bin">{b}</div>))}
            </div>
            <div className="zone-status">Available Space 20/100</div>
          </div>
          <div className="zone-card">
            <div className="zone-title">Home & Kitchen</div>
            <div className="zone-bins">
              {['C1', 'C2', 'C3'].map((b) => (<div key={b} className="bin">{b}</div>))}
            </div>
            <div className="zone-status">Available Space 10/100</div>
          </div>
          <div className="zone-card">
            <div className="zone-title">Automotive Parts</div>
            <div className="zone-bins">
              {['D1', 'D2', 'D3'].map((b) => (<div key={b} className="bin">{b}</div>))}
            </div>
            <div className="zone-status">Available Space 50/100</div>
          </div>
          <div className="zone-card zone-card-wide">
            <div className="zone-title">Apparel</div>
            <div className="zone-bins zone-bins-wide">
              {['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10'].map((b) => (<div key={b} className="bin">{b}</div>))}
            </div>
            <div className="zone-status">Available Space 20/100</div>
          </div>
          <div className="zone-card">
            <div className="zone-title">Beauty & Health</div>
            <div className="zone-bins">
              {['E1', 'E2'].map((b) => (<div key={b} className="bin">{b}</div>))}
            </div>
            <div className="zone-status">Available Space 30/100</div>
          </div>
        </div>
      </article>

      {/* Warehouse Activity Log */}
      <article className="card card-pad">
        <div className="card-header">
          <h2 className="card-title">Warehouse Activity Log</h2>
          <span className="pill gray">Recent</span>
        </div>
        <div className="timeline" style={{ marginTop: 14 }}>
          {w.activity.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className={`timeline-icon ${item.color === 'brand' ? 'brand' : 'dark'}`}>{item.icon}</div>
              <div className="timeline-body">
                <p><strong>{item.name}</strong> {item.text}</p>
                <small>{item.time}</small>
              </div>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  );
}
