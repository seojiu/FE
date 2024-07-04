import './Page1.css';
import React from 'react';

function Page1() {
  return (
    <div className="container">
      <div className="content">
        <div className="image-container">
          <div className="image"></div>
        </div>

        <div className="text-container">
          <span className="main-text">전남대 친구가 쉽게 빌려주는 <br/>물건 이야기</span>
          <span className="sub-text">지금 바로 시작해보세요 !</span>
        </div>

        <div className="login-container">
          <span className="login-text">이미 회원이신가요?</span>
          <span className="login-link">로그인</span>
        </div>

        <div className="button-container">
          <span className="button-text">시작하기</span>
        </div>
      </div>
    </div>
  );
}

export default Page1;
