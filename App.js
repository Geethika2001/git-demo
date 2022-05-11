// import logo from './logo.svg';
// import './App.css';
import { About } from './components/About';
import React from "react";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
// export default function About () {
//   return (
//     <Router>
//       <About/>     
//     </Router>
//   )
// }
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;


