const inventoryData = [
  { label: 'Electronics', percent: 25, value: '2,500' },
  { label: 'Apparel', percent: 20, value: '2,000' },
  { label: 'Home & Kitchen', percent: 18, value: '1,800' },
  { label: 'Beauty & Health', percent: 15, value: '1,500' },
  { label: 'Automotive Parts', percent: 12, value: '1,200' },
  { label: 'Sports Equipment', percent: 10, value: '1,000' },
];

export default function WarehouseInventoryCard() {
  return (
    <article
      className="card"
      style={{
        padding: 22,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>
          Warehouse Inventory
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: '#1E293B' }}>
            10,000 <span style={{ fontSize: 11, fontWeight: 600, color: '#64748B' }}>packages</span>
          </span>
          <button
            type="button"
            aria-label="Options"
            style={{
              border: 0, background: 'transparent', fontSize: 18,
              color: '#94A3B8', cursor: 'pointer', lineHeight: 1,
              padding: '0 2px', letterSpacing: 2,
            }}
          >
            ⋮
          </button>
        </div>
      </div>

      {/* 6-Column Distribution Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 12,
          minHeight: 200,
        }}
      >
        {inventoryData.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '4px 2px',
              }}
            >
              {/* Top: Category Label */}
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#1E293B',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  minHeight: 30,
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                {item.label}
              </div>

              {/* Middle: Vertical Fill Bar */}
              <div
                style={{
                  flex: 1,
                  width: '100%',
                  maxWidth: 56,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  minHeight: 60,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: `${item.percent * 2.4}px`,
                    minHeight: 20,
                    maxHeight: 160,
                    borderRadius: '8px 8px 4px 4px',
                    background: '#856DF3',
                    transition: 'height .3s',
                  }}
                />
              </div>

              {/* Bottom: Percentage + Value */}
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#1E293B',
                  textAlign: 'center',
                }}
              >
                {item.percent}% · {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
