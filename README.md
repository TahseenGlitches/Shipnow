# ShipNow Assignment

Live demo: https://shipnow-xi.vercel.app/

## Setup

Open `index.html` in a browser or serve the folder with any static file server. The app is self-contained and uses local mock data only.

## Screen Status

- Login: complete
- Dashboard: complete
- Shipments: complete
- Create New Shipment: complete
- Invoices & Billing: complete
- Warehouse: complete
- Analytics: not attempted, placeholder only
- Calendar: not attempted, placeholder only
- Tracking: not attempted, placeholder only
- Fleets: not attempted
- Drivers: not attempted

## Notes

- The app uses local mock data and no backend.
- Shipments uses a single in-page view switcher for table and grid modes.
- Authentication is simulated with sessionStorage.
- Totals in Invoices & Billing are calculated from line items.
- The mobile drawer is implemented for the shared shell.

## Assumptions

- Analytics, Calendar, and Tracking are outside the required scoped screens, so they route to placeholders.
- The provided assets folder only contains the avatar image, so the remaining photos and iconography are recreated with CSS and inline vector shapes.
