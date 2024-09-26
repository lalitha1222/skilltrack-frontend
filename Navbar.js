// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#282c34' }}>
      <Link style={{ margin: '10px', color: 'white' }} to="/">Home</Link>
      <Link style={{ margin: '10px', color: 'white' }} to="/assessments">Assessments</Link>
      <Link style={{ margin: '10px', color: 'white' }} to="/reports">Reports</Link>
      <Link style={{ margin: '10px', color: 'white' }} to="/leaderboards">Leaderboards</Link>
    </nav>
  );
};

export default Navbar;
