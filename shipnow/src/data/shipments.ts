export interface Shipment {
  id: string;
  type: string;
  company: string;
  category: string;
  carrier: string;
  route: string;
  date: string;
  progress: number;
  status: string;
  statusClass: string;
}

export const shipmentsData: Shipment[] = [
  { id: '#SH9283746', type: 'Air Freight', company: 'TechGear Inc.', category: 'Electronics', carrier: 'FedEx', route: 'Minneapolis, MN → Kansas City, MO', date: 'Mar 20, 2035 — 10:00 AM', progress: 60, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH9182635', type: 'Road Freight', company: 'StyleHub Co.', category: 'Apparel', carrier: 'DHL', route: 'New York, NY → Atlanta, GA', date: 'Mar 19, 2035 — 11:30 AM', progress: 75, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH9037821', type: 'Ocean Freight', company: 'FreshNest', category: 'Kitchen Appliances', carrier: 'UPS', route: 'Dallas, TX → Miami, FL', date: 'Mar 18, 2035 — 09:00 AM', progress: 100, status: 'Completed', statusClass: 'green' },
  { id: '#SH9374652', type: 'Rail Freight', company: 'FitPlus Gear', category: 'Fitness Equipment', carrier: 'USPS', route: 'Seattle, WA → Denver, CO', date: 'Mar 21, 2035 — 08:45 AM', progress: 40, status: 'Pending', statusClass: 'yellow' },
  { id: '#SH9457830', type: 'Road Freight', company: 'AutoParts Pro', category: 'Engine Components', carrier: 'Aramex', route: 'Detroit, MI → San Diego, CA', date: 'Mar 20, 2035 — 07:15 AM', progress: 50, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH8821349', type: 'Air Freight', company: 'EcoLights', category: 'Electronics', carrier: 'FedEx', route: 'Austin, TX → Phoenix, AZ', date: 'Mar 19, 2035 — 12:00 PM', progress: 90, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH8967432', type: 'Road Freight', company: 'GreenHaven', category: 'Home Tools', carrier: 'USPS', route: 'Portland, OR → Salt Lake City, UT', date: 'Mar 18, 2035 — 02:45 PM', progress: 65, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH8893247', type: 'Road Freight', company: 'ModaWear', category: 'Apparel', carrier: 'DHL', route: 'Boston, MA → Charlotte, NC', date: 'Mar 20, 2035 — 01:00 PM', progress: 80, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH9018723', type: 'Rail Freight', company: 'SunCore Panels', category: 'Solar Equipment', carrier: 'UPS', route: 'San Diego, CA → Reno, NV', date: 'Mar 21, 2035 — 09:30 AM', progress: 30, status: 'Pending', statusClass: 'yellow' },
  { id: '#SH8881190', type: 'Road Freight', company: 'VitaFresh', category: 'Perishables', carrier: 'Local Courier', route: 'Nashville, TN → Jacksonville, FL', date: 'Mar 21, 2035 — 06:00 AM', progress: 85, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH8776103', type: 'Air Freight', company: 'StyleDepot', category: 'Fashion Items', carrier: 'FedEx', route: 'Minneapolis, MN → Kansas City, MO', date: 'Mar 19, 2035 — 10:15 AM', progress: 60, status: 'Completed', statusClass: 'green' },
  { id: '#SH8645088', type: 'Road Freight', company: 'NorthStar Labs', category: 'Healthcare', carrier: 'UPS', route: 'Seattle, WA → Dallas, TX', date: 'Mar 22, 2035 — 04:00 PM', progress: 25, status: 'Pending', statusClass: 'yellow' },
  { id: '#SH8532001', type: 'Ocean Freight', company: 'Portline', category: 'Industrial', carrier: 'Aramex', route: 'San Francisco, CA → New York, NY', date: 'Mar 22, 2035 — 02:20 PM', progress: 55, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH8427202', type: 'Rail Freight', company: 'AeroLink', category: 'Aviation Parts', carrier: 'DHL', route: 'Denver, CO → Chicago, IL', date: 'Mar 22, 2035 — 01:10 PM', progress: 70, status: 'Delivery', statusClass: 'brand' },
  { id: '#SH8315604', type: 'Air Freight', company: 'NovaCore', category: 'Technology', carrier: 'FedEx', route: 'Austin, TX → Los Angeles, CA', date: 'Mar 23, 2035 — 11:40 AM', progress: 95, status: 'Completed', statusClass: 'green' },
];
