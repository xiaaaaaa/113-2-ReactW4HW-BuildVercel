import { BrowserRouter, Routes, Route } from 'react-router'
import { Provider } from "react-redux";

import './App.css';
import Home from './pages/Home'
import Product from './pages/Product';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="books">
            <Route path="category/:categoryName" element={<Home />} />
            <Route path="id/:bookId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
