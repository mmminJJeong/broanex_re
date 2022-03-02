import React from "react";

import "./support.css";
import ConsultingInput from "../../components/cousultinginput";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

import SmmitBnt from "../../components/smmitbnt";

export default function Consulting() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>상담문의</h2>
          </div>
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
    </>
  );
}
