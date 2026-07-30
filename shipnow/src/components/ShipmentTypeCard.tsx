import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ShipmentTypeEntry {
  label: string;
  count: number;
  pct: number;
  color: string;
  badgeColor: string;
}

const shipmentData: ShipmentTypeEntry[] = [
  { label: 'Road Freight', count: 1150, pct: 45, color: '#6366F1', badgeColor: '#6366F1' },
  { label: 'Ocean Freight', count: 425, pct: 17, color: '#94A3B8', badgeColor: '#64748B' },
  { label: 'Air Freight', count: 700, pct: 28, color: '#312E81', badgeColor: '#312E81' },
  { label: 'Rail Freight', count: 225, pct: 10, color: '#CBD5E1', badgeColor: '#475569' },
];

export default function ShipmentTypeCard() {
  const chartData = shipmentData.map((d) => ({ name: d.label, value: d.pct, fill: d.color }));

  return (
    <article
      className="card"
      style={{
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        minHeight: 280,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 18,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>
          Shipment Type
        </h2>
        <button
          type="button"
          aria-label="Options"
          style={{
            border: 0, background: 'transparent', fontSize: 20,
            color: '#94A3B8', cursor: 'pointer', lineHeight: 1,
            padding: '0 4px', letterSpacing: 2,
          }}
        >
          ⋮
        </button>
      </div>

      {/* Donut Chart */}
      <div
        style={{
          width: 180,
          height: 180,
          position: 'relative',
          margin: '0 auto 18px',
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={62}
              outerRadius={84}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              strokeWidth={0}
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Center label overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                color: '#64748B',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 2,
              }}
            >
              Total Shipment
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: '#1E293B',
                lineHeight: 1.05,
              }}
            >
              2,500
            </div>
          </div>
        </div>
      </div>

      {/* Legend Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0 20px',
        }}
      >
        {shipmentData.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
            }}
          >
            {/* Color square */}
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 3,
                background: item.color,
                flex: '0 0 auto',
              }}
            />
            {/* Label + count */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1E293B' }}>
                {item.label}
              </div>
              <div style={{ fontSize: 11, color: '#64748B', marginTop: 1 }}>
                {item.count.toLocaleString()} shipment
              </div>
            </div>
            {/* Percentage pill */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 999,
                padding: '2px 10px',
                fontSize: 12,
                fontWeight: 800,
                background: `${item.color}18`,
                color: item.badgeColor,
                whiteSpace: 'nowrap',
              }}
            >
              {item.pct}%
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
