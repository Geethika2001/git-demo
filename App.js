// import logo from './logo.svg';
// import './App.css';
import { About } from './components/About';
import React from "react";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import { Category } from './components/Categories';
import { ArticleList} from './components/articles/ArticleList'
function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/category' element={< Category/>}></Route>
      <Route path='/articleList' element={< ArticleList/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;


