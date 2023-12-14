import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ods from './pages/odsDetail/Ods';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ods/:id" element={<Ods />} />
      </Routes>
    </Router>
  );
}

export default App;
