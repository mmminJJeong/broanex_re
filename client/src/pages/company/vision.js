import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";

import "./company.css";
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

const VisionPoint = styled.section`
  padding: 90px 12px;
  text-align: center;
  h2 {
    font-size: 32px;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    margin-bottom: 24px;
  }
  p {
    font-size: 24px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const MissionPoint = styled.section`
  padding: 90px 12px;
  text-align: center;
  background-color: #e5f1fc;
  h2 {
    font-size: 32px;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    margin-bottom: 24px;
  }
  p {
    font-size: 24px;
    font-family: "Noto Sans KR", sans-serif;
  }
  li {
    padding: 6px 0;
  }
`;

const Core = styled.div`
  display: flex;
  justify-content: space-around;
  .core-content {
    width: 120px;
    height: 120px;
    padding: 32px 12px;
    background-color: #3472d1;
    border-radius: 50%;
    color: #fff;
    font-size: 15px;
    font-family: "NanumSquare";
    box-shadow: 5px 5px 10px #bebebe;
  }
`;
export default function Vision() {
  return (
    <>
      <BrowserView>
        {" "}
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
      </BrowserView>
      <MobileView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          <PageBanner>
            <img src="img/banner/banner-vision.jpg" alt="페이지의 배너" />
            <div className="page-title">
              <h2>브로넥스만의 비전</h2>
            </div>
          </PageBanner>

          <VisionPoint>
            <h2>Vision</h2>
            <p>
              2025 Top10 Smart Factory
              <br /> & <br />
              Automation Engineering Provider
            </p>
          </VisionPoint>
          <MissionPoint>
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
          </MissionPoint>
          <section className="values-section">
            <h2>Core Values</h2>
            <Core>
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
            </Core>
          </section>
          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
