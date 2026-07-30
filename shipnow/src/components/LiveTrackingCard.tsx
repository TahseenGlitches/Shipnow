export default function LiveTrackingCard() {
  return (
    <article
      className="card"
      style={{
        padding: 18,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        minHeight: 280,
      }}
    >
      {/* Top Search & Controls Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        {/* Search Input */}
        <div
          style={{
            flex: 1,
            position: 'relative',
          }}
        >
          {/* Magnifying glass icon */}
          <span
            style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 14,
              color: '#94A3B8',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            🔍
          </span>
          <input
            type="search"
            placeholder="Search by Shipping ID..."
            style={{
              width: '100%',
              height: 38,
              border: '1px solid #E2E8F0',
              borderRadius: 8,
              background: '#FFFFFF',
              padding: '0 12px 0 36px',
              fontSize: 13,
              color: '#1E293B',
              outline: 'none',
            }}
          />
        </div>

        {/* Zoom Controls */}
        <div style={{ display: 'flex', gap: 2 }}>
          <button
            type="button"
            aria-label="Zoom in"
            style={{
              width: 34,
              height: 34,
              border: '1px solid #E2E8F0',
              borderRadius: 8,
              background: '#FFFFFF',
              display: 'grid',
              placeItems: 'center',
              fontSize: 16,
              fontWeight: 700,
              color: '#64748B',
              cursor: 'pointer',
            }}
          >
            +
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            style={{
              width: 34,
              height: 34,
              border: '1px solid #E2E8F0',
              borderRadius: 8,
              background: '#FFFFFF',
              display: 'grid',
              placeItems: 'center',
              fontSize: 16,
              fontWeight: 700,
              color: '#64748B',
              cursor: 'pointer',
            }}
          >
            −
          </button>
        </div>
      </div>

      {/* Map Canvas */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 260,
          borderRadius: 12,
          overflow: 'hidden',
          background: '#1E293B',
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Curved route SVG line */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 580 260"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
        >
          {/* Background track line */}
          <path
            d="M 80 180 C 180 20, 380 30, 500 80"
            fill="none"
            stroke="rgba(255,255,255,.12)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Active progress portion */}
          <path
            d="M 80 180 C 180 20, 380 30, 500 80"
            fill="none"
            stroke="#818CF8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset="180"
          />
        </svg>

        {/* Origin pin */}
        <div
          style={{
            position: 'absolute',
            left: '12%',
            top: '68%',
            width: 14,
            height: 14,
            borderRadius: '50% 50% 50% 0',
            background: '#818CF8',
            transform: 'rotate(-45deg)',
            zIndex: 3,
            boxShadow: '0 0 0 4px rgba(129,140,248,.25)',
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#FFFFFF',
              position: 'absolute',
              top: 4,
              left: 4,
            }}
          />
        </div>

        {/* Destination pin */}
        <div
          style={{
            position: 'absolute',
            right: '10%',
            top: '28%',
            width: 14,
            height: 14,
            borderRadius: '50% 50% 50% 0',
            background: '#F04A4A',
            transform: 'rotate(-45deg)',
            zIndex: 3,
            boxShadow: '0 0 0 4px rgba(240,74,74,.25)',
          }}
        >
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#FFFFFF',
              position: 'absolute',
              top: 4,
              left: 4,
            }}
          />
        </div>

        {/* Active waypoint glow */}
        <div
          style={{
            position: 'absolute',
            left: '54%',
            top: '18%',
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: '#818CF8',
            zIndex: 3,
            boxShadow: '0 0 0 4px rgba(129,140,248,.3), 0 0 0 10px rgba(129,140,248,.1)',
          }}
        />

        {/* Origin label */}
        <div
          style={{
            position: 'absolute',
            left: '8%',
            top: '78%',
            fontSize: 9,
            fontWeight: 600,
            color: 'rgba(255,255,255,.6)',
            whiteSpace: 'nowrap',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          San Francisco, CA
        </div>

        {/* Destination label */}
        <div
          style={{
            position: 'absolute',
            right: '6%',
            top: '18%',
            fontSize: 9,
            fontWeight: 600,
            color: 'rgba(255,255,255,.6)',
            whiteSpace: 'nowrap',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          New York, NY
        </div>

        {/* Overlaid Route Details Sheet (bottom) */}
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            background: '#FFFFFF',
            borderRadius: 10,
            padding: '12px 14px',
            boxShadow: '0 4px 16px rgba(0,0,0,.2)',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {/* Header row: ID left, carrier right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 800, color: '#1E293B' }}>
              #SH8743921
            </span>
            <span style={{ fontSize: 11, color: '#64748B', fontWeight: 600 }}>
              Daniel Cooper · SkyLogix Express
            </span>
          </div>

          {/* Status pill */}
          <div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                padding: '3px 10px',
                borderRadius: 999,
                background: '#EEF2FF',
                color: '#6366F1',
                fontSize: 11,
                fontWeight: 800,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#22C55E',
                  display: 'inline-block',
                }}
              />
              In Transit · On Schedule
            </span>
          </div>

          {/* Timeline: Origin ↔ Destination */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              paddingTop: 4,
            }}
          >
            {/* Origin */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#1E293B' }}>
                San Francisco, CA, USA
              </div>
              <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 1 }}>
                Mar 28, 2035 · 10:00 AM
              </div>
            </div>

            {/* Connecting track bar */}
            <div
              style={{
                flex: '0 0 60px',
                height: 3,
                borderRadius: 2,
                background: '#E2E8F0',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '68%',
                  borderRadius: 2,
                  background: '#818CF8',
                }}
              />
              {/* Left dot */}
              <div
                style={{
                  position: 'absolute',
                  left: -4,
                  top: -3,
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: '#818CF8',
                }}
              />
              {/* Right dot */}
              <div
                style={{
                  position: 'absolute',
                  right: -4,
                  top: -3,
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: '#CBD5E1',
                }}
              />
            </div>

            {/* Destination */}
            <div style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#1E293B' }}>
                New York, NY, USA
              </div>
              <div style={{ fontSize: 10, color: '#94A3B8', marginTop: 1 }}>
                Mar 29, 2035 · 03:00 PM est.
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
