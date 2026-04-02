import SectionCard from '../components/ui/SectionCard';
import StatusIndicator from '../components/ui/StatusIndicator';
import LineChart from '../components/charts/LineChart';
import { sensorHistory, sensorReadings } from '../data/mockData';

export default function SensorData() {
  return (
    <div style={styles.page}>
      {/* Sensor cards */}
      <div style={styles.grid3}>
        {Object.entries(sensorReadings).map(([key, s]) => (
          <div key={key} style={styles.card}>
            <div style={styles.cardTop}>
              <span style={styles.cardLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
              <StatusIndicator status={s.status} />
            </div>
            <div style={styles.cardValue}>{s.value}<span style={styles.cardUnit}>{s.unit}</span></div>
            <div style={styles.threshold}>Threshold: {s.threshold}{s.unit}</div>
            <div style={styles.barWrap}>
              <div style={{
                ...styles.bar,
                width: `${Math.min((s.value / s.threshold) * 100, 100)}%`,
                background: s.status === 'warning' ? 'var(--warning)' : 'var(--success)',
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <SectionCard title="Temperature Over Time">
        <LineChart data={sensorHistory} lines={[{ key: 'temperature', color: '#0ea5e9', name: 'Temp (°C)' }]} />
      </SectionCard>

      <div style={styles.grid2}>
        <SectionCard title="Depth Over Time">
          <LineChart data={sensorHistory} lines={[{ key: 'depth', color: '#22c55e', name: 'Depth (m)' }]} />
        </SectionCard>
        <SectionCard title="Turbidity Over Time">
          <LineChart data={sensorHistory} lines={[{ key: 'turbidity', color: '#f59e0b', name: 'Turbidity (NTU)' }]} />
        </SectionCard>
      </div>
    </div>
  );
}

const styles = {
  page:      { display: 'flex', flexDirection: 'column', gap: 20 },
  grid3:     { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  grid2:     { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  card:      { background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '16px 18px' },
  cardTop:   { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  cardLabel: { fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)' },
  cardValue: { fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 },
  cardUnit:  { fontSize: 14, fontWeight: 400, color: 'var(--text-muted)', marginLeft: 3 },
  threshold: { fontSize: 11, color: 'var(--text-muted)', marginBottom: 8 },
  barWrap:   { height: 5, background: 'var(--bg-hover)', borderRadius: 3, overflow: 'hidden' },
  bar:       { height: '100%', borderRadius: 3, transition: 'width 0.3s' },
};
