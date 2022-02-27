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
      <header>
        <div className="header-center">
          <Link to="/">
            <h1 className="logo">
              <img src="img/main-logo.png" alt="logo" />
            </h1>
          </Link>
          <div className="gnb">
            <ul>
              <li>서비스 소개</li>
              <li>
                <Link style={linkStyle} to="/">
                  구축사례
                </Link>
              </li>
              <li>News Room</li>
              <li>고객지원</li>
              <li>기업소개</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
