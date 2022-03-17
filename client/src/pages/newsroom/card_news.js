import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./newsroom.css";
import Axios from "axios";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function CardNews() {
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  const [viewContent, setViewContent] = useState([]);

  // 글 목록 불러오기
  useEffect(() => {
    Axios.get("http://211.214.247.21:8000/news/getNewsList").then(
      (response) => {
        setViewContent(response.data);
      }
    );
  }, []);

  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="/img/banner/banner-card.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>카드뉴스</h2>
          </div>
        </div>

        <section className="news-board">
          <div className="wrapper-1 news-list ">
            {/* 맵으로 받아오기 */}
            {viewContent.map((Element, index) => (
              <div className="news-item-02" key={index}>
                <Link to={`/news/${Element.board_id}`} style={linkStyle}>
                  <div className="news-cover"></div>
                  <div className="news-contents">
                    <h2>{Element.title}</h2>

                    <span className="date">{Element.date}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
}
