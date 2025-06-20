import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Test backend route (for now only at /test) */}
        <Route
          path="/test"
          element={
            <div className="p-4">
              <h1 className="text-2xl font-bold">Frontend is Running ✅</h1>
              <p className="mt-4 text-green-600">{message}</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
