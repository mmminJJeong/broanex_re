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
                  <li>
                    <Link
                      to="/onkeeper"
                      style={linkStyle}
                      className="drop-anchor"
                    >
                      <h2>서비스소개</h2>
                    </Link>
                    <div className="header-drop-0">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-1"
                            to="/onkeeper"
                            style={linkStyle}
                          >
                            <h3>스마트 팩토리</h3>
                          </Link>
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
                  <li>
                    <Link
                      to="/notice"
                      style={linkStyle}
                      className="drop-anchor"
                    >
                      <h2>NewsRoom</h2>
                    </Link>
                    <div className="header-drop-0">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-1"
                            to="/"
                            style={linkStyle}
                          >
                            <h3>공지사항</h3>
                          </Link>
                        </li>
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-1"
                            to="/"
                            style={linkStyle}
                          >
                            <h3>News Card</h3>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/onkeeper"
                      style={linkStyle}
                      className="drop-anchor"
                    >
                      <h2>고객지원</h2>
                    </Link>
                    <div className="header-drop-0">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-1"
                            to="/"
                            style={linkStyle}
                          >
                            <h3>상담</h3>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/onkeeper"
                      style={linkStyle}
                      className="drop-anchor"
                    >
                      <h2>기업소개</h2>
                    </Link>
                    <div className="header-drop-0">
                      <ul className="header-drop-0-inside">
                        <li className="drop-1 drop is_ko">
                          <Link
                            className="drop-anchor drop-anchor-1"
                            to="/"
                            style={linkStyle}
                          >
                            <h3>사업개요</h3>
                          </Link>
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
