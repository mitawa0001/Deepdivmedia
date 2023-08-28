import "./App.css";
import React, { Suspense} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Home = React.lazy(() => import('./componment/pages/Home'));
const ProductList = React.lazy(() => import('./componment/pages/ProductList'));

function App() {
  
  return (
    <BrowserRouter>
      <Suspense fallback={<>Loding Page...</>}>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
