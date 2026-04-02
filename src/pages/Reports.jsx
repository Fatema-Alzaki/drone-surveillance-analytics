import SectionCard from '../components/ui/SectionCard';
import { sensorReadings, alerts, trashDetections, imageAnalysisResults } from '../data/mockData';

const timestamp = new Date().toLocaleString();

export default function Reports() {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <div>
          <div style={styles.title}>Mission Report</div>
          <div style={styles.sub}>Generated: {timestamp}</div>
        </div>
        <button style={styles.exportBtn} onClick={() => window.print()}>
          Export / Print
        </button>
      </div>

      <SectionCard title="1. Sensor Summary">
        <table style={styles.table}>
          <thead>
            <tr>{['Sensor', 'Value', 'Threshold', 'Status'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {Object.entries(sensorReadings).map(([key, s]) => (
              <tr key={key}>
                <td style={styles.td}>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                <td style={styles.td}>{s.value} {s.unit}</td>
                <td style={styles.td}>{s.threshold} {s.unit}</td>
                <td style={{ ...styles.td, color: s.status === 'warning' ? 'var(--warning)' : 'var(--success)', fontWeight: 600 }}>
                  {s.status.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>

      <SectionCard title="2. Alerts Log">
        <table style={styles.table}>
          <thead>
            <tr>{['Level', 'Message', 'Time'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {alerts.map(a => (
              <tr key={a.id}>
                <td style={{ ...styles.td, color: a.level === 'danger' ? 'var(--danger)' : a.level === 'warning' ? 'var(--warning)' : 'var(--info)', fontWeight: 600, textTransform: 'uppercase', fontSize: 11 }}>
                  {a.level}
                </td>
                <td style={styles.td}>{a.message}</td>
                <td style={styles.td}>{a.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>

      <SectionCard title="3. Image Analysis Summary">
        <table style={styles.table}>
          <thead>
            <tr>{['File', 'Classification', 'Confidence', 'Condition'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {imageAnalysisResults.map(r => (
              <tr key={r.id}>
                <td style={styles.td}>{r.file}</td>
                <td style={styles.td}>{r.label}</td>
                <td style={styles.td}>{r.confidence}%</td>
                <td style={styles.td}>{r.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>

      <SectionCard title="4. Trash Detection Summary">
        <table style={styles.table}>
          <thead>
            <tr>{['Type', 'Confidence', 'Location', 'Time'].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {trashDetections.map(t => (
              <tr key={t.id}>
                <td style={styles.td}>{t.type}</td>
                <td style={{ ...styles.td, color: 'var(--warning)' }}>{t.confidence}%</td>
                <td style={styles.td}>{t.location}</td>
                <td style={styles.td}>{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  );
}

const styles = {
  page:      { display: 'flex', flexDirection: 'column', gap: 20 },
  header:    { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  title:     { fontSize: 20, fontWeight: 700, color: 'var(--text-primary)' },
  sub:       { fontSize: 12, color: 'var(--text-muted)', marginTop: 2 },
  exportBtn: {
    background: 'var(--accent)', color: '#fff', border: 'none',
    borderRadius: 8, padding: '9px 18px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
  },
  table: { width: '100%', borderCollapse: 'collapse' },
  th:    { fontSize: 11, color: 'var(--text-muted)', textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid var(--border)' },
  td:    { fontSize: 13, color: 'var(--text-primary)', padding: '10px 12px', borderBottom: '1px solid var(--border)' },
};
