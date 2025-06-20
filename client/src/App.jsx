import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Test Route (Optional) */}
        <Route
          path="/test"
          element={
            <div className="p-4">
              <h1 className="text-2xl font-bold">Frontend is Running ✅</h1>
              <p className="mt-4 text-green-600">Test route connected.</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
