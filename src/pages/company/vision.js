import React from "react";

import "./company.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function Vision() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/banner/banner-vision.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>브로넥스만의 비전</h2>
          </div>
        </div>

        <section className="vision-point">
          <div className="wrapper-1">
            <h2>Vision</h2>
            <p>2025 Top10 Smart Factory & Automation Engineering Provider</p>
          </div>
        </section>
        <section className="mission-section">
          <div className="wrapper-1">
            <h2>Mission</h2>
            <p>I Create Tomorrow by Lmagining, Creating & Transforming</p>
            <ul className="mission-contents">
              <li>
                기술 선도를 위한 <span>'창조'</span>
              </li>
              <li>
                디지털 융합 혁명을 주도하는 <span>'도전'</span>
              </li>
              <li>
                고객의 마음으로 하는 <span>'실천'</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="values-section">
          <h2>Core Values</h2>
          <div className="wrapper-1 core-index">
            <div className="core-content">
              <p>신뢰</p>
              <span>(Best Place ; 信)</span>
            </div>
            <div className="core-content">
              <p>도전</p>
              <span>(Best Pioneer ; 道)</span>
            </div>
            <div className="core-content">
              <p>감동</p>
              <span>(Best Partner ; 幸)</span>
            </div>
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
}
