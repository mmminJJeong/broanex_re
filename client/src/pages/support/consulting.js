import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";

import "./support.css";
import ConsultingInput from "../../components/cousultinginput";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

import SmmitBnt from "../../components/smmitbnt";

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

// 제목 텍스트
const Title01 = styled.div`
  position: absolute;
  top: 38%;
  left: 18%;
  h2 {
    color: #000;
    font-size: 54px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
  }
`;
const PageSection = styled.section`
  padding: 150px 8px;
`;
export default function Consulting() {
  return (
    <>
      <BrowserView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          <div className="page-banner">
            <img src="img/banner/solution-banner.jpg" alt="페이지의 배너" />
            <Title01 className="wrapper-1">
              <h2>상담문의</h2>
            </Title01>
          </div>

          <section className="page-section page-section-container">
            <div className="wrapper-1">
              <div className="consulting-section">
                <div className="consulting-contents">
                  <label>이름</label>
                  <ConsultingInput />
                </div>
                <div className="consulting-contents">
                  <label>E-Mail</label>
                  <ConsultingInput />
                </div>
                <div className="consulting-contents">
                  <label>제목</label>
                  <ConsultingInput />
                </div>
                <div className="consulting-contents">
                  <label>내용</label>
                  <input className="form-control1 suject"></input>
                </div>

                <SmmitBnt name="보내기" />
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
            <img src="img/page-banner.jpg" alt="페이지의 배너" />
            <div className="page-title wrapper-1">
              <h2>상담문의</h2>
            </div>
          </PageBanner>

          <PageSection>
            <div className="consulting-section">
              <div className="consulting-contents">
                <label>이름</label>
                <ConsultingInput />
              </div>
              <div className="consulting-contents">
                <label>E-Mail</label>
                <ConsultingInput />
              </div>
              <div className="consulting-contents">
                <label>제목</label>
                <ConsultingInput />
              </div>
              <div className="consulting-contents">
                <label>내용</label>
                <input className="form-control1 suject"></input>
              </div>

              <SmmitBnt name="보내기" />
            </div>
          </PageSection>

          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
