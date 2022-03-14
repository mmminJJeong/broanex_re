import React from "react";
import { useNavigate } from "react-router-dom";
import "./newsroom.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function NewsPost() {
  const navigate = useNavigate(); // 뒤로가기 v6라서 usehistory =>navigate
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/banner/banner-card.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>뉴스</h2>
          </div>
        </div>
        <section className="news-board">
          <div className="wrapper-1">
            <h2 className="news-big-title">
              <span>최상의 솔루션을 제공하는 브로넥스!</span>
              각종 브로넥스의소식을 확인해보세요
            </h2>
            <div className="post-news-content">
              <div className="post-title">준비중입니다</div>
              <div className="post-contents"></div>
            </div>
            <button
              className="post-view-go-list-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              목록보기
            </button>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
}
