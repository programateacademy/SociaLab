import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ods from './pages/odsDetail/Ods';
import Portfolio from './components/portfolio/Portfolio';
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Form />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ods/:id" element={<Ods />} />
      </Routes>
    </Router>
  );
}

export default App;