import logo from './logo.svg';
import './App.css';

function App() {
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
