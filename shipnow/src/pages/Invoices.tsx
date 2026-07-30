import { useState } from 'react';
import Layout from '../components/Layout';
import { invoicesData } from '../data/invoices';
import { money, sumInvoice } from '../data/helpers';

export default function Invoices() {
  const [activeId, setActiveId] = useState(invoicesData[0].id);
  const active = invoicesData.find((inv) => inv.id === activeId) || invoicesData[0];
  const sums = sumInvoice(active);

  return (
    <Layout title="Invoices & Billing">
      <header className="page-header">
        <div>
          <h1 className="page-title">Invoices & Billing</h1>
          <div className="breadcrumb"><a href="/dashboard">Dashboard</a> / <span className="current">Invoices & Billing</span></div>
        </div>
        <div className="page-actions">
          <input className="search-input" type="search" placeholder="Search invoices" />
          <button className="btn btn-light" type="button">Export</button>
          <button className="btn btn-brand" type="button">+ New Invoice</button>
        </div>
      </header>

      <section className="metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        <article className="card metric"><div><div className="metric-label">Paid Invoices</div><div className="metric-value">$28,890</div><div className="metric-footer">from 350 invoices</div></div><div className="icon-box">✓</div></article>
        <article className="card metric"><div><div className="metric-label">Unpaid Invoices</div><div className="metric-value">$16,700</div><div className="metric-footer">from 120 invoices</div></div><div className="icon-box">⌧</div></article>
        <article className="card metric"><div><div className="metric-label">Pending Invoices</div><div className="metric-value">$8,050</div><div className="metric-footer">from 80 invoices</div></div><div className="icon-box">◌</div></article>
        <article className="card metric"><div><div className="metric-label">Overdue Invoices</div><div className="metric-value">$22,110</div><div className="metric-footer">from 245 invoices</div></div><div className="icon-box">◷</div></article>
      </section>

      <section className="invoice-layout">
        <article className="card invoice-panel" style={{ padding: 18 }}>
          <div className="card-header">
            <h2 className="card-title">Invoices</h2>
            <div className="ghost-row"><input className="search-input" style={{ minWidth: 180 }} type="search" placeholder="Search invoices" /></div>
          </div>
          <div className="table-wrap" style={{ marginTop: 14 }}>
            <table className="table invoice-list">
              <thead>
                <tr><th>Invoice ID</th><th>Company</th><th>Shipping ID</th><th>Date</th><th>Amount</th><th>Status</th></tr>
              </thead>
              <tbody>
                {invoicesData.map((inv) => {
                  const s = sumInvoice(inv);
                  return (
                    <tr
                      key={inv.id}
                      className={inv.id === activeId ? 'active' : ''}
                      onClick={() => setActiveId(inv.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <td data-label="Invoice ID"><strong style={{ color: 'var(--brand)' }}>{inv.id}</strong></td>
                      <td data-label="Company">{inv.company}</td>
                      <td data-label="Shipping ID">{inv.shippingId}</td>
                      <td data-label="Date"><div className="small-muted">{inv.issueDate} (Issued)</div><div className="small-muted">{inv.dueDate} (Due)</div></td>
                      <td data-label="Amount"><strong>{money(s.total)}</strong></td>
                      <td data-label="Status"><span className={`status-pill ${inv.statusClass}`}>{inv.status}</span></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>

        <article className="card invoice-detail" style={{ padding: 18 }}>
          <div className="card-header">
            <h2 className="card-title">Invoice Details</h2>
            <div className="ghost-row">
              <button className="btn btn-light" type="button">Edit</button>
              <button className="btn btn-light" type="button">Hold</button>
              <button className="btn btn-dark" type="button">Send Invoice</button>
            </div>
          </div>
          <div className="invoice-detail-card" style={{ marginTop: 14 }}>
            <div className="invoice-detail-head">
              <div>
                <h3 style={{ margin: 0, fontSize: 18 }}>Invoice #{active.id}</h3>
                <span className={`pill ${active.statusClass}`} style={{ marginTop: 8, display: 'inline-block' }}>{active.status}</span>
              </div>
              <div className="small-muted" style={{ textAlign: 'right' }}>
                <div>Issue Date: <strong>{active.issueDate}</strong></div>
                <div>Due Date: <strong>{active.dueDate}</strong></div>
              </div>
            </div>
            <div className="invoice-party-grid">
              <div>
                <h4>Bill From</h4>
                <div style={{ fontWeight: 700 }}>{active.sender.company}</div>
                <div className="small-muted">{active.sender.email}</div>
                <div className="small-muted">{active.sender.address}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <h4>Bill To</h4>
                <div style={{ fontWeight: 700 }}>{active.receiver.company}</div>
                <div className="small-muted">{active.receiver.email}</div>
                <div className="small-muted">{active.receiver.address}</div>
              </div>
            </div>
            <div className="invoice-lines" style={{ marginTop: 14 }}>
              <h4 style={{ margin: '0 0 10px' }}>Package Summary</h4>
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr><th>Description</th><th>Shipment Type</th><th>Price</th><th>Qty</th><th style={{ textAlign: 'right' }}>Amount</th></tr>
                  </thead>
                  <tbody>
                    {active.items.map((item, i) => (
                      <tr key={i}>
                        <td>{item.description}</td>
                        <td><div>{item.type}<br /><span className="small-muted">{item.subType}</span></div></td>
                        <td>{money(item.price)}</td>
                        <td>{item.qty}</td>
                        <td style={{ textAlign: 'right', fontWeight: 800 }}>{money(item.price * item.qty)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ maxWidth: 320, marginLeft: 'auto', marginTop: 14 }}>
                <div className="summary-row"><span>Sub Total</span><span>{money(sums.subtotal)}</span></div>
                <div className="summary-row"><span>Tax (8%)</span><span>{money(sums.tax)}</span></div>
                <div className="summary-row"><span>Fee</span><span>{money(sums.fee)}</span></div>
                <div className="summary-row total"><span>Total</span><span>{money(sums.total)}</span></div>
              </div>
              <div className="note-box">
                <strong>Note</strong>
                <div className="small-muted" style={{ marginTop: 4, color: '#665300' }}>{active.note}</div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}
