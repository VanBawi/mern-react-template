import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';

function App() {
  return (
    <div className="position-relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoadingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
