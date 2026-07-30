import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { label: 'Jan', revenue: 32, cost: 18 },
  { label: 'Feb', revenue: 28, cost: 16 },
  { label: 'Mar', revenue: 38, cost: 21 },
  { label: 'Apr', revenue: 31, cost: 18 },
  { label: 'May', revenue: 88, cost: 46 },
  { label: 'Jun', revenue: 36, cost: 19 },
  { label: 'Jul', revenue: 47, cost: 25 },
  { label: 'Aug', revenue: 44, cost: 24 },
];

const formatK = (val: number) => `$${val}K`;

const yTicks = [0, 25, 50, 75, 100];

export default function ProfitSummaryCard() {
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
          Profit Summary
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
          Last 8 Months <span style={{ fontSize: 10, marginLeft: 2 }}>▼</span>
        </span>
      </div>

      {/* Metric Summary + Legend */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 14,
        }}
      >
        {/* Metric */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28, fontWeight: 800, color: '#1E293B', lineHeight: 1 }}>
            $624,550
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
            ▲ +5.82%
          </span>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: '#856DF3',
                display: 'inline-block',
              }}
            />
            <span style={{ fontWeight: 600, color: '#475569' }}>Revenue</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 2,
                background: '#333333',
                display: 'inline-block',
              }}
            />
            <span style={{ fontWeight: 600, color: '#475569' }}>Cost</span>
          </div>
        </div>
      </div>

      {/* Bar Chart Area */}
      <div style={{ position: 'relative', height: 200, minHeight: 200 }}>
        {/* SVG grid lines - BEFORE chart so chart renders on top */}
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
          preserveAspectRatio="none"
          viewBox="0 0 500 180"
        >
          {yTicks.map((val) => (
            <line
              key={val}
              x1="0"
              y1={`${100 - (val / 100) * 85}%`}
              x2="100%"
              y2={`${100 - (val / 100) * 85}%`}
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          ))}
        </svg>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{ top: 4, right: 8, left: 4, bottom: 0 }}
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
              tickFormatter={(val: number) => formatK(val)}
              ticks={yTicks}
              domain={[0, 100]}
            />
            <Bar
              dataKey="revenue"
              fill="#856DF3"
              radius={[4, 4, 0, 0]}
              maxBarSize={18}
              name="Revenue"
            />
            <Bar
              dataKey="cost"
              fill="#333333"
              radius={[4, 4, 0, 0]}
              maxBarSize={18}
              name="Cost"
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Floating tooltip over May */}
        <div
          style={{
            position: 'absolute',
            top: '14%',
            right: '40%',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: 8,
            padding: '8px 12px',
            boxShadow: '0 4px 14px rgba(0,0,0,.1)',
            zIndex: 5,
            minWidth: 130,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748B', marginBottom: 6 }}>
            May
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, marginBottom: 3 }}>
            <span style={{ width: 6, height: 6, borderRadius: 1, background: '#856DF3', display: 'inline-block' }} />
            <span style={{ color: '#475569' }}>Revenue</span>
            <span style={{ marginLeft: 'auto', fontWeight: 700, color: '#1E293B' }}>$87,524</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
            <span style={{ width: 6, height: 6, borderRadius: 1, background: '#333333', display: 'inline-block' }} />
            <span style={{ color: '#475569' }}>Cost</span>
            <span style={{ marginLeft: 'auto', fontWeight: 700, color: '#1E293B' }}>$45,680</span>
          </div>
        </div>
      </div>
    </article>
  );
}
