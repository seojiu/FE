import React from 'react';
import { Link } from 'react-router-dom';



const Click = () => {
  
  return (
    <div >
        <Link to="/Page1" >Page1</Link><br/><br/>
        <Link to="/Loading" >Loading</Link><br/><br/>
        <Link to="/FindEmail" >FindEmail</Link><br/><br/>
        <Link to="/FindEmail2" >FindEmail2</Link><br/><br/>
        <Link to="/FindPwd" >FindPwd</Link><br/><br/>
        <Link to="/FindPwd2" >FindPwd2</Link><br/><br/>
        <Link to="/SignUp" >SignUp</Link><br/><br/>
        <Link to="/Login" >Login</Link><br/><br/>

        <Link to="/LogOut" >LogOut</Link><br/><br/>
        <Link to="/SearchPage" >SearchPage</Link><br/><br/>
        <Link to="/MyPage" >MyPage</Link><br/><br/>
        <Link to="/MainPage" >MainPage</Link><br/><br/>

      
    </div>
  );
};

export default Click;
