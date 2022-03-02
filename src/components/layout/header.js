import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

export default function HeaderSection() {
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  return (
    <>
      <header className="header">
        <div className="wrapper-1">
          <div className="header-inside">
            <Link to="/" className="header-logo" style={linkStyle}>
              <span className="header-logo-contents">
                <img src="img/main-logo.png" alt=""></img>
              </span>
            </Link>

            <nav className="header-menu">
              <div className="header-menu-list">
                <ul>
                  <li id="list-01">
                    <Link
                      to="/onkeeper"
                      style={linkStyle}
                      className="drop-anchor"
                    >
                      <h2>서비스소개</h2>
                    </Link>
                    <div className="header-drop-0 list-01">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-1"
                            to="/onkeeper"
                            style={linkStyle}
                          >
                            <h3>스마트 팩토리</h3>
                          </Link>
                          <ul>
                            <li>
                              <Link
                                to="/onkeeper"
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                구축 전략
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/mes"
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                MES
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/monitoring"
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                Monitoring
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/HACCP"
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                HACCP
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/SPC"
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                SPC
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/EMS"
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                EMS
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-1"
                            to="/onkeeper"
                            style={linkStyle}
                          >
                            <h3>스마트 서비스</h3>
                          </Link>
                          <ul>
                            <li>
                              <Link
                                to=""
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                물류로직
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                교육-LMS
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                쇼핑몰
                              </Link>
                            </li>
                            <li>
                              <Link
                                to=""
                                style={linkStyle}
                                className="drop-anchor drop-anchor-2"
                              >
                                내방객 관리
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/construc-example"
                      style={linkStyle}
                      className="drop-anchor"
                    >
                      <h2>구축사례</h2>
                    </Link>
                  </li>
                  <li id="list-02">
                    <Link
                      to="/notice"
                      style={linkStyle}
                      className="drop-anchor"
                    >
                      <h2>NewsRoom</h2>
                    </Link>
                    <div className="header-drop-0 list-02">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-2"
                            to="/notice"
                            style={linkStyle}
                          >
                            <h3>공지사항</h3>
                          </Link>
                        </li>
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-2"
                            to="/cardnews"
                            style={linkStyle}
                          >
                            <h3>News Card</h3>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li id="list-03">
                    <Link to="" style={linkStyle} className="drop-anchor">
                      <h2>고객지원</h2>
                    </Link>
                    <div className="header-drop-0 list-03">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-2"
                            to="/consulting"
                            style={linkStyle}
                          >
                            <h3>상담문의</h3>
                          </Link>
                        </li>
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-2"
                            to=""
                            style={linkStyle}
                          >
                            <h3>유지보수</h3>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li id="list-04">
                    <Link to="" style={linkStyle} className="drop-anchor">
                      <h2>기업소개</h2>
                    </Link>
                    <div className="header-drop-0 list-04">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-2"
                            to=""
                            style={linkStyle}
                          >
                            <h3>사업개요</h3>
                          </Link>
                          <ul>
                            <li className="drop-1 drop is_ko">
                              <Link
                                className="drop-anchor drop-anchor-2"
                                to="/company"
                                style={linkStyle}
                              >
                                <h3>회사소개</h3>
                              </Link>
                            </li>{" "}
                            <li className="drop-1 drop is_ko">
                              <Link
                                className="drop-anchor drop-anchor-2"
                                to="/brand_ci"
                                style={linkStyle}
                              >
                                <h3>브랜드 CI</h3>
                              </Link>
                            </li>{" "}
                            <li className="drop-1 drop is_ko">
                              <Link
                                className="drop-anchor drop-anchor-2"
                                to="/vision"
                                style={linkStyle}
                              >
                                <h3>브로넥스의 비전</h3>
                              </Link>
                            </li>
                            <li className="drop-1 drop is_ko">
                              <Link
                                className="drop-anchor drop-anchor-2"
                                to="/location-map"
                                style={linkStyle}
                              >
                                <h3>오시는 길</h3>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
