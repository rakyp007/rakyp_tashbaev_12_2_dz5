import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './components/menu/Menu';
import MainPage from './pages/mainPage/MainPage';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (     
  <div className="container">
<h1>
    <Menu/> 
   <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>}/>
      <Route path='userspage' element={<UsersPage/>}/>
    </Routes>
    </BrowserRouter>
</h1>
   </div>
  );
}

export default App;
