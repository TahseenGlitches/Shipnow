import { useLocation, Link } from 'react-router-dom';

const primaryNav = [
  { key: 'dashboard', label: 'Dashboard', icon: '⌂', path: '/dashboard' },
  { key: 'analytics', label: 'Analytics', icon: '◫', path: '/placeholder?screen=Analytics' },
  { key: 'shipments', label: 'Shipments', icon: '▣', path: '/shipments' },
  { key: 'tracking', label: 'Tracking', icon: '◌', path: '/placeholder?screen=Tracking' },
  { key: 'fleets', label: 'Fleets', icon: '▥', path: '/placeholder?screen=Fleets' },
  { key: 'drivers', label: 'Drivers', icon: '◔', path: '/placeholder?screen=Drivers' },
  { key: 'calendar', label: 'Calendar', icon: '◷', path: '/placeholder?screen=Calendar' },
  { key: 'invoices', label: 'Invoices & Billing', icon: '▤', path: '/invoices' },
  { key: 'warehouse', label: 'Warehouse', icon: '▥', path: '/warehouse' },
];

const secondaryNav = [
  { key: 'support', label: 'Help & Support', icon: '?', path: '/placeholder?screen=Support' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path.startsWith('/placeholder')) return false;
    return location.pathname === path;
  };

  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? 'visible' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">SHIPNOW</span>
        </div>
        <div className="user-card">
          <div className="user-meta">
            <div className="avatar" aria-hidden="true" />
            <div>
              <div className="user-name">John Doe</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
          <button className="chevron" type="button" aria-label="Collapse profile">⌄</button>
        </div>
        <nav className="nav">
          {primaryNav.map((item) => (
            <Link
              key={item.key}
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              to={item.path}
              onClick={() => window.innerWidth <= 375 && onClose()}
            >
              <span className="nav-item-main">
                <span className="nav-dot">{item.icon}</span>
                <span>{item.label}</span>
              </span>
            </Link>
          ))}
        </nav>
        <div className="nav-divider" />
        <nav className="nav">
          <Link to="/placeholder?screen=Messages" className="nav-item">
            <span className="nav-item-main">
              <span className="nav-dot">✉</span>
              <span>Messages</span>
            </span>
          </Link>
          <Link to="/placeholder?screen=Notifications" className="nav-item">
            <span className="nav-item-main">
              <span className="nav-dot">🔔</span>
              <span>Notifications</span>
            </span>
          </Link>
          <Link to="/placeholder?screen=Settings" className="nav-item">
            <span className="nav-item-main">
              <span className="nav-dot">⚙</span>
              <span>Settings</span>
            </span>
          </Link>
        </nav>
        <div className="nav-divider" />
        <nav className="nav secondary-nav">
          {secondaryNav.map((item) => (
            <Link
              key={item.key}
              className={`nav-item`}
              to={item.path}
              onClick={() => window.innerWidth <= 375 && onClose()}
            >
              <span className="nav-item-main">
                <span className="nav-dot">{item.icon}</span>
                <span>{item.label}</span>
              </span>
            </Link>
          ))}
        </nav>
        <div className="promo-card">
          <div className="promo-title">Loving ShipNow Free?</div>
          <div className="promo-copy">Go Pro to access priority support, real-time tracking, and full analytics.</div>
          <div style={{ marginTop: 12 }}><button className="btn btn-light" type="button">Go Pro Today</button></div>
        </div>
      </aside>
    </>
  );
}
