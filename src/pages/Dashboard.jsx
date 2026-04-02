import { Thermometer, Layers, Wifi, Battery, AlertTriangle } from 'lucide-react';
import StatCard from '../components/ui/StatCard';
import SectionCard from '../components/ui/SectionCard';
import AlertBadge from '../components/ui/AlertBadge';
import StatusIndicator from '../components/ui/StatusIndicator';
import LineChart from '../components/charts/LineChart';
import { sensorHistory, alerts, rovState, sensorReadings } from '../data/mockData';

export default function Dashboard() {
  return (
    <div style={styles.page}>
      {/* Stat row */}
      <div style={styles.grid4}>
        <StatCard icon={<Thermometer size={20} />} label="Water Temperature" value={sensorReadings.temperature.value} unit="°C" color="var(--info)" sub="Normal range" />
        <StatCard icon={<Layers size={20} />}      label="Current Depth"     value={rovState.depth}                   unit="m"  color="var(--accent)" sub="ROV position" />
        <StatCard icon={<Battery size={20} />}     label="Battery"           value={rovState.battery}                 unit="%"  color="var(--success)" sub="Estimated 2h left" />
        <StatCard icon={<Wifi size={20} />}        label="Signal Strength"   value={rovState.signal}                  unit="%"  color="var(--warning)" sub="Stable connection" />
      </div>

      {/* Middle row */}
      <div style={styles.grid2}>
        <SectionCard title="Temperature & Depth History">
          <LineChart
            data={sensorHistory}
            lines={[
              { key: 'temperature', color: '#0ea5e9', name: 'Temp (°C)' },
              { key: 'depth',       color: '#22c55e', name: 'Depth (m)' },
            ]}
          />
        </SectionCard>

        <SectionCard title="Active Alerts" action={`${alerts.length} total`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {alerts.map(a => <AlertBadge key={a.id} {...a} />)}
          </div>
        </SectionCard>
      </div>

      {/* Bottom row */}
      <div style={styles.grid2}>
        <SectionCard title="ROV Status">
          <div style={styles.rovGrid}>
            <Info label="Mission"  value={rovState.mission} />
            <Info label="Heading"  value={`${rovState.heading}°`} />
            <Info label="Speed"    value={`${rovState.speed} m/s`} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Status</span>
              <StatusIndicator status={rovState.status} pulse />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Sensor Overview">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {Object.entries(sensorReadings).map(([key, s]) => (
              <div key={key} style={styles.sensorRow}>
                <span style={styles.sensorLabel}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <div style={styles.barWrap}>
                  <div style={{
                    ...styles.bar,
                    width: `${Math.min((s.value / s.threshold) * 100, 100)}%`,
                    background: s.status === 'warning' ? 'var(--warning)' : 'var(--accent)',
                  }} />
                </div>
                <span style={styles.sensorVal}>{s.value}{s.unit}</span>
                <StatusIndicator status={s.status} />
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{label}</div>
      <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500 }}>{value}</div>
    </div>
  );
}

const styles = {
  page:       { display: 'flex', flexDirection: 'column', gap: 20 },
  grid4:      { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 },
  grid2:      { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  rovGrid:    { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  sensorRow:  { display: 'flex', alignItems: 'center', gap: 10 },
  sensorLabel:{ fontSize: 12, color: 'var(--text-secondary)', width: 80, flexShrink: 0 },
  barWrap:    { flex: 1, height: 6, background: 'var(--bg-hover)', borderRadius: 3, overflow: 'hidden' },
  bar:        { height: '100%', borderRadius: 3, transition: 'width 0.3s' },
  sensorVal:  { fontSize: 12, color: 'var(--text-primary)', width: 60, textAlign: 'right', flexShrink: 0 },
};
