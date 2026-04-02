import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard     from './pages/Dashboard';
import ROVSimulation from './pages/ROVSimulation';
import SensorData    from './pages/SensorData';
import ImageAnalysis from './pages/ImageAnalysis';
import DiverSafety   from './pages/DiverSafety';
import TrashDetection from './pages/TrashDetection';
import Reports       from './pages/Reports';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index            element={<Dashboard />} />
          <Route path="rov"            element={<ROVSimulation />} />
          <Route path="sensors"        element={<SensorData />} />
          <Route path="image-analysis" element={<ImageAnalysis />} />
          <Route path="diver-safety"   element={<DiverSafety />} />
          <Route path="trash"          element={<TrashDetection />} />
          <Route path="reports"        element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
