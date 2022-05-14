import './App.css';

// config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

// components
import SearchForm from './components/SearchForm';
// 2
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* 2 - links com react router */}
        <Navbar />
        {/* 9 - search form */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          {/* 4 - criar rota e componente */}
          <Route path='/products/:id' element={<Product />}/>
          {/* 6 - nested routes */}
          <Route path='/products/:id/info' element={<Info />}/>
          {/* 9 - search */}
          <Route path='/search' element={<Search />}/>
          {/* 10 - redirect */}
          <Route path='/company' element={<Navigate to='/about' />}/>
          {/* 7 - 404 */}
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
