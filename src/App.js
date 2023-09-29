import "./App.css";
import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Capitalize = React.lazy(() => import('./componment/molecules/Capitalize'));
const Home = React.lazy(() => import('./componment/pages/Home'));
const DarkTheme = React.lazy(() => import('./componment/molecules/DarkTheme'));
const ThemeforestHome = React.lazy(() => import('./containers/ThemeForestHome'));
const ThemeForestMenu = React.lazy(() => import('./containers/ThemeForestMenu'));


function App() {
  const [mode, setmode] = useState("light");
  const [text, settext] = useState("context");

  const toogleMode = () => {
    if (mode === "light" ) {
      setmode("dark")
    }
    if (text === "content") {
      settext("white")
    }

    else {
      setmode("light")
      settext("content")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<>Loding Page...</>}>
          <Routes>
            <Route index element={<Home mode={mode} text={text} toogleMode={toogleMode} />} />
            <Route exect path="capitilize" element={<Capitalize mode={mode} toogleMode={toogleMode} />} />
            <Route exect path="darktheme" element={<DarkTheme title="Dark mode" mode={mode} toogleMode={toogleMode} />} />
            <Route exect path="themeforesthome" element={<ThemeforestHome title="Dark mode" mode={mode} toogleMode={toogleMode} />} />
            <Route exect path="themeforestmenu" element={<ThemeForestMenu title="Dark mode" mode={mode} toogleMode={toogleMode} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
