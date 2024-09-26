// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the global CSS file
import Home from './pages/Home';
import Assessments from './pages/Assessments';
import Reports from './pages/Reports';
import Leaderboards from './pages/Leaderboards';

// Navbar Component with Logout Button
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/assessments">Assessments</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/leaderboards">Leaderboards</Link>
      </div>
      <button className="logout-button" onClick={() => alert('Logged out')}>
        Logout
      </button>
    </nav>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar with logout button */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
          
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
