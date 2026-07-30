import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { label: 'Jan', value: 1400 },
  { label: 'Feb', value: 1900 },
  { label: 'Mar', value: 1700 },
  { label: 'Apr', value: 2200 },
  { label: 'May', value: 3124 },
  { label: 'Jun', value: 2500 },
  { label: 'Jul', value: 3100 },
  { label: 'Aug', value: 3600 },
];

export default function ShipmentStatisticCard() {
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
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 14,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>
          Shipment Statistic
        </h2>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            height: 32,
            padding: '0 14px',
            borderRadius: 999,
            background: '#F1F5F9',
            color: '#475569',
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: 14 }}>📅</span>
          Last Year <span style={{ fontSize: 10, marginLeft: 2 }}>▼</span>
        </span>
      </div>

      {/* Metric Summary */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginBottom: 16,
        }}
      >
        <span style={{ fontSize: 28, fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>
          4,352
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 3,
            padding: '2px 10px',
            borderRadius: 999,
            background: '#D9F9E7',
            color: '#007837',
            fontSize: 12,
            fontWeight: 800,
          }}
        >
          ▲ +8.7%
        </span>
      </div>

      {/* Bar Chart Area */}
      <div style={{ position: 'relative', height: 200, minHeight: 200 }}>
        {/* SVG grid lines - BEFORE chart so bars render on top */}
        <svg
          width="100%"
          height="100%"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          viewBox="0 0 500 200"
          preserveAspectRatio="none"
        >
          {[0, 1000, 2000, 3000, 4000].map((val, i) => (
            <line
              key={i}
              x1="0"
              y1={`${(val / 4000) * 85 + 10}%`}
              x2="100%"
              y2={`${(val / 4000) * 85 + 10}%`}
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          ))}
        </svg>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{ top: 4, right: 8, left: 0, bottom: 0 }}
          >
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: '#94A3B8', fontWeight: 600 }}
              axisLine={{ stroke: '#E2E8F0', strokeWidth: 1 }}
              tickLine={false}
              dy={4}
            />
            <YAxis
              tick={{ fontSize: 10, fill: '#94A3B8', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              dx={-4}
              tickFormatter={(val: number) => `${val / 1000}.0K`}
              ticks={[0, 1000, 2000, 3000, 4000]}
              domain={[0, 4000]}
            />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: '1px solid #E0E0E0', fontSize: 12 }}
              formatter={(value: any) => [value.toLocaleString(), 'Shipments']}
            />
            <Bar
              dataKey="value"
              fill="#6366F1"
              radius={[4, 4, 0, 0]}
              maxBarSize={36}
              name="Shipments"
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Floating callout tooltip over May */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '46%',
            transform: 'translateX(-50%)',
            background: '#1E293B',
            color: 'white',
            borderRadius: 8,
            padding: '8px 14px',
            textAlign: 'center',
            zIndex: 5,
            boxShadow: '0 4px 14px rgba(0,0,0,.15)',
          }}
        >
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>
            May 2030
          </div>
          <div style={{ fontSize: 15, fontWeight: 800, marginTop: 1 }}>
            3,124
          </div>
        </div>
      </div>
    </article>
  );
}
