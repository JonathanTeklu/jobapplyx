import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage'; // 👈 Import the signup component
// import LoginPage from './pages/LoginPage'; (when you're ready)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} /> {/* 👈 Add this line */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
