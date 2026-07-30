export interface Metric {
  label: string;
  value: string;
  note: string;
  trend: string;
  direction: 'up' | 'down';
  icon: string;
}

export interface TimelinePoint {
  label: string;
  value: number;
}

export interface ProfitPoint {
  label: string;
  revenue: number;
  cost: number;
}

export interface ShipmentType {
  label: string;
  count: number;
  share: number;
  color: string;
}

export interface AlertItem {
  title: string;
  meta: string;
  icon: string;
}

export interface ActivityEntry {
  name: string;
  text: string;
  time: string;
  icon: string;
  color?: string;
}

export interface Milestone {
  label: string;
  time: string;
  completed: boolean;
}

export interface TrackingData {
  origin: string;
  destination: string;
  currentLocation: string;
  progress: number;
  estimatedArrival: string;
  carrier: string;
  status: string;
  statusClass: string;
  shipmentId: string;
  lastUpdate: string;
  milestones: Milestone[];
}

export interface DashboardData {
  metrics: Metric[];
  shipmentTimeline: TimelinePoint[];
  profitTimeline: ProfitPoint[];
  shipmentTypes: ShipmentType[];
  recentShipments: any[];
  alerts: AlertItem[];
  activity: ActivityEntry[];
  tracking: TrackingData;
}

export const dashboardData: DashboardData = {
  metrics: [
    { label: 'Active Shipments', value: '1,284', note: 'shipments', trend: '+8.7%', direction: 'up', icon: '📦' },
    { label: 'Delivery Performance', value: '94.3%', note: 'on-time', trend: '-1.2%', direction: 'down', icon: '🛡' },
    { label: 'Revenue', value: '$82,450', note: 'total revenue', trend: '+12.4%', direction: 'up', icon: '💰' },
  ],
  shipmentTimeline: [
    { label: 'Jan', value: 14 }, { label: 'Feb', value: 19 }, { label: 'Mar', value: 17 },
    { label: 'Apr', value: 22 }, { label: 'May', value: 28 }, { label: 'Jun', value: 25 },
    { label: 'Jul', value: 31 }, { label: 'Aug', value: 36 },
  ],
  profitTimeline: [
    { label: 'Jan', revenue: 32, cost: 18 }, { label: 'Feb', revenue: 28, cost: 16 },
    { label: 'Mar', revenue: 38, cost: 21 }, { label: 'Apr', revenue: 31, cost: 18 },
    { label: 'May', revenue: 42, cost: 23 }, { label: 'Jun', revenue: 36, cost: 19 },
    { label: 'Jul', revenue: 47, cost: 25 }, { label: 'Aug', revenue: 44, cost: 24 },
  ],
  shipmentTypes: [
    { label: 'Road Freight', count: 1150, share: 46, color: 'brand' },
    { label: 'Ocean Freight', count: 425, share: 17, color: 'gray' },
    { label: 'Air Freight', count: 700, share: 28, color: 'dark' },
    { label: 'Rail Freight', count: 225, share: 9, color: 'yellow' },
  ],
  recentShipments: [
    { id: '#SH9283746', company: 'TechGear Inc.', carrier: 'FedEx', route: 'Los Angeles, CA → Chicago, IL', date: 'Mar 20, 2035', status: 'In Transit', statusClass: 'brand', amount: '4,250.80' },
    { id: '#SH9182635', company: 'StyleHub Co.', carrier: 'DHL', route: 'New York, NY → Atlanta, GA', date: 'Mar 19, 2035', status: 'Out for Delivery', statusClass: 'brand', amount: '3,120.00' },
    { id: '#SH9037821', company: 'FreshNest', carrier: 'UPS', route: 'Dallas, TX → Miami, FL', date: 'Mar 18, 2035', status: 'Delivered', statusClass: 'green', amount: '5,680.50' },
    { id: '#SH9374652', company: 'FitPlus Gear', carrier: 'USPS', route: 'Seattle, WA → Denver, CO', date: 'Mar 21, 2035', status: 'Processing', statusClass: 'yellow', amount: '2,190.00' },
    { id: '#SH9457830', company: 'AutoParts Pro', carrier: 'Aramex', route: 'Detroit, MI → San Diego, CA', date: 'Mar 20, 2035', status: 'In Transit', statusClass: 'gray', amount: '4,780.25' },
  ],
  alerts: [
    { title: 'Customs Clearance Delay', meta: '#SH8743921 • Ocean Freight • Mar 20', icon: '✎' },
    { title: 'Incorrect Address Provided', meta: '#SH8725810 • Road Freight • Mar 20', icon: '!' },
    { title: 'Weather-Related Hold', meta: '#SH8790043 • Air Freight • Mar 19', icon: '☁' },
    { title: 'Incorrect Address Provided', meta: '#SH8716654 • Rail Freight • Mar 18', icon: '!' },
  ],
  activity: [
    { name: 'User @TechGuru99', text: 'submitted a bulk shipment request', time: '12:00 PM', icon: '◌' },
    { name: 'Customer Support @SupportKen', text: 'added a priority tag to Order ID 77889JKL', time: '11:30 AM', icon: '⟡' },
    { name: 'User @SallyMae88', text: 'initiated a return process for Order ID 44556GHI', time: '11:00 AM', icon: 'C' },
    { name: 'Administrator @AdminLisa', text: 'resolved a delivery issue for Order ID 12345XYZ', time: '10:15 AM', icon: '◔' },
    { name: 'User @Mickey92', text: 'updated the shipping address for Order ID 67890ABC', time: '09:45 AM', icon: 'C' },
  ],
  tracking: {
    origin: 'Los Angeles, CA',
    destination: 'Chicago, IL',
    currentLocation: 'Kansas City, MO',
    progress: 68,
    estimatedArrival: 'Mar 24, 2035 — 02:00 PM',
    carrier: 'FedEx',
    status: 'In Transit',
    statusClass: 'brand',
    shipmentId: '#SH9283746',
    lastUpdate: '2 hours ago',
    milestones: [
      { label: 'Picked Up', time: 'Mar 20, 08:30 AM', completed: true },
      { label: 'In Transit', time: 'Mar 21, 10:15 AM', completed: true },
      { label: 'Arrived at Hub', time: 'Mar 22, 06:45 PM', completed: true },
      { label: 'Out for Delivery', time: 'Estimated Mar 24', completed: false },
      { label: 'Delivered', time: 'Estimated Mar 24', completed: false },
    ],
  },
};
