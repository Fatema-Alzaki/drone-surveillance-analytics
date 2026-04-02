import SectionCard from '../components/ui/SectionCard';
import { trashDetections } from '../data/mockData';

export default function TrashDetection() {
  const total    = trashDetections.length;
  const avgConf  = Math.round(trashDetections.reduce((s, t) => s + t.confidence, 0) / total);

  return (
    <div style={styles.page}>
      {/* Summary */}
      <div style={styles.grid3}>
        <Metric label="Total Detections" value={total}    color="var(--danger)" />
        <Metric label="Avg Confidence"   value={`${avgConf}%`} color="var(--warning)" />
        <Metric label="Zones Affected"   value={2}        color="var(--accent)" />
      </div>

      <div style={styles.grid2}>
        {/* Detection feed */}
        <SectionCard title="Detection Feed (Simulated)">
          <div style={styles.feed}>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              🎥 Live detection feed — simulated mode
            </span>
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {trashDetections.map(t => (
              <span key={t.id} style={styles.tag}>{t.type}</span>
            ))}
          </div>
        </SectionCard>

        {/* Results */}
        <SectionCard title="Detection Results">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {trashDetections.map(t => (
              <div key={t.id} style={styles.item}>
                <div style={styles.trashIcon}>🗑️</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{t.type}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{t.location} · {t.time}</div>
                </div>
                <div style={styles.conf}>{t.confidence}%</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Table */}
      <SectionCard title="All Detections Log">
        <table style={styles.table}>
          <thead>
            <tr>{['#', 'Type', 'Confidence', 'Location', 'Time'].map(h => (
              <th key={h} style={styles.th}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {trashDetections.map(t => (
              <tr key={t.id}>
                <td style={styles.td}>{t.id}</td>
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

function Metric({ label, value, color }) {
  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px 20px' }}>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color }}>{value}</div>
    </div>
  );
}

const styles = {
  page:  { display: 'flex', flexDirection: 'column', gap: 20 },
  grid3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  feed:  {
    height: 150, background: '#061525', borderRadius: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px dashed var(--border)',
  },
  tag:   {
    background: 'var(--danger)22', border: '1px solid var(--danger)',
    color: 'var(--danger)', borderRadius: 20, padding: '3px 10px', fontSize: 11,
  },
  item:      { display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border)' },
  trashIcon: { fontSize: 20 },
  conf:      { fontSize: 13, fontWeight: 700, color: 'var(--warning)' },
  table:     { width: '100%', borderCollapse: 'collapse' },
  th:        { fontSize: 11, color: 'var(--text-muted)', textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid var(--border)' },
  td:        { fontSize: 13, color: 'var(--text-primary)', padding: '10px 12px', borderBottom: '1px solid var(--border)' },
};
