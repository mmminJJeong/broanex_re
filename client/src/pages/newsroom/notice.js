import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./newsroom.css";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

const PageBanner = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  img {
    max-width: 100%;
    height: 100%;
  }

  .page-title {
    position: absolute;
    top: 40%;
    left: 20px;
    h2 {
      font-size: 32px;
      font-family: "Noto Sans KR", sans-serif;
    }
  }
`;

const NoticeBoard = styled.div`
  margin: 0 auto;
  padding: 150px 0 0 0;
  text-align: center;
  .notice-inside {
    margin: 0;
    width: auto;
  }
  .notice-cover {
    margin: 0 auto;
  }
  .notice-contents {
    width: 100%;
  }
`;

const NoticeList = () => {
  const [viewMoreContent, setViewMoreContent] = useState([]);

  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  useEffect(() => {
    Axios.get("http://211.214.247.21:8000/notice/getNoticeList").then(
      (respones) => {
        setViewMoreContent(respones.data);
      }
    );
  }, []);

  return (
    <>
      <BrowserView>
        {" "}
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
                    <Link
                      to={`/notice/${Element.board_id}`}
                      style={linkStyle}
                      className="notice-item"
                    >
                      <div className="notice-cover"></div>
                      <div className="notice-contents">
                        <h2>{Element.title}</h2>
                        <p
                          dangerouslySetInnerHTML={{ __html: Element.content }}
                        ></p>
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
      </BrowserView>
      <MobileView>
        <div className="page-section">
          <HeaderSection />
          <PageBanner>
            <img src="img/banner/banner-notice.jpg" alt="페이지의 배너" />
            <div className="page-title">
              <h2>공지사항</h2>
            </div>
          </PageBanner>
          {/* 게시물 */}
          <NoticeBoard>
            {viewMoreContent.map((Element, index) => (
              <div className="notice-inside" key={index}>
                <Link to={`/notice/${Element.board_id}`} style={linkStyle}>
                  <div className="notice-cover"></div>
                  <div className="notice-contents">
                    <h2>{Element.title}</h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: Element.content }}
                    ></p>
                    <span className="date"></span>
                  </div>
                </Link>
              </div>
            ))}
          </NoticeBoard>

          <FooterSection />
        </div>
      </MobileView>
    </>
  );
};

export default NoticeList;
