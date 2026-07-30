interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
  direction?: 'up' | 'down';
  note?: string;
  icon: string;
}

export default function MetricCard({ label, value, trend, direction, note, icon }: MetricCardProps) {
  return (
    <article className="card metric">
      <div>
        <div className="metric-label">{label}</div>
        <div className="metric-value">{value}</div>
        {(trend || note) && (
          <div className="metric-footer">
            {trend && <span className={`trend ${direction || 'up'}`}>{trend}</span>}
            {note}
          </div>
        )}
      </div>
      <div className="icon-box">{icon}</div>
    </article>
  );
}
