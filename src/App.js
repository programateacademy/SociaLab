import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Portfolio from './components/portfolio/Portfolio';
import Ods from './pages/home/odsDetail/Ods';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/ruta/:id" element={<Ods />} /> 
      </Routes>
    </Router>
  );
};

export default App;
