const colors = {
  danger:  { bg: '#ef444422', border: '#ef4444', text: '#ef4444' },
  warning: { bg: '#f59e0b22', border: '#f59e0b', text: '#f59e0b' },
  info:    { bg: '#0ea5e922', border: '#0ea5e9', text: '#0ea5e9' },
};

export default function AlertBadge({ level, message, time }) {
  const c = colors[level] ?? colors.info;
  return (
    <div style={{
      background: c.bg, border: `1px solid ${c.border}`,
      borderRadius: 8, padding: '10px 14px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: c.border, flexShrink: 0,
        }} />
        <span style={{ fontSize: 13, color: 'var(--text-primary)' }}>{message}</span>
      </div>
      <span style={{ fontSize: 11, color: c.text, whiteSpace: 'nowrap', marginLeft: 12 }}>{time}</span>
    </div>
  );
}
