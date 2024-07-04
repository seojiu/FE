import './MainPage.css';
import React from 'react';
import Logo from '../images/Logo.png'
import file3 from '../images/file3.png';
import home from '../images/home.png';
import my from '../images/my.png';
import bell from '../images/bell.png';
import search from '../images/search.png';
import postEx from '../images/postEx.png';
import comment from '../images/comment.png';
import heart2 from '../images/heart2.png';

function MainPage() {
  return (
    <div className="container">
      <div className="content">
        <div className="top-bar12">
          <img className="image-12-1" src={bell} />
          <img className="image-12-2" src={Logo} />
          <img className="image-12-3" src={search} />
        </div>

        <div className="posts">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <div className="margin-12"></div>
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


function Post() {
  return(
    <div className="post-main">
      <img src={postEx} alt=""/>

      <div className="post-group">
        <div className="post-sting-group">
          <p className="post-text-1">천막 9개</p>
          <p className="post-text-2"> 사범대 학생회 · 3일전</p>
          <p className="post-text-3">3명이 요청한 상태예요!</p>
        </div>

        <div className="post-heart">
        <img src={comment} alt="comment"/> <p>3</p>
        <img src={heart2} alt="heart2"/> <p>11</p>
        </div>

      </div>

    </div>

  );

}

export default MainPage;