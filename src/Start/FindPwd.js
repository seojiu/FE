import './FindPwd.css';
import React from 'react';
import picture1 from '../images/back.png'

function FindPwd() {
  return (
    <div className="container">
      <div className="content">
        <div className="top-bar3">
            <img src={picture1} />
           <p className="text-4-1">비밀번호 재설정</p>
        </div>


        <p className="text-4-2">가입시 등록한 이메일 주소를 입력해주세요.<br/>
        임시비밀번호를 메일로 보내드립니다.</p>

        <div className="input-4-1">
          <input type="text" placeholder="  이메일을 입력해주세요." />
        </div>



        <div className="pwd-button-container">
          <span className="pwd-button-text">이메일 전송</span>
        </div>
      </div>
    </div>
  );
}

export default FindPwd;
