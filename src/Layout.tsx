import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import React from 'react';

function Layout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default Layout;
