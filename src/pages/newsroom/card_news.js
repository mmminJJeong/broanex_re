import React from "react";
import { Link } from "react-router-dom";
import "./newsroom.css";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function CardNews() {
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>카드뉴스</h2>
          </div>
        </div>

        <section className="news-board">
          <div className="wrapper-1">
            <ul className="news-list">
              <li className="news-item">
                <Link to="/" style={linkStyle}>
                  <div className="news-cover"></div>
                  <div className="news-contents">
                    <h2>안녕하세요 예제입니다</h2>

                    <span className="date">2022-02-28</span>
                  </div>
                </Link>
              </li>
              <li className="news-item">
                <Link to="/" style={linkStyle}>
                  <div className="news-cover"></div>
                  <div className="news-contents">
                    <h2>안녕하세요 예제입니다</h2>

                    <span className="date">2022-02-28</span>
                  </div>
                </Link>
              </li>
              <li className="news-item">
                <Link to="/" style={linkStyle}>
                  <div className="news-cover"></div>
                  <div className="news-contents">
                    <h2>안녕하세요 예제입니다</h2>

                    <span className="date">2022-02-28</span>
                  </div>
                </Link>
              </li>
              <li className="news-item">
                <Link to="/" style={linkStyle}>
                  <div className="news-cover"></div>
                  <div className="news-contents">
                    <h2>안녕하세요 예제입니다</h2>

                    <span className="date">2022-02-28</span>
                  </div>
                </Link>
              </li>
              <li className="news-item">
                <Link to="/" style={linkStyle}>
                  <div className="news-cover"></div>
                  <div className="news-contents">
                    <h2>안녕하세요 예제입니다</h2>

                    <span className="date">2022-02-28</span>
                  </div>
                </Link>
              </li>
              <li className="news-item">
                <Link to="/" style={linkStyle}>
                  <div className="news-cover"></div>
                  <div className="news-contents">
                    <h2>안녕하세요 예제입니다</h2>

                    <span className="date">2022-02-28</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
}
