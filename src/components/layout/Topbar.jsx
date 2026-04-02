import { Bell, Wifi, Battery } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/':               'Dashboard',
  '/rov':            'ROV Simulation',
  '/sensors':        'Sensor Data',
  '/image-analysis': 'Image Analysis',
  '/diver-safety':   'Diver Safety',
  '/trash':          'Trash Detection',
  '/reports':        'Reports',
};

export default function Topbar() {
  const { pathname } = useLocation();
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header style={styles.bar}>
      <div>
        <h1 style={styles.title}>{titles[pathname] ?? 'AquaMonitor'}</h1>
        <span style={styles.sub}>Simulation-Driven Underwater Monitoring Platform</span>
      </div>
      <div style={styles.right}>
        <Chip icon={<Wifi size={13} />} label="92%" color="var(--success)" />
        <Chip icon={<Battery size={13} />} label="78%" color="var(--accent)" />
        <div style={styles.bell}>
          <Bell size={17} color="var(--text-secondary)" />
          <span style={styles.dot} />
        </div>
        <span style={styles.time}>{now}</span>
      </div>
    </header>
  );
}

function Chip({ icon, label, color }) {
  return (
    <div style={{ ...styles.chip, color }}>
      {icon}<span>{label}</span>
    </div>
  );
}

const styles = {
  bar: {
    height: 60,
    background: 'var(--bg-surface)',
    borderBottom: '1px solid var(--border)',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 24px',
    position: 'sticky', top: 0, zIndex: 50,
  },
  title: { fontSize: 17, fontWeight: 700, color: 'var(--text-primary)' },
  sub:   { fontSize: 11, color: 'var(--text-muted)' },
  right: { display: 'flex', alignItems: 'center', gap: 16 },
  chip:  { display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600 },
  bell:  { position: 'relative', cursor: 'pointer' },
  dot:   {
    position: 'absolute', top: -2, right: -2,
    width: 7, height: 7, borderRadius: '50%',
    background: 'var(--danger)', border: '1px solid var(--bg-surface)',
  },
  time: { fontSize: 12, color: 'var(--text-muted)', fontVariantNumeric: 'tabular-nums' },
};
