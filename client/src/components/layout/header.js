import React, { useState } from "react";
import "./layout.css";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import styled from "styled-components";

// 모바일 css
const NavTop = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background-color: transparent;
    border: none;
    width: 80px;
    height: auto;
    color: #000;
  }
`;

const NavInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  border-bottom: 1px solid #cfcfcf;
  h3 {
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const NavBigTit = styled.li`
  border-bottom: #cfcfcf 1px solid;
  padding: 20px 10px;
  font-family: "Noto Sans KR", sans-serif;
`;

const DropDown = styled.div`
  margin-top: 10px;
  font-family: "Noto Sans KR", sans-serif;
  display: none;
  ${NavBigTit}:hover & {
    display: block;
  }
  ${NavBigTit}:focus & {
    display: block;
  }
  ul {
    margin-bottom: 10px;
  }
  h3 {
    border-top: 1px solid #cfcfcf;
    padding-top: 10px;
  }
  li {
    padding: 10px 0 0 0;
  }
`;

export default function HeaderSection() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleBar, setToggleBar] = useState(true);

  const toggleChange = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    setToggleBar(!toggleBar);
  };
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  return (
    <>
      {/* 브라우저 */}
      <BrowserView>
        <header className="header">
          <div className="wrapper-2">
            <h1 className="header-logo">
              <Link to="/" style={linkStyle} className="link">
                <img src="/img/main-logo.png" alt=""></img>
              </Link>
            </h1>

            <nav className="gnb">
              <ul className="gnb-group-01">
                <li>
                  <Link
                    to="/onkeeper"
                    style={linkStyle}
                    className="drop-anchor"
                  >
                    <h2>서비스소개</h2>
                  </Link>
                  <div className="gnb-group-02">
                    <ul className="header-drop-0-inside">
                      <li className="drop-1">
                        <Link
                          className="drop-anchor drop-anchor-1"
                          to="/onkeeper"
                          style={linkStyle}
                        >
                          <h3>스마트 팩토리</h3>
                        </Link>
                        <ul className="drop-3">
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
                        <ul className="drop-3">
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
                <li>
                  <Link
                    to="/noticeList"
                    style={linkStyle}
                    className="drop-anchor"
                  >
                    <h2>NewsRoom</h2>
                  </Link>
                  <div className="gnb-group-02">
                    <ul className="header-drop-0-inside">
                      <li className="drop-1 drop is_ko">
                        <Link
                          className="drop-anchor drop-anchor-2"
                          to="/noticeList"
                          style={linkStyle}
                        >
                          <h3>공지사항</h3>
                        </Link>
                      </li>
                      <li className="drop-1 drop is_ko">
                        <Link
                          className="drop-anchor drop-anchor-2"
                          to="/NewsList"
                          style={linkStyle}
                        >
                          <h3>News</h3>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="" style={linkStyle} className="drop-anchor">
                    <h2>고객지원</h2>
                  </Link>
                  <div className="gnb-group-02">
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
                <li>
                  <Link to="" style={linkStyle} className="drop-anchor">
                    <h2>기업소개</h2>
                  </Link>
                  <div className="gnb-group-02">
                    <ul className="header-drop-0-inside">
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
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </BrowserView>
      {/* 모바일 */}
      <MobileView>
        <NavTop>
          <h1 className="m-header-logo">
            <Link to="/" style={linkStyle} className="link">
              <img src="/img/main-logo.png" alt=""></img>
            </Link>
          </h1>
          <Button type="primary" onClick={toggleChange}>
            {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined />}
          </Button>
        </NavTop>
        {toggleMenu && (
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            theme="light"
            inlineCollapsed={toggleBar}
            onClick={onMenuClick}
          >
            <NavInfo>
              <ul>
                <NavBigTit>
                  <Link to="" style={linkStyle}>
                    <h2>서비스소개</h2>
                  </Link>
                  <DropDown>
                    <ul>
                      <li>
                        <Link to="/onkeeper" style={linkStyle}>
                          <h3>스마트 팩토리</h3>
                        </Link>
                        <ul>
                          <li>
                            <Link to="/onkeeper" style={linkStyle}>
                              구축 전략
                            </Link>
                          </li>
                          <li>
                            <Link to="/mes" style={linkStyle}>
                              MES
                            </Link>
                          </li>
                          <li>
                            <Link to="/monitoring" style={linkStyle}>
                              Monitoring
                            </Link>
                          </li>
                          <li>
                            <Link to="/HACCP" style={linkStyle}>
                              HACCP
                            </Link>
                          </li>
                          <li>
                            <Link to="/SPC" style={linkStyle}>
                              SPC
                            </Link>
                          </li>
                          <li>
                            <Link to="/EMS" style={linkStyle}>
                              EMS
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to="/onkeeper" style={linkStyle}>
                          <h3>스마트 서비스</h3>
                        </Link>
                        <ul>
                          <li>
                            <Link to="" style={linkStyle}>
                              물류로직
                            </Link>
                          </li>
                          <li>
                            <Link to="" style={linkStyle}>
                              교육-LMS
                            </Link>
                          </li>
                          <li>
                            <Link to="" style={linkStyle}>
                              쇼핑몰
                            </Link>
                          </li>
                          <li>
                            <Link to="" style={linkStyle}>
                              내방객 관리
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </DropDown>
                </NavBigTit>
                <NavBigTit>
                  <Link to="/construc-example" style={linkStyle}>
                    <h2>구축사례</h2>
                  </Link>
                </NavBigTit>
                <NavBigTit>
                  <Link to="" style={linkStyle}>
                    <h2>NewsRoom</h2>
                  </Link>
                  <DropDown>
                    <ul>
                      <li>
                        <Link to="/noticeList" style={linkStyle}>
                          <h3>공지사항</h3>
                        </Link>
                      </li>
                      <li>
                        <Link to="/NewsList" style={linkStyle}>
                          <h3>News</h3>
                        </Link>
                      </li>
                    </ul>
                  </DropDown>
                </NavBigTit>
                <NavBigTit>
                  <Link to="" style={linkStyle}>
                    <h2>고객지원</h2>
                  </Link>
                  <DropDown>
                    <ul>
                      <li>
                        <Link to="/consulting" style={linkStyle}>
                          <h3>상담문의</h3>
                        </Link>
                      </li>
                      <li>
                        <Link to="" style={linkStyle}>
                          <h3>유지보수</h3>
                        </Link>
                      </li>
                    </ul>
                  </DropDown>
                </NavBigTit>
                <NavBigTit>
                  <Link to="" style={linkStyle}>
                    <h2>기업소개</h2>
                  </Link>
                  <DropDown>
                    <ul>
                      <li>
                        <Link to="/company" style={linkStyle}>
                          <h3>회사소개</h3>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/brand_ci" style={linkStyle}>
                          <h3>브랜드 CI</h3>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link to="/vision" style={linkStyle}>
                          <h3>브로넥스의 비전</h3>
                        </Link>
                      </li>
                      <li>
                        <Link to="/location-map" style={linkStyle}>
                          <h3>오시는 길</h3>
                        </Link>
                      </li>
                    </ul>
                  </DropDown>
                </NavBigTit>
              </ul>
            </NavInfo>
          </Menu>
        )}
      </MobileView>
    </>
  );
}
