import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function Spc() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>Monitoring</h2>
          </div>
        </div>
        <section className="service-page-title">
          <div className="wrapper-1">
            <div className="service-title-logo-cover">
              <img src="img/onkeeper-logo.png" alt="온키퍼 로고" />
            </div>
            <div className="service-title-contents">
              <h2>Monitoring</h2>
              <p>
                ONKEEPER는 생산, 설비, 품질, 에너지 등의 KPI를 기준으로 시스템
                및 공장 현황을 통합 분석 및 실시간 모니터링하여,
                <br /> 공장의 종합상황실 역할을 하고 최적의 공장 운영 지표를
                제공합니다.
              </p>
            </div>
          </div>
        </section>
        <section className="service-banner">
          <img
            className="service-banner-background"
            src="img/service-banner.png"
            alt="배너"
          />
        </section>
        <section className="service-point"></section>
        <section className="service-manage-section"></section>
        <section className="service-difference-section"></section>
        <FooterSection />
      </div>
    </>
  );
}
