import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ods from "./pages/odsDetail/Ods";
import Portfolio from "./components/portfolio/Portfolio";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home/Home";
import Info from "../src/components/info/Info";

function App() {
  return (
    <>
      <Info />
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ods/:id" element={<Ods />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
