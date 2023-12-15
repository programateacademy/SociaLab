import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ods from './pages/odsDetail/Ods';
import Home from './pages/home/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Form from './components/form/Form';
import Services from './components/services/Services';
import Header from './components/layout/Header';


function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Services />
      <Form />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ods/:id" element={<Ods />} />
      </Routes>
    </Router>
  );
}

export default App;