import './FindPwd2.css';
import React from 'react';
import picture1 from '../images/back.png'

function FindPwd2() {
  return (
    <div className="container">
      <div className="content">
        <div className="top-bar6">
            <img src={picture1} />
           <p className="text-6-1">비밀번호 재설정</p>
        </div>

        <div className="image-container-6">
          <div className="image-6"></div>
        </div>

        <div className="text-container-6">
          <span className="main-text-6">임시 비밀번호 전송이 완료되었습니다</span>
          
        </div>
        
        <div className="login-container-6-1">
          <span className="login-link-6">로그인페이지로 돌아가기</span>
        </div>





      </div>
    </div>
  );
}

export default FindPwd2;
