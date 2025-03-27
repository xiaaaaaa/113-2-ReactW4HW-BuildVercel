import { BrowserRouter, Routes, Route } from 'react-router'

import './App.css';
import Home from './pages/Home'
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="books">
        <Route path="category/:categoryName" element={<Home />} />
        <Route path="id/:bookId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>  );
}

export default App;
