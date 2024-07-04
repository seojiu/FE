import React, { useState } from 'react';
import './SignUp.css';
import picture1 from '../images/back.png'


const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword] = useState(false);
  const [showConfirmPassword] = useState(false);

  const [allChecked, setAllChecked] = useState(false);
  const [required1, setRequired1] = useState(false);
  const [required2, setRequired2] = useState(false);
  const [optional, setOptional] = useState(false);

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
 

  const handleAllChecked = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setRequired1(newValue);
    setRequired2(newValue);
    setOptional(newValue);
  };

  const handleRequired1Change = () => setRequired1(!required1);
  const handleRequired2Change = () => setRequired2(!required2);
  const handleOptionalChange = () => setOptional(!optional);

  return (
    <div className="container7">
      <div className="content7">
        <div className="top-bar7">
            <img src={picture1} />
            <p className="text-7-1">이메일로 가입하기</p>     
        </div>
        <div className="signup-form">


        
            <div className="group">

                <div className="password-field">    
                        <input type="text" placeholder="이름" required />
                </div>    
                <div className="password-field">    
                        <input type="email" placeholder="이메일주소" required />
                </div>     
                <div className="password-field">    
                        <input type="text" placeholder="학번 6자리" required />
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
                <div className="password-field">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="비밀번호 확인"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                </div>

          </div>



          <div className="checkbox-group">

            <label className="check-all">
              <input type="checkbox" checked={allChecked} onChange={handleAllChecked} />
              <span>전체 동의</span>
            </label>

            <div className="line">
                <div className="line-bar"></div>
            </div>



            <label className="check-one">
              <input type="checkbox" checked={required1} onChange={handleRequired1Change} required />
              <span>[필수] 서비스 이용약관 동의</span>
            </label>
            <label className="check-one">
              <input type="checkbox" checked={required2} onChange={handleRequired2Change} required />
              <span>[필수] 개인정보 수집 및 이용 동의</span>
            </label>
            <label className="check-one">
              <input type="checkbox" checked={optional} onChange={handleOptionalChange} />
              <span>[선택] 마케팅 정보 수신 동의</span>
            </label>
          </div>



          <div className="join-button-container">
            <span className="join-button-text">이메일로 가입하기</span>
          </div>
        


        </div>
        
      </div>
    </div>
  );
};

export default SignUp;
