import "./App.css";
import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./componment/pages/ProductList";

const Home = React.lazy(() => import('./containers/ThemeForestHome'));
const Capitalize = React.lazy(() => import('./componment/molecules/Capitalize'));
const DarkTheme = React.lazy(() => import('./componment/molecules/DarkTheme'));
const ThemeforestBlog = React.lazy(() => import('./containers/ThemeForestBlog'));
const ThemeforestContact = React.lazy(() => import('./containers/ThemeForestContact'));
const Theme = React.lazy(() => import('./componment/common/Header'));
const ReduxSample = React.lazy(() => import('./containers/ReduxSample/index'));
const FormNew = React.lazy(() => import('./componment/common/FormNew'));
const Blog = React.lazy(() => import('./containers/Blog'));
const SingleBlog = React.lazy(() => import('./containers/Blog/SingleBlog'));


const App = () => {
  const [mode, setmode] = useState("light");
  const [text, settext] = useState("context");

  const toogleMode = () => {
    if (mode === "light") {
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
            <Route exect path="themeforestblog" element={<ThemeforestBlog title="Dark mode" mode={mode} toogleMode={toogleMode} />} />
            <Route exect path="themeforestcontact" element={<ThemeforestContact title="Dark mode" mode={mode} toogleMode={toogleMode} />} />
            <Route exect path="theme" element={<Theme />} />
            <Route exect path="Reduxsample" element={<ReduxSample />} />
            <Route exect path="formNew" element={<FormNew/>} />
            <Route exect path="pro" element={<ProductList/>} />

            <Route exect path="blog" element={<Blog/>} />
            <Route path="products/:productId" element={<SingleBlog />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
