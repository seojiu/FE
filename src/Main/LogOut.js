import './LogOut.css';
import React from 'react';
import picture1 from '../images/back.png'

function LogOut() {
  return (
    <div className="container">
      <div className="content">
        <div className="top-bar10">
          <img src={picture1} />
          <p className="text-10-1">개인정보 수정</p>
        </div>

        <div className="line-10">
          <div className="line-bar-10"></div>
        </div>

        <div className= "text-group-10">
          <p className="text-10-2">로그아웃</p>
          <p className="text-10-2">탈퇴하기</p>
        </div>


      </div>

    </div>
  );
}

export default LogOut;