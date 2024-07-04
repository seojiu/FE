import React, { useState } from 'react';
import './Login.css';
import picture1 from '../images/back.png'



const Login = () => {
  const [password, setPassword] = useState('');


  const [showPassword] = useState(false);


  const handlePasswordChange = (e) => setPassword(e.target.value);
 


  
  return (
    <div className="container8">
      <div className="content8">
        <div className="top-bar8">
            <img src={picture1}  />
            <p className="text-8-1">로그인</p>     
        </div>
        <div className="login-form">


        
            <div className="login-group">

                <div className="password-field">    
                        <input type="email" placeholder="이메일주소" required />
                </div>    
               
                <div className="password-field">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="비밀번호"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>

            </div>


            <div className="login-container-8-1">
                <span className="login-link-8-1">이메일 찾기</span>
            </div>




            <div className="Login-button-container">
                <span className="Login-button-text">로그인</span>
            </div>

            <div className="login-container-8-2">
                <span className="login-text-8-1">아직 계정이 없으신가요?</span>
                <span className="login-link-8-3">회원가입</span>
            </div>
        
          
        


        </div>
        <div className="ad"></div>

        
      </div>
    </div>
  );
};

export default Login;
