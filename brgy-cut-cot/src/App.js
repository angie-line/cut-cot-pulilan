import Header from './components/header';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Officials1 from "./pages/officials1";
import Officials2 from "./pages/officials2";
import Officials3 from "./pages/officials3";
import Officials4 from "./pages/officials4";
import Officials5 from "./pages/officials5";
import Officials6 from "./pages/officials6";
import Officials7 from "./pages/officials7";
import Profile from "./pages/profile";

const App = () => {
  return (
    <div>
      <Router>
            <Navbar />
            <Routes>
                <Route exact path="/home" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/services/sangguniang-barangay" element={<Officials1 />} />
            </Routes>
            <Routes>
                <Route path="/services/sangguniang-kabataan" element={<Officials2 />} />
            </Routes>
            <Routes>
                <Route path="/services/barangay-health-workers" element={<Officials3 />} />
            </Routes>
            <Routes>
                <Route path="/services/lupon-tagapayapa-members" element={<Officials4 />} />
            </Routes>
            <Routes>
                <Route path="/services/barangay-lln-population-volunteer-and-mother-leaders" element={<Officials5 />} />
            </Routes>
            <Routes>
                <Route path="/services/barangay-peace-keeping-action-team" element={<Officials6 />} />
            </Routes>
            <Routes>
                <Route path="/services/association-presidents-cdt-service-patrol-operator-garbage-collector-kasambahay-desk-office-and-utility-worker" element={<Officials7 />} />
            </Routes>
            <Routes>
                <Route path="/demographic-profile" element={<Profile />} />
            </Routes>
        </Router>
    </div>

    
  );
};

export default App;