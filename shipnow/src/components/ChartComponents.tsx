import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

const brandColor = '#856DF3';
const brandLight = '#C1B3FF';
const darkColor = '#333333';
const grayColor = '#CFCFCF';

export function ShipmentBarChart({ data }: { data: { label: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#757575' }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip
          contentStyle={{ borderRadius: 8, border: '1px solid #E0E0E0', fontSize: 12 }}
          formatter={(value: any) => [value, 'Shipments']}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]} fill={brandColor} maxBarSize={32} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ProfitBarChart({ data }: { data: { label: string; revenue: number; cost: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#757575' }} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip
          contentStyle={{ borderRadius: 8, border: '1px solid #E0E0E0', fontSize: 12 }}
        />
        <Bar dataKey="revenue" radius={[4, 4, 0, 0]} fill={darkColor} maxBarSize={20} name="Revenue" />
        <Bar dataKey="cost" radius={[4, 4, 0, 0]} fill={brandLight} maxBarSize={20} name="Cost" />
      </BarChart>
    </ResponsiveContainer>
  );
}

interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
  centerLabel: string;
  centerValue: string;
  size?: number;
}

const colorMap: Record<string, string> = {
  brand: brandColor,
  dark: darkColor,
  gray: grayColor,
  yellow: '#FEF1A7',
};

export function DonutChart({ data, centerLabel, centerValue, size = 180 }: DonutChartProps) {
  const chartData = data.map((d) => ({ name: d.label, value: d.value, fill: colorMap[d.color] || brandColor }));
  const otherValue = Math.max(0, 100 - data.reduce((s, d) => s + d.value, 0));
  if (otherValue > 0) chartData.push({ name: 'Other', value: otherValue, fill: '#E0E0E0' });

  return (
    <div style={{ width: size, height: size, position: 'relative', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.36}
            outerRadius={size * 0.46}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            label={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div
        style={{
          position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
          textAlign: 'center', pointerEvents: 'none',
        }}
      >
        <div>
          <div style={{ fontSize: 12, color: '#757575', fontWeight: 600 }}>{centerLabel}</div>
          <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.05 }}>{centerValue}</div>
        </div>
      </div>
    </div>
  );
}
