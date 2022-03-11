import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./newsroom.css";
import parse from "html-react-parser";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

const NoticeList = () => {
  const [viewMoreContent, setViewMoreContent] = useState([]);

  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  useEffect(() => {
    Axios.get("http://localhost:8000/notice/getNoticeList").then(respones => {
      setViewMoreContent(respones.data);
    });
  }, []);

  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/banner/banner-notice.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>공지사항</h2>
          </div>
        </div>
        {/* 게시물 */}
        <section className="notice-board">
          <div className="wrapper-1">
            <div className="notice-list">
              {viewMoreContent.map((Element, index) => (
                <div className="notice-inside" key={index}>
                  <Link to="/notice" style={linkStyle} className="notice-item">
                    <div className="notice-cover"></div>
                    <div className="notice-contents">
                      <h2>{Element.title}</h2>
                      <p>{parse(Element.content)}</p>
                      <span className="date"></span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
};

export default NoticeList;
