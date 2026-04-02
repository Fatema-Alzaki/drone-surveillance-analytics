import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Cpu, Activity, ScanSearch,
  UserCheck, Trash2, FileText, Waves
} from 'lucide-react';

const nav = [
  { to: '/',               icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/rov',            icon: Cpu,             label: 'ROV Simulation' },
  { to: '/sensors',        icon: Activity,        label: 'Sensor Data' },
  { to: '/image-analysis', icon: ScanSearch,      label: 'Image Analysis' },
  { to: '/diver-safety',   icon: UserCheck,       label: 'Diver Safety' },
  { to: '/trash',          icon: Trash2,          label: 'Trash Detection' },
  { to: '/reports',        icon: FileText,        label: 'Reports' },
];

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>
        <Waves size={22} color="var(--accent)" />
        <span style={styles.logoText}>AquaMonitor</span>
      </div>
      <nav style={styles.nav}>
        {nav.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            style={({ isActive }) => ({
              ...styles.link,
              background: isActive ? 'var(--bg-hover)' : 'transparent',
              color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
              borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
            })}
          >
            <Icon size={17} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div style={styles.footer}>
        <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>FYP — Plan B v1.0</span>
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: 'var(--sidebar-w)',
    minHeight: '100vh',
    background: 'var(--bg-surface)',
    borderRight: '1px solid var(--border)',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0, left: 0, bottom: 0,
    zIndex: 100,
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '20px 20px 16px',
    borderBottom: '1px solid var(--border)',
  },
  logoText: { fontWeight: 700, fontSize: 16, color: 'var(--text-primary)', letterSpacing: 0.5 },
  nav: { flex: 1, padding: '12px 0', display: 'flex', flexDirection: 'column', gap: 2 },
  link: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 20px', fontSize: 13, fontWeight: 500,
    transition: 'all 0.15s', cursor: 'pointer',
  },
  footer: { padding: '16px 20px', borderTop: '1px solid var(--border)' },
};
