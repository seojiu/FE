import './FindEmail2.css';
import React from 'react';
import picture1 from '../images/back.png'



function FindEmail2() {
  return (
    <div className="container">
      <div className="content">
        <div className="top-bar5">
            <img src={picture1} />
           <p className="text-5-1">이메일 찾기</p>
        </div>

        <div className="image-container-5">
          <div className="image-5"></div>
        </div>

        <div className="text-container-5">
          <span className="main-text-5">__ 님의 이메일은</span>
          <span className="sub-text-5">_____@jnu.ac.kr</span>
          <span className="main-text-5-1">입니다</span>
        </div>
        
        <div className="login-container-5-1">
          <span className="login-link-5">로그인페이지로 돌아가기</span>
        </div>

        <div className="login-container-5-2">
          <span className="login-text-5">비밀번호를 잊어버리셨나요?</span>
          <span className="login-link-5">비밀번호 재설정</span>
        </div>



      </div>
    </div>
  );
}

export default FindEmail2;
