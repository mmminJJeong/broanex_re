import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import "./newsroom.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";

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

export default function NewsPost() {
  const navigate = useNavigate(); // 뒤로가기 v6라서 usehistory =>navigate
  const [data, setData] = useState({});
  const { board_id } = useParams();

  useEffect(() => {
    try {
      Axios.get("http://211.214.247.21:8000/news/getNewsPost", {
        params: {
          board_id: board_id,
        },
      }).then((response) => {
        setData(response.data[0]);
      });
    } catch (e) {
      console.error(e.message);
    }
  }, [board_id]);

  return (
    <>
      <BrowserView>
        <div className="page-section">
          <HeaderSection />
          <div className="page-banner">
            <img src="/img/banner/banner-card.jpg" alt="페이지의 배너" />
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
                <div className="post-title">
                  <div className="contents-tit">
                    <ul>
                      <li className="post-date">
                        <span>작성일</span>
                        {data.date}
                      </li>
                      <li>
                        <span>제목</span>
                        {data.title}
                      </li>
                    </ul>
                  </div>
                </div>
                {data ? (
                  <>
                    <div
                      className="post-contents"
                      dangerouslySetInnerHTML={{ __html: data.content }}
                    ></div>
                  </>
                ) : (
                  "해당 게시글을 찾을 수 없습니다."
                )}
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
      </BrowserView>
      <MobileView>
        <div className="page-section">
          <HeaderSection />
          <PageBanner>
            <img src="/img/banner/banner-card.jpg" alt="페이지의 배너" />
            <div className="page-title wrapper-1">
              <h2>뉴스</h2>
            </div>
          </PageBanner>
          <section className="news-board">
            <h2 className="news-big-title">
              <span>최상의 솔루션을 제공하는 브로넥스!</span>
              각종 브로넥스의소식을
              <br /> 확인해보세요
            </h2>
            <div className="post-news-content">
              <div className="post-title">
                <div className="contents-tit">
                  <ul>
                    <li className="post-date">
                      <span>작성일</span>
                      {data.date}
                    </li>
                    <li>
                      <span>제목</span>
                      {data.title}
                    </li>
                  </ul>
                </div>
              </div>
              {data ? (
                <>
                  <div
                    className="post-contents"
                    dangerouslySetInnerHTML={{ __html: data.content }}
                  ></div>
                </>
              ) : (
                "해당 게시글을 찾을 수 없습니다."
              )}
            </div>
            <button
              className="post-view-go-list-btn"
              onClick={() => {
                navigate(-1);
              }}
            >
              목록보기
            </button>
          </section>

          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
