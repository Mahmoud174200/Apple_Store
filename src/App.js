import React from 'react';
import Error from './pages/error';
import Home from './pages/home';
import './css/Home.css'
import axios from 'axios';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {
        
        <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
        
      }
    </div>
  );
}

export default App;
