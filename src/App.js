import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;