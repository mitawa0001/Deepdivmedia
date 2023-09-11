import "./App.css";
import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Capitalize = React.lazy(() => import('./componment/molecules/Capitalize'));
const Home = React.lazy(() => import('./componment/pages/Home'));
const DarkTheme = React.lazy(() => import('./componment/molecules/DarkTheme'));

function App() {

  const [mode, setmode] = useState("light");

  const toogleMode = () => {
    if (mode === "light") {
      setmode("dark")
    }
    else {
      setmode("light")
    }
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<>Loding Page...</>}>
        <Routes>
          <Route index element={<Home mode={mode} toogleMode={toogleMode} />} />
          <Route exect path="capitilize" element={<Capitalize />} />
          <Route exect path="darktheme" element={<DarkTheme title="Dark mode"/>} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
