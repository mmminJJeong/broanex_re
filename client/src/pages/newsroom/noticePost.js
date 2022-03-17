import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import "./newsroom.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function NoticePost() {
  const navigate = useNavigate(); // 뒤로가기 v6라서 usehistory =>navigate
  const [data, setData] = useState({});
  const { board_id } = useParams();

  useEffect(() => {
    try {
      Axios.get("http://211.214.247.21:8000/notice/getNoticePost", {
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
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="/img/banner/banner-card.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>공지사항</h2>
          </div>
        </div>
        <section className="news-board">
          <div className="wrapper-1">
            <h2 className="news-big-title">
              <span>최상의 솔루션을 제공하는 브로넥스!</span>
              각종 브로넥스의소식을 확인해보세요
            </h2>
            <div className="post-news-content">
              {data ? (
                <>
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
    </>
  );
}
