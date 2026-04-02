import {
  ResponsiveContainer, LineChart as RLineChart,
  Line, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts';

export default function LineChart({ data, lines, height = 200 }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RLineChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
        <XAxis dataKey="time" tick={{ fill: '#475569', fontSize: 11 }} />
        <YAxis tick={{ fill: '#475569', fontSize: 11 }} />
        <Tooltip
          contentStyle={{ background: '#1a2235', border: '1px solid #1e3a5f', borderRadius: 8, fontSize: 12 }}
          labelStyle={{ color: '#94a3b8' }}
        />
        {lines.map(({ key, color, name }) => (
          <Line
            key={key} type="monotone" dataKey={key}
            stroke={color} strokeWidth={2} dot={false} name={name ?? key}
          />
        ))}
      </RLineChart>
    </ResponsiveContainer>
  );
}
