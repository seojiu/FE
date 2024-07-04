import './FindEmail.css';
import React from 'react';
import picture1 from '../images/back.png'


function FindEmail() {
  return (
    <div className="container4">
      <div className="content4">
        <div className="top-bar4">
            <img src={picture1} />
           <p className="text-4-1">이메일 찾기</p>
        </div>


        <p className="text-4-2">가입시 등록한 학번을 입력해주세요.</p>

        <div className="group4-2">
          <input type="text" placeholder="  학번을 입력해주세요." />
        </div>



        <div className="id-button-container">
          <span className="id-button-text">학번 전송</span>
        </div>
      </div>
    </div>
  );
}

export default FindEmail;
