export interface WarehouseStat {
  label: string;
  value: string;
  suffix?: string;
  trend: string;
}

export interface InventoryItem {
  label: string;
  percent: number;
  value: string;
}

export interface PackageItem {
  id: string;
  date: string;
  status: string;
  statusClass: string;
}

export interface StorageRow {
  floor: string;
  section: string;
  category: string;
  used: number;
  available: string;
}

export interface FloorData {
  occupancy: string;
  bays: string[];
  full: number[];
}

export interface ActivityItem {
  name: string;
  text: string;
  time: string;
  icon: string;
  color: string;
}

export interface WarehouseData {
  stats: WarehouseStat[];
  inventory: InventoryItem[];
  packages: PackageItem[];
  storage: StorageRow[];
  floors: Record<string, FloorData>;
  activity: ActivityItem[];
}

export const warehouseData: WarehouseData = {
  stats: [
    { label: 'Total SKU', value: '285', trend: '+2.58%' },
    { label: 'Quantity on Hand', value: '12,450', suffix: 'units', trend: '+4.37%' },
    { label: 'Capacity Usage', value: '62.5%', suffix: 'Full', trend: '+1.54%' },
  ],
  inventory: [
    { label: 'Electronics', percent: 25, value: '2,500' },
    { label: 'Apparel', percent: 20, value: '2,000' },
    { label: 'Home & Kitchen', percent: 18, value: '1,800' },
    { label: 'Beauty & Health', percent: 15, value: '1,500' },
    { label: 'Automotive Parts', percent: 12, value: '1,200' },
    { label: 'Sports Equipment', percent: 10, value: '1,000' },
  ],
  packages: [
    { id: 'PKG-HK77420', date: 'March 20, 2035 — 05:30 PM', status: 'Sent', statusClass: 'brand' },
    { id: 'PKG-A50812', date: 'March 21, 2035 — 01:45 PM', status: 'Received', statusClass: 'green' },
    { id: 'PKG-E10293', date: 'March 22, 2035 — 09:00 AM', status: 'Expected', statusClass: 'gray' },
  ],
  storage: [
    { floor: '1', section: 'A1 – A10', category: 'Electronics', used: 80, available: '20/100' },
    { floor: '2', section: 'B1 – B10', category: 'Apparel', used: 60, available: '40/100' },
    { floor: '1', section: 'C1 – C10', category: 'Home & Kitchen', used: 90, available: '10/100' },
    { floor: '3', section: 'D1 – D10', category: 'Automotive Parts', used: 50, available: '50/100' },
    { floor: '2', section: 'E1 – E10', category: 'Beauty & Health', used: 70, available: '30/100' },
  ],
  floors: {
    '1': { occupancy: '20/100', bays: ['A1', 'A2', 'A3', 'A4', 'A5'], full: [0, 1, 3] },
    '2': { occupancy: '65/100', bays: ['B1', 'B2', 'B3', 'B4', 'B5'], full: [1] },
    '3': { occupancy: '85/100', bays: ['C1', 'C2', 'C3', 'C4', 'C5'], full: [] },
  },
  activity: [
    { name: 'Leo Fernandez', text: 'confirmed receipt of 40 units of Winter Jacket Series in Section B3 (Apparel)', time: '01:45 PM', icon: '✓', color: 'dark' },
    { name: 'Ava Martinez', text: 'added 25 units of Smart Router Kit to Section A1 (Electronics)', time: '09:15 AM', icon: '▣', color: 'brand' },
    { name: 'Oscar Liem', text: 'dispatched 18 units of Stainless Steel Cookware from Section C5 (Home & Kitchen)', time: '05:30 PM', icon: '◫', color: 'dark' },
    { name: 'Dina Choi', text: 'created a shipment entry for Brake Pad Sets in Section D2 (Automotive Parts)', time: '04:10 PM', icon: '◌', color: 'brand' },
  ],
};
