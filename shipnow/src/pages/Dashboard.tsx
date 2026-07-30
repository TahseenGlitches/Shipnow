import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import MetricCard from '../components/MetricCard';
import ShipmentTypeCard from '../components/ShipmentTypeCard';
import LiveTrackingCard from '../components/LiveTrackingCard';
import ShipmentStatisticCard from '../components/ShipmentStatisticCard';
import ProfitSummaryCard from '../components/ProfitSummaryCard';
import { dashboardData } from '../data/dashboard';

export default function Dashboard() {
  const navigate = useNavigate();
  const d = dashboardData;

  useEffect(() => {
    if (sessionStorage.getItem('shipnow-authenticated') !== 'true') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Layout title="Dashboard">
      {/* Welcome Header Bar */}
      <div className="dash-top-bar">
        <div>
          <div className="dash-greeting">Hello John!</div>
          <h1 className="dash-welcome">Good Morning</h1>
        </div>
        <div className="top-bar-actions">
          <div style={{ position: 'relative' }}>
            <input className="search-input" type="search" placeholder="Search anything" style={{ minWidth: 200 }} />
          </div>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <section className="metrics" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {d.metrics.map((m, i) => (
          <MetricCard key={i} {...m} />
        ))}
      </section>

      {/* Shipment Statistic + Profit Summary (paired per spec) */}
      <section className="grid-2">
        <ShipmentStatisticCard />

        <ProfitSummaryCard />
      </section>

      {/* Live Tracking + Shipment Type Card */}
      <section className="grid-2">
        <LiveTrackingCard />
        <ShipmentTypeCard />
      </section>

      {/* Product Categories + Shipment Alerts */}
      <section className="grid-2">
        <article className="card card-pad" style={{ minHeight: 280 }}>
          <div className="card-header">
            <h2 className="card-title">Product Categories</h2>
            <span className="pill dark">⋯</span>
          </div>
          <div style={{ marginTop: 14 }}>
            <div className="category-header">
              <span>Total Products</span>
              <strong className="metric-value" style={{ fontSize: 22 }}>1,000</strong>
            </div>
            <div style={{ display: 'flex', height: 26, borderRadius: 999, overflow: 'hidden', marginTop: 12, gap: 3 }}>
              <div style={{ flex: 24, background: '#856DF3' }} title="Electronics 24%" />
              <div style={{ flex: 20, background: '#333333' }} title="Home & Kitchen 20%" />
              <div style={{ flex: 18, background: '#C1B3FF' }} title="Apparel 18%" />
              <div style={{ flex: 14, background: '#CFCFCF' }} title="Beauty & Health 14%" />
              <div style={{ flex: 12, background: '#9D9FA1' }} title="Sports & Outdoors 12%" />
              <div style={{ flex: 12, background: '#757575' }} title="Automotive 12%" />
            </div>
            <div className="section-stack" style={{ marginTop: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 4, background: '#856DF3', display: 'inline-block' }} />
                  Electronics
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ fontSize: 13, color: 'var(--muted)' }}>240 products</span>
                  <span className="pill gray">24%</span>
                </div>
              </div>
              {[
                { name: 'Home & Kitchen', color: '#333333', count: '200', pct: '20%' },
                { name: 'Apparel', color: '#C1B3FF', count: '180', pct: '18%' },
                { name: 'Beauty & Health', color: '#CFCFCF', count: '140', pct: '14%' },
                { name: 'Sports & Outdoors', color: '#9D9FA1', count: '120', pct: '12%' },
                { name: 'Automotive', color: '#757575', count: '120', pct: '12%' },
              ].map((cat, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 4, background: cat.color, display: 'inline-block' }} />
                    {cat.name}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{ fontSize: 13, color: 'var(--muted)' }}>{cat.count} products</span>
                    <span className="pill gray">{cat.pct}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="card card-pad" style={{ minHeight: 280 }}>
          <div className="card-header"><h2 className="card-title">Shipment Alerts</h2><span className="pill yellow">12 delays</span></div>
          <div className="alerts-list" style={{ marginTop: 14 }}>
            <div className="alert-row"><div className="alert-indicator warning" /><div className="alert-body"><strong>Delays: 12 shipments</strong><small>Multiple routes affected</small></div></div>
            <div className="alert-row"><div className="alert-indicator warning" /><div className="alert-body"><strong>Customs Clearance Delay: 5 shipments</strong><small>#SH8743921 · Ocean Freight · Mar 20</small></div></div>
            <div className="alert-row"><div className="alert-indicator warning" /><div className="alert-body"><strong>#SH8725810</strong><small>Road Freight · Incorrect Address</small></div></div>
            <div className="alert-row"><div className="alert-indicator warning" /><div className="alert-body"><strong>#SH8790043</strong><small>Air Freight · Weather Hold</small></div></div>
          </div>
        </article>
      </section>

      {/* Recent Shipments + Recent Activity */}
      <section className="grid-2">
        <div className="section-stack">
          <article className="card card-pad">
            <div className="card-header">
              <h2 className="card-title">Recent Shipments</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input className="search-input" type="search" placeholder="Search shipment" style={{ minWidth: 140 }} />
                <span className="pill gray">🔍</span>
                <span className="pill gray">☰</span>
              </div>
            </div>
            <div className="table-wrap" style={{ marginTop: 14 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Shipment ID</th><th>Item</th><th>Route</th><th>Date</th><th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {d.recentShipments.slice(0, 4).map((row) => (
                    <tr key={row.id}>
                      <td data-label="ID"><strong style={{ color: 'var(--brand)' }}>{row.id}</strong></td>
                      <td data-label="Item">{row.company}<div className="small-muted">{row.route.split(' → ')[0]}</div></td>
                      <td data-label="Route">{row.route}</td>
                      <td data-label="Date">{row.date}</td>
                      <td data-label="Status"><span className={`status-pill ${row.statusClass}`}>{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="card card-pad">
            <div className="card-header"><h2 className="card-title">Recent Activity</h2><span className="pill gray">Live feed</span></div>
            <div className="activity-timeline" style={{ marginTop: 14 }}>
              {d.activity.map((entry, i) => (
                <div key={i} className="activity-node">
                  <div className="activity-line-connector">
                    <div className={`activity-icon ${entry.color === 'brand' ? 'brand' : 'dark'}`}>
                      {entry.icon}
                    </div>
                    {i < d.activity.length - 1 && <div className="activity-line" />}
                  </div>
                  <div className="activity-content">
                    <p><strong>{entry.name}</strong> {entry.text}</p>
                    <small>{entry.time}</small>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}
