import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark p-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Beth</Link>
          <div>
            <Link className="nav-link d-inline text-white me-3" to="/">Home</Link>
            <Link className="nav-link d-inline text-white me-3" to="/about">About</Link>
            <Link className="nav-link d-inline text-white" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;