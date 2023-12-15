import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ods from './pages/odsDetail/Ods';
import Portfolio from './components/portfolio/Portfolio';
import Form from './components/form/Form';

function App() {
  return (
    <Router>
      <Form />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/ods/:id" element={<Ods />} />
      </Routes>
    </Router>
  );
}

export default App;
