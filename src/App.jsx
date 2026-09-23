import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Consent from "./pages/Consent";
import ApplicationCreated from "./pages/ApplicationCreated";
import TrackApplication from "./pages/TrackApplication";
import Failure from "./pages/Failure";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/service/scholarship" element={<ServiceDetails />} />
      <Route path="/consent" element={<Consent />} />
      <Route
        path="/application-created"
        element={<ApplicationCreated />}
      />
      <Route path="/track" element={<TrackApplication />} />
      <Route path="/failure" element={<Failure />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;