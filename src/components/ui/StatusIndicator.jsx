const colorMap = {
  active:  'var(--success)',
  normal:  'var(--success)',
  safe:    'var(--success)',
  warning: 'var(--warning)',
  danger:  'var(--danger)',
  offline: 'var(--text-muted)',
  info:    'var(--info)',
};

export default function StatusIndicator({ status, label, pulse = false }) {
  const color = colorMap[status] ?? 'var(--text-muted)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%', background: color,
        boxShadow: pulse ? `0 0 0 3px ${color}33` : 'none',
        animation: pulse ? 'pulse 1.5s infinite' : 'none',
      }} />
      <span style={{ fontSize: 12, color, fontWeight: 600, textTransform: 'capitalize' }}>
        {label ?? status}
      </span>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </span>
  );
}
