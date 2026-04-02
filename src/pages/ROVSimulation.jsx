import { useState, useEffect } from 'react';
import SectionCard from '../components/ui/SectionCard';
import StatusIndicator from '../components/ui/StatusIndicator';

function useSimulated(base, range, interval = 1500) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      setVal(+(base + (Math.random() - 0.5) * range).toFixed(2));
    }, interval);
    return () => clearInterval(t);
  }, [base, range, interval]);
  return val;
}

export default function ROVSimulation() {
  const depth    = useSimulated(12.4, 1.5);
  const speed    = useSimulated(1.2, 0.4);
  const heading  = useSimulated(270, 10);
  const battery  = useSimulated(78, 2);
  const temp     = useSimulated(24.6, 1);

  return (
    <div style={styles.page}>
      <div style={styles.grid2}>
        {/* Visual ROV */}
        <SectionCard title="ROV Visual State">
          <div style={styles.ocean}>
            <div style={styles.rovBody}>
              <div style={styles.rovLabel}>ROV — CPS 5</div>
              <div style={styles.rovDepth}>{depth} m</div>
              <StatusIndicator status="active" pulse />
            </div>
            <div style={styles.bubbles}>
              {[...Array(5)].map((_, i) => (
                <div key={i} style={{ ...styles.bubble, left: `${15 + i * 15}%`, animationDelay: `${i * 0.4}s` }} />
              ))}
            </div>
          </div>
          <style>{`
            @keyframes rise { 0%{bottom:10%;opacity:1} 100%{bottom:90%;opacity:0} }
            @keyframes sway { 0%,100%{transform:translateX(0)} 50%{transform:translateX(6px)} }
          `}</style>
        </SectionCard>

        {/* Live telemetry */}
        <SectionCard title="Live Telemetry">
          <div style={styles.telGrid}>
            {[
              { label: 'Depth',       value: depth,   unit: 'm'   },
              { label: 'Speed',       value: speed,   unit: 'm/s' },
              { label: 'Heading',     value: heading, unit: '°'   },
              { label: 'Battery',     value: battery, unit: '%'   },
              { label: 'Water Temp',  value: temp,    unit: '°C'  },
              { label: 'Signal',      value: 92,      unit: '%'   },
            ].map(({ label, value, unit }) => (
              <div key={label} style={styles.telCard}>
                <div style={styles.telLabel}>{label}</div>
                <div style={styles.telValue}>{value}<span style={styles.telUnit}>{unit}</span></div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Controls */}
      <SectionCard title="Simulated Controls">
        <div style={styles.controls}>
          {['↑ Forward', '↓ Backward', '← Left', '→ Right', '▲ Ascend', '▼ Descend'].map(cmd => (
            <button key={cmd} style={styles.btn}>{cmd}</button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
          Controls are simulated — no physical hardware connected.
        </p>
      </SectionCard>
    </div>
  );
}

const styles = {
  page:    { display: 'flex', flexDirection: 'column', gap: 20 },
  grid2:   { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  ocean: {
    height: 220, background: 'linear-gradient(180deg, #0c2a4a 0%, #061525 100%)',
    borderRadius: 10, position: 'relative', overflow: 'hidden', marginBottom: 8,
  },
  rovBody: {
    position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)',
    background: '#1a3a5c', border: '2px solid var(--accent)', borderRadius: 12,
    padding: '12px 20px', textAlign: 'center',
    animation: 'sway 3s ease-in-out infinite',
  },
  rovLabel: { fontSize: 13, fontWeight: 700, color: 'var(--accent)', marginBottom: 4 },
  rovDepth: { fontSize: 11, color: 'var(--text-secondary)', marginBottom: 6 },
  bubbles:  { position: 'absolute', bottom: 0, width: '100%', height: '100%', pointerEvents: 'none' },
  bubble: {
    position: 'absolute', width: 6, height: 6, borderRadius: '50%',
    background: 'rgba(14,165,233,0.4)', animation: 'rise 3s ease-in infinite',
  },
  telGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 },
  telCard: {
    background: 'var(--bg-hover)', borderRadius: 8, padding: '12px 14px',
    border: '1px solid var(--border)',
  },
  telLabel: { fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 },
  telValue: { fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' },
  telUnit:  { fontSize: 12, color: 'var(--text-secondary)', marginLeft: 2 },
  controls: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  btn: {
    background: 'var(--bg-hover)', border: '1px solid var(--border)',
    color: 'var(--text-primary)', borderRadius: 8, padding: '8px 16px',
    fontSize: 13, cursor: 'pointer', transition: 'background 0.15s',
  },
};
