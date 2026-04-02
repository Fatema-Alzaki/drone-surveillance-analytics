import SectionCard from '../components/ui/SectionCard';
import StatusIndicator from '../components/ui/StatusIndicator';
import AlertBadge from '../components/ui/AlertBadge';
import { diverStatus } from '../data/mockData';

export default function DiverSafety() {
  return (
    <div style={styles.page}>
      <div style={styles.grid2}>
        {diverStatus.map(d => (
          <SectionCard key={d.id} title={d.name}>
            <div style={styles.diverCard}>
              <div style={styles.avatar}>
                <span style={{ fontSize: 28 }}>🤿</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={styles.row}>
                  <span style={styles.label}>Status</span>
                  <StatusIndicator status={d.status} pulse={d.status === 'warning'} />
                </div>
                <div style={styles.row}>
                  <span style={styles.label}>Depth</span>
                  <span style={styles.val}>{d.depth} m</span>
                </div>
                <div style={styles.row}>
                  <span style={styles.label}>Heart Rate</span>
                  <span style={{ ...styles.val, color: d.heartRate > 90 ? 'var(--warning)' : 'var(--success)' }}>
                    {d.heartRate} bpm
                  </span>
                </div>
                <div style={styles.row}>
                  <span style={styles.label}>Last Seen</span>
                  <span style={styles.val}>{d.lastSeen}</span>
                </div>
              </div>
            </div>
          </SectionCard>
        ))}
      </div>

      <SectionCard title="Safety Alerts">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <AlertBadge level="danger"  message="Diver 02 exceeded safe depth limit (18.5m)" time="now" />
          <AlertBadge level="warning" message="Diver 02 elevated heart rate detected (95 bpm)" time="1 min ago" />
          <AlertBadge level="info"    message="Diver 01 within safe parameters" time="2 min ago" />
        </div>
      </SectionCard>

      <SectionCard title="Camera Feed (Simulated)">
        <div style={styles.feed}>
          <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
            📷 Simulated camera feed — real integration pending hardware
          </span>
        </div>
      </SectionCard>
    </div>
  );
}

const styles = {
  page:      { display: 'flex', flexDirection: 'column', gap: 20 },
  grid2:     { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  diverCard: { display: 'flex', gap: 16, alignItems: 'flex-start' },
  avatar:    {
    width: 56, height: 56, borderRadius: 12,
    background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  row:   { display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid var(--border)' },
  label: { fontSize: 12, color: 'var(--text-muted)' },
  val:   { fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' },
  feed:  {
    height: 140, background: '#061525', borderRadius: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px dashed var(--border)',
  },
};
