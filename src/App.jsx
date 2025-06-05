import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NavMenu from './components/navmenu';
import './App.css';

function App() {

  return (
    <div class="root-container">
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  )
}

export default App
