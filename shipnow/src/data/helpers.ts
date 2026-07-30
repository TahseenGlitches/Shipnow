export function money(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export interface InvoiceItem {
  description: string;
  type: string;
  subType: string;
  price: number;
  qty: number;
}

export interface Invoice {
  id: string;
  company: string;
  shippingId: string;
  status: string;
  statusClass: string;
  issueDate: string;
  dueDate: string;
  sender: { company: string; email: string; address: string };
  receiver: { company: string; email: string; address: string };
  items: InvoiceItem[];
  note: string;
}

export interface InvoiceSummary {
  subtotal: number;
  tax: number;
  fee: number;
  total: number;
}

export function sumInvoice(invoice: Invoice): InvoiceSummary {
  const subtotal = invoice.items.reduce((total, item) => total + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const fee = 10;
  return { subtotal, tax, fee, total: subtotal + tax + fee };
}

export function shipmentStatusClass(status: string): string {
  if (status === 'Completed' || status === 'Delivered') return 'green';
  if (status === 'Pending') return 'yellow';
  return 'brand';
}
