export default function CapacityUsageCard() {
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
          marginBottom: 18,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#1E293B' }}>
          Capacity Usage
        </h2>
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

      {/* Central Donut Chart */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            position: 'relative',
            background: 'conic-gradient(#6366F1 0% 62.5%, #E2E8F0 62.5% 100%)',
          }}
        >
          {/* Center hole */}
          <div
            style={{
              position: 'absolute',
              inset: 26,
              borderRadius: '50%',
              background: '#FFFFFF',
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center',
              boxShadow: 'inset 0 0 0 1px #E2E8F0',
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
                Total Usage
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: '#1E293B',
                  lineHeight: 1.05,
                }}
              >
                62.5%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          paddingTop: 14,
          borderTop: '1px solid #E2E8F0',
        }}
      >
        <div>
          <div style={{ fontSize: 13, color: '#64748B', fontWeight: 600, marginBottom: 2 }}>
            Loaded
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1E293B', lineHeight: 1.1 }}>
            40 shelves
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 13, color: '#64748B', fontWeight: 600, marginBottom: 2 }}>
            Empty
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#1E293B', lineHeight: 1.1 }}>
            24 shelves
          </div>
        </div>
      </div>
    </article>
  );
}
