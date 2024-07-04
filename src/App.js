import { Routes, Route, Link } from 'react-router-dom';
import Page1 from './Start/Page1.js'; 
import Loading from './Start/Loading.js'; 
import FindEmail from './Start/FindEmail.js';
import FindEmail2 from './Start/FindEmail2.js';
import FindPwd from './Start/FindPwd.js';
import FindPwd2 from './Start/FindPwd2.js';
import SignUp from './Start/SignUp.js';
import Login from './Start/Login.js';

import LogOut from './Main/LogOut.js';
import SearchPage from './Main/SearchPage.js';
import MyPage from './Main/MyPage.js';
import MainPage from './Main/MainPage.js';


import Click from './Click.js';



function App(){


  return (
      
      <Routes>
        <Route path="/" element={ <Click/ > }/>
        <Route path="/Page1" element={ <Page1/ > }/>  
        <Route path="/Loading" element={ <Loading/ > }/>
        <Route path="/FindEmail" element={ <FindEmail/ > }/>
        <Route path="/FindEmail2" element={ <FindEmail2/ > }/>
        <Route path="/FindPwd" element={ <FindPwd/ > }/>
        <Route path="/FindPwd2" element={ <FindPwd2/ > }/>
        <Route path="/SignUp" element={ <SignUp/ > }/>
        <Route path="/Login" element={ <Login/ > }/>

        <Route path="/LogOut" element={ <LogOut/ > }/>
        <Route path="/SearchPage" element={ <SearchPage/ > }/>
        <Route path="/MyPage" element={ <MyPage/ > }/>
        <Route path="/MainPage" element={ <MainPage/ > }/>
      </Routes>

  )
}


export default App;