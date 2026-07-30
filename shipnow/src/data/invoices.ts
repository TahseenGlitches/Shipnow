import type { Invoice } from './helpers';

export const invoicesData: Invoice[] = [
  {
    id: 'INV-1001', company: 'TechGear Inc.', shippingId: '#SH9283746', status: 'Paid', statusClass: 'green', issueDate: 'Mar 15, 2035', dueDate: 'Mar 22, 2035',
    sender: { company: 'TechGear Inc.', email: 'billing@techgear.com', address: '78 King Street, San Francisco, CA 94105, USA' },
    receiver: { company: 'ShipNow Logistics', email: 'accounts@shipnow.com', address: '901 Distribution Ave, Charlotte, NC 28217, USA' },
    items: [{ description: 'Industrial Router Pack', type: 'Road Freight', subType: 'Express', price: 450, qty: 2 }],
    note: 'Please process payment by the due date to avoid delivery disruption.',
  },
  {
    id: 'INV-1002', company: 'StyleHub Co.', shippingId: '#SH9182635', status: 'Unpaid', statusClass: 'brand', issueDate: 'Mar 16, 2035', dueDate: 'Mar 23, 2035',
    sender: { company: 'StyleHub Co.', email: 'accounting@stylehub.io', address: '12 Hudson St, New York, NY 10013, USA' },
    receiver: { company: 'ShipNow Logistics', email: 'accounts@shipnow.com', address: '901 Distribution Ave, Charlotte, NC 28217, USA' },
    items: [{ description: 'Designer Apparel Crates', type: 'Road Freight', subType: 'Standard', price: 980, qty: 1 }],
    note: 'Late fees may apply after 3 business days past due.',
  },
  {
    id: 'INV-1008', company: 'ModaWear', shippingId: '#SH8893247', status: 'Unpaid', statusClass: 'brand', issueDate: 'Mar 16, 2035', dueDate: 'Mar 23, 2035',
    sender: { company: 'ModaWear', email: 'billing@modawear.com', address: '89 Franklin St, Boston, MA 02110, USA' },
    receiver: { company: 'ShipNow Logistics', email: 'accounts@shipnow.com', address: '901 Distribution Ave, Charlotte, NC 28217, USA' },
    items: [
      { description: 'Lightweight Hoodie Pack', type: 'Road Freight', subType: 'Express', price: 120, qty: 3 },
      { description: 'Autumn Jacket Set', type: 'Road Freight', subType: 'Standard', price: 180, qty: 2 },
      { description: 'Lightweight Hoodie Pack', type: 'Road Freight', subType: 'Express', price: 95, qty: 2 },
    ],
    note: 'Please process payment by the due date to avoid delivery disruption. Late fees may apply after 3 business days past due.',
  },
  {
    id: 'INV-1009', company: 'SunCore Panels', shippingId: '#SH9018723', status: 'Unpaid', statusClass: 'brand', issueDate: 'Mar 17, 2035', dueDate: 'Mar 24, 2035',
    sender: { company: 'SunCore Panels', email: 'billing@suncore.com', address: '400 Solar Way, San Diego, CA 92101, USA' },
    receiver: { company: 'ShipNow Logistics', email: 'accounts@shipnow.com', address: '901 Distribution Ave, Charlotte, NC 28217, USA' },
    items: [{ description: 'Solar Panel Module', type: 'Rail Freight', subType: 'Standard', price: 320, qty: 5 }],
    note: 'Delivery and documentation charges included.',
  },
  {
    id: 'INV-1010', company: 'VitaFresh', shippingId: '#SH8881190', status: 'Overdue', statusClass: 'gray', issueDate: 'Mar 15, 2035', dueDate: 'Mar 22, 2035',
    sender: { company: 'VitaFresh', email: 'invoices@vitafresh.com', address: '55 Market Road, Nashville, TN 37203, USA' },
    receiver: { company: 'ShipNow Logistics', email: 'accounts@shipnow.com', address: '901 Distribution Ave, Charlotte, NC 28217, USA' },
    items: [
      { description: 'Cold Chain Package', type: 'Road Freight', subType: 'Standard', price: 280, qty: 3 },
      { description: 'Reefer Handling Fee', type: 'Road Freight', subType: 'Express', price: 140, qty: 1 },
    ],
    note: 'Late fees may apply after 3 business days past due.',
  },
];
