import React from 'react';
import Error from './pages/error';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import './css/Home.css'
import axios from 'axios';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {
        
        <BrowserRouter>
        <Routes>
        <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/forgot" element={<ForgotPassword/>} />
         <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<Error/>}/>
        </Routes>
        </BrowserRouter>
        
      }
    </div>
  );
}

export default App;
