import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import Ods from './pages/odsDetail/Ods';

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