export default function SectionCard({ title, children, action }) {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.title}>{title}</span>
        {action && <span style={styles.action}>{action}</span>}
      </div>
      <div>{children}</div>
    </div>
  );
}

const styles = {
  card: {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 12,
    padding: '16px 20px',
  },
  header: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: 16,
  },
  title:  { fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' },
  action: { fontSize: 12, color: 'var(--accent)', cursor: 'pointer' },
};
