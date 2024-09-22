import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddSpending from './pages/AddSpending';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-spending" element={<AddSpending />} />
      </Routes>
    </Router>
  );
};

export default App;
