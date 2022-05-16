// routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css
import './App.css';

// components
import Nav from './components/Nav';

// pages
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
