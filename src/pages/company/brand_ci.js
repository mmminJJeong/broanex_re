import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function brandCi() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>브로넥스 CI</h2>
          </div>
        </div>

        <section className="company-CI">
          <div className="wrapper-1">
            <p>
              새로움과 젊음, 역동성을 겸비한 새로운 기술력의 완전성과 다양한
              기업과의 협력과 공동연구를 통한 형태의 결합을 나타내고 있습니다.
              혁신적인 기술과 현실적인 기술의 조화를 위한 브로넥스만의 포부가
              담겨 있습니다.
            </p>
          </div>
        </section>
        <section className="service-manage-section"></section>
        <section className="service-difference-section"></section>
        <FooterSection />
      </div>
    </>
  );
}
