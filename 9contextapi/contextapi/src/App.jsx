import { BrowserRouter, Routes, Route } from 'react-router-dom';

// css
import './App.css';

// componentes
import Nav from './components/Nav';

// páginas
import P1 from './pages/P1';
import P2 from './pages/P2';
import P3 from './pages/P3';


function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<P1 />}/>
          <Route path='/p2' element={<P2 />}/>
          <Route path='/p3' element={<P3 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
