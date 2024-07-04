import './MyPage.css';
import React from 'react';
import picture1 from '../images/back.png';
import file from '../images/file.png';
import file2 from '../images/file2.png';
import file3 from '../images/file3.png';
import home from '../images/home.png';
import heart from '../images/heart.png';
import my from '../images/my.png';
import modify from '../images/modify.png';
import my2 from '../images/my2.png';
import go from '../images/go.png';




function MyPage() {
  return (
    <div className="container">
      <div className="content">

        <div className="top-bar11">
          <img src={picture1} alt="back" />
          <p className="text-11-1">내 정보</p>
        </div>

        <h3 className="text-11-2">마이페이지</h3>

        <div className="profile-section">
          <div className="profile-card">
            <div className="profile-picture"></div>
            <p className="profile-name">이름</p>
            <p className="profile-subtitle">AI대학 인공지능학부</p>

            <div className="profile-modify">
            <img className="image-11-1" src={my2} alt="my2"/>
            <p>개인정보 수정</p>
            <img className="image-11-2"src={go} alt="go"/>

            </div>
          </div>
        </div>

        <div className="activity-section">

          <div className="activity-header">
            <p className="text-11-3">나의 활동</p>
          </div>

          <div className="activity-icons">

            <div className="activity-item">
              <img src={file} alt="file"/>
              <p className="text-11-4">신청현황</p>
            </div>

            <div className="activity-item">
              <img src={file} alt="file"/>
              <p className="text-11-4">대여현황</p>
            </div>

            <div className="activity-item">
              <img src={heart} alt="heart"/>
              <p className="text-11-4">내가 좋아한 게시물</p>
            </div>

          </div>


          <div className="activity-list">
            <div>
              <img src={file2} alt="file2"/> 
              <p className="text-11-5">내가 쓴 글</p>
            </div>
            <div>
              <img src={file2} alt="file2"/>
              <p className="text-11-5">댓글 단 글</p>
            </div>
          </div>

        </div>

        <div className="bottom-nav">
          <div>
            <img src={home} alt="home"/>
            <p className="text-11-6">홈</p>
          </div>

          <div>
            <img src={file3} alt="file3"/>
            <p className="text-11-6">대여현황</p>
          </div>
          <div>
            <img src={my} alt="my"/>
            <p className="text-11-6">마이페이지</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MyPage;
