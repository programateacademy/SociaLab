import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ods from './pages/odsDetail/Ods';
import Home from './pages/home/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Form from './components/form/Form';
import Services from './components/services/Services';
import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ods/:id" element={<Ods />} />
      </Routes>    
    </Router>

  );
}

export default App;
