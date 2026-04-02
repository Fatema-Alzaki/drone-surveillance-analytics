export const sensorHistory = Array.from({ length: 20 }, (_, i) => ({
  time: `${i * 3}s`,
  temperature: +(22 + Math.sin(i * 0.5) * 3).toFixed(1),
  depth: +(10 + i * 0.4 + Math.random()).toFixed(1),
  turbidity: +(30 + Math.cos(i * 0.4) * 10).toFixed(1),
}));

export const alerts = [
  { id: 1, level: "warning", message: "Temperature above threshold (26°C)", time: "2 min ago" },
  { id: 2, level: "danger",  message: "Diver proximity alert detected",      time: "5 min ago" },
  { id: 3, level: "info",    message: "Mission checkpoint reached",           time: "10 min ago" },
  { id: 4, level: "warning", message: "Turbidity level elevated",             time: "15 min ago" },
];

export const rovState = {
  status: "active",
  depth: 12.4,
  heading: 270,
  speed: 1.2,
  battery: 78,
  signal: 92,
  mission: "Environmental Survey — Zone B",
};

export const sensorReadings = {
  temperature: { value: 24.6, unit: "°C", threshold: 26, status: "normal" },
  depth:       { value: 12.4, unit: "m",  threshold: 50, status: "normal" },
  turbidity:   { value: 38,   unit: "NTU",threshold: 50, status: "warning" },
  salinity:    { value: 35.2, unit: "ppt",threshold: 40, status: "normal" },
  pH:          { value: 7.8,  unit: "pH", threshold: 8.5, status: "normal" },
  pressure:    { value: 2.24, unit: "bar",threshold: 6,   status: "normal" },
};

export const imageAnalysisResults = [
  { id: 1, label: "Coral Reef",    confidence: 94, condition: "Healthy",  file: "frame_001.jpg" },
  { id: 2, label: "Plastic Waste", confidence: 88, condition: "Detected", file: "frame_002.jpg" },
  { id: 3, label: "Fish School",   confidence: 91, condition: "Normal",   file: "frame_003.jpg" },
  { id: 4, label: "Sediment",      confidence: 76, condition: "Elevated", file: "frame_004.jpg" },
];

export const diverStatus = [
  { id: 1, name: "Diver 01", status: "safe",    depth: 8.2,  heartRate: 72, lastSeen: "0s ago" },
  { id: 2, name: "Diver 02", status: "warning", depth: 18.5, heartRate: 95, lastSeen: "3s ago" },
];

export const trashDetections = [
  { id: 1, type: "Plastic Bottle", confidence: 91, location: "Zone A", time: "12:04" },
  { id: 2, type: "Fishing Net",    confidence: 85, location: "Zone B", time: "12:09" },
  { id: 3, type: "Metal Can",      confidence: 78, location: "Zone A", time: "12:15" },
];
