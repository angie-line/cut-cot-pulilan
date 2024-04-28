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
                <Route path="/officials-and-volunteers/sangguniang-barangay" element={<Officials1 />} />
            </Routes>
            <Routes>
                <Route path="/officials-and-volunteers/sangguniang-kabataan" element={<Officials2 />} />
            </Routes>
            <Routes>
                <Route path="/officials-and-volunteers/barangay-health-workers" element={<Officials3 />} />
            </Routes>
            <Routes>
                <Route path="/officials-and-volunteers/lupon-tagapayapa-members" element={<Officials4 />} />
            </Routes>
            <Routes>
                <Route path="/officials-and-volunteers/barangay-lln-population-volunteer-and-mother-leaders" element={<Officials5 />} />
            </Routes>
            <Routes>
                <Route path="/officials-and-volunteers/barangay-peace-keeping-action-team" element={<Officials6 />} />
            </Routes>
            <Routes>
                <Route path="/officials-and-volunteers/association-presidents-cdt-service-patrol-operator-garbage-collector-kasambahay-desk-office-and-utility-worker" element={<Officials7 />} />
            </Routes>
            <Routes>
                <Route path="/demographic-profile" element={<Profile />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
