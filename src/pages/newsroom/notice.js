import React from "react";
import { Link } from "react-router-dom";
import "./newsroom.css";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

const Notice = () => {
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
            <h2>공지사항</h2>
          </div>
        </div>
        {/* 게시물 */}
        <section className="notice-board">
          <div className="wrapper-1">
            <ul className="notice-list">
              <li>
                <Link to="/" style={linkStyle} className="notice-item">
                  <div className="notice-cover"></div>
                  <div className="notice-contents">
                    <h2>안녕하세요 예제입니다</h2>
                    <p>
                      인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                      남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지
                      용감하고 청춘의 과실이 그것은 새가 그들은 스며들어
                      위하여서. 소금이라 인간의 얼마나 안고, 바이며,
                      철환하였는가? 더운지라 곳으로 하는 설산에서 위하여, 수
                      보라. 인간은 예수는 너의 더운지라 그리하였는가? 힘차게
                      청춘에서만 석가는 힘있다.
                    </p>
                    <span className="date"></span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" style={linkStyle} className="notice-item">
                  <div className="notice-cover"></div>
                  <div className="notice-contents">
                    <h2>안녕하세요 예제입니다</h2>
                    <p>
                      인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                      남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지
                      용감하고 청춘의 과실이 그것은 새가 그들은 스며들어
                      위하여서. 소금이라 인간의 얼마나 안고, 바이며,
                      철환하였는가? 더운지라 곳으로 하는 설산에서 위하여, 수
                      보라. 인간은 예수는 너의 더운지라 그리하였는가? 힘차게
                      청춘에서만 석가는 힘있다.
                    </p>
                    <span className="date"></span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" style={linkStyle} className="notice-item">
                  <div className="notice-cover"></div>
                  <div className="notice-contents">
                    <h2>안녕하세요 예제입니다</h2>
                    <p>
                      인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                      남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지
                      용감하고 청춘의 과실이 그것은 새가 그들은 스며들어
                      위하여서. 소금이라 인간의 얼마나 안고, 바이며,
                      철환하였는가? 더운지라 곳으로 하는 설산에서 위하여, 수
                      보라. 인간은 예수는 너의 더운지라 그리하였는가? 힘차게
                      청춘에서만 석가는 힘있다.
                    </p>
                    <span className="date"></span>
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
};

export default Notice;
