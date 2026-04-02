export default function StatCard({ icon, label, value, unit, color = 'var(--accent)', sub }) {
  return (
    <div style={styles.card}>
      <div style={{ ...styles.iconBox, background: color + '22', color }}>{icon}</div>
      <div>
        <div style={styles.label}>{label}</div>
        <div style={styles.value}>
          {value}<span style={styles.unit}>{unit}</span>
        </div>
        {sub && <div style={styles.sub}>{sub}</div>}
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '16px 20px',
    display: 'flex', alignItems: 'center', gap: 16,
  },
  iconBox: { borderRadius: 10, padding: 10, display: 'flex' },
  label:  { fontSize: 12, color: 'var(--text-muted)', marginBottom: 2 },
  value:  { fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' },
  unit:   { fontSize: 13, fontWeight: 400, color: 'var(--text-secondary)', marginLeft: 3 },
  sub:    { fontSize: 11, color: 'var(--text-muted)', marginTop: 2 },
};
