import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function Haccp() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>HACCP</h2>
          </div>
        </div>
        <section className="service-page-title">
          <div className="wrapper-1">
            <div className="service-title-logo-cover">
              <img src="img/onkeeper-logo.png" alt="온키퍼 로고" />
            </div>
            <div className="service-title-contents">
              <h2>Smart HACCP</h2>
              <p>
                식품 안전 정보를 디지털화하고 중요 관리점 모니터 및 자동
                기록관리 등 디지털 기반 HACCP 종합 관리 시스템입니다.
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

        <section className="service-difference-section1">
          <div className="section-title">
            <h2>HACCP 관리 패러다임의 전환, 식품 안전 시스템의 혁신</h2>
          </div>
          <div>
            <img src="img/difference-table2.jpg" alt="차이점" />
          </div>
        </section>

        <section className="service-point">
          <div className="point-title wrapper-1">
            <h3>Smart HACCP만의 특징</h3>
          </div>

          <ul className="point-grid wrapper-1">
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>설비 데이터 수집</h2>
                  <p>
                    온도, 습도 등의 데이터를 PLC 설비를 통해 자동 수집하여 Human
                    Error를 최소화합니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>실시간 모니터링 및 알람 제공</h2>
                  <p>
                    설비 실시간 모니터링이 가능하며 이상 현상 발생 시 개인 또는
                    현장에 알람을 제공합니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>HACCP 통합 관리</h2>
                  <p>
                    통합 관리표를 제공하여 HACCP 전체 프로세스의 추이를 한눈에
                    확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>필수 요건 만족</h2>
                  <p>
                    Smart HACCP 인증을 위한 필수적인 조건을 만족하는 시스템
                    구축이 가능합니다.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <FooterSection />
      </div>
    </>
  );
}
