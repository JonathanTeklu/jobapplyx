import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage'; // ✅ Add the login page import
import MainPage from './pages/MainPage';   // ✅ Add the main page import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* ✅ Add login route */}
        <Route path="/main" element={<MainPage />} />   {/* ✅ Add main user page route */}
      </Routes>
    </Router>
  );
}

export default App;
