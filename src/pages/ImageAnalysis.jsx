import { useState } from 'react';
import SectionCard from '../components/ui/SectionCard';
import { imageAnalysisResults } from '../data/mockData';

const conditionColor = {
  Healthy:  'var(--success)',
  Normal:   'var(--success)',
  Detected: 'var(--danger)',
  Elevated: 'var(--warning)',
};

export default function ImageAnalysis() {
  const [selected, setSelected] = useState(imageAnalysisResults[0]);

  return (
    <div style={styles.page}>
      <div style={styles.grid2}>
        {/* Frame viewer */}
        <SectionCard title="Frame Viewer">
          <div style={styles.frame}>
            <div style={styles.framePlaceholder}>
              <span style={styles.frameLabel}>{selected.file}</span>
              <span style={styles.frameSub}>Simulated underwater frame</span>
            </div>
          </div>
          <div style={styles.result}>
            <Row label="Classification" value={selected.label} />
            <Row label="Confidence"     value={`${selected.confidence}%`} />
            <Row label="Condition"      value={selected.condition} color={conditionColor[selected.condition]} />
          </div>
        </SectionCard>

        {/* Frame list */}
        <SectionCard title="Analysis Queue">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {imageAnalysisResults.map(r => (
              <div
                key={r.id}
                onClick={() => setSelected(r)}
                style={{
                  ...styles.frameItem,
                  border: selected.id === r.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: selected.id === r.id ? 'var(--bg-hover)' : 'transparent',
                }}
              >
                <div style={styles.thumb} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{r.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{r.file}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, color: conditionColor[r.condition] ?? 'var(--text-secondary)' }}>{r.condition}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{r.confidence}%</div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Summary table */}
      <SectionCard title="All Results">
        <table style={styles.table}>
          <thead>
            <tr>{['File', 'Classification', 'Confidence', 'Condition'].map(h => (
              <th key={h} style={styles.th}>{h}</th>
            ))}</tr>
          </thead>
          <tbody>
            {imageAnalysisResults.map(r => (
              <tr key={r.id} style={styles.tr}>
                <td style={styles.td}>{r.file}</td>
                <td style={styles.td}>{r.label}</td>
                <td style={styles.td}>{r.confidence}%</td>
                <td style={{ ...styles.td, color: conditionColor[r.condition] }}>{r.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  );
}

function Row({ label, value, color }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
      <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{label}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: color ?? 'var(--text-primary)' }}>{value}</span>
    </div>
  );
}

const styles = {
  page:  { display: 'flex', flexDirection: 'column', gap: 20 },
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  frame: {
    height: 180, background: 'linear-gradient(135deg, #061525, #0c2a4a)',
    borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 14, border: '1px solid var(--border)',
  },
  framePlaceholder: { textAlign: 'center' },
  frameLabel: { display: 'block', fontSize: 14, fontWeight: 600, color: 'var(--accent)' },
  frameSub:   { display: 'block', fontSize: 11, color: 'var(--text-muted)', marginTop: 4 },
  result:     { display: 'flex', flexDirection: 'column' },
  frameItem:  { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 8, cursor: 'pointer' },
  thumb:      { width: 40, height: 40, borderRadius: 6, background: 'var(--bg-hover)', flexShrink: 0 },
  table:      { width: '100%', borderCollapse: 'collapse' },
  th:         { fontSize: 11, color: 'var(--text-muted)', textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid var(--border)' },
  td:         { fontSize: 13, color: 'var(--text-primary)', padding: '10px 12px', borderBottom: '1px solid var(--border)' },
  tr:         { transition: 'background 0.1s' },
};
