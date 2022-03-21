import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";

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
const TitleSection = styled.div`
  margin: 50px 0;
  padding: 10px 12px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    padding: 14px 0;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
    font-family: "Noto Sans KR", sans-serif;
    padding-top: 16px;
  }
`;

const TitleSection2 = styled.div`
  margin: 50px 0;
  padding: 10px 12px;
  text-align: center;

  h2 {
    font-size: 24px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    padding: 14px 0;
  }
`;

const PointSection = styled.section`
  padding: 50px 10px;
  background-color: #f8f8f8;
`;

const Point = styled.li`
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 40px;
`;

const PointItem = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
  width: auto;
  img {
    width: 100px;
    height: 100px;
  }
  h2 {
    margin: 13px 0;
  }
  p {
    text-align: left;
    margin-bottom: 20px;
    font-size: 14px;
    display: block;
    width: auto;
  }
`;

export default function Mes() {
  return (
    <>
      <BrowserView>
        <div className="page-section">
          <HeaderSection />
          <div className="page-banner">
            <img src="img/banner/banner-mes.jpg" alt="페이지의 배너" />
            <div className="page-title wrapper-1">
              <h2>MES</h2>
            </div>
          </div>
          <section className="service-page-title">
            <div className="wrapper-1">
              <div className="service-title-logo-cover">
                <img src="img/onkeeper-logo.png" alt="온키퍼 로고" />
              </div>
              <div className="service-title-contents">
                <h2>MES</h2>
                <p>
                  자재 입고부터 제품 생산 후 출하까지, 제조 데이터를 바탕으로
                  실제 업무 흐름에 맞게 관리 할 수 있는 현장 중심의 제조 실행
                  시스템입니다
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
          <section className="service-point">
            <div className="point-title wrapper-1">
              <h3>MES만의 특징</h3>
            </div>

            <ul className="point-grid wrapper-1">
              <li>
                <div className="point-item">
                  <img
                    className="p-item-cover"
                    src="img/icon/preferences.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>모든 이산형 제조 유형 지원</h2>
                    <>
                      &middot; 혼합모드 제조 <br />
                      &middot; 조립계획 및 제어 <br />
                    </>
                  </div>
                </div>
              </li>
              <li>
                <div className="point-item">
                  <img
                    className="p-item-cover"
                    src="img/icon/cogwheel.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>서비스 라이프 사이클 관리</h2>
                    <p>
                      &middot; 설비 Lodading/Unloading 및 제어 자동화 <br />
                      &middot; 품질검사 자동화 / 품종 교체 자동화 <br />
                      &middot; 물류 최적화 및 자동화
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="point-item">
                  <img
                    className="p-item-cover"
                    src="img/icon/preferences.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>품질 관리</h2>
                    <p>
                      &middot;제조 Traceability을 위한 ID 표준화
                      <br />
                      &middot;자동인식 기능과 용기(Carrier,Magazine, Tray)
                      표준화
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="point-item">
                  <img
                    className="p-item-cover"
                    src="img/icon/maintenance.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>프로젝트 라이프 사이클 관리</h2>
                    <p>
                      &middot; 예측 기반의 설비/물류 지능적 제어
                      <br />
                      &middot; 설비 無停止 기반 구축
                      <br />
                      &middot; 실시간 종합 분석 (Big Date) 및 의사결정 체계 구축
                      <br />
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section className="service-manage-section">
            <div className="service-manage-title wrapper-1">
              <h2>모든 생산과정을 체계적으로 관리 할 수 있는 MES</h2>
            </div>
            <div className="service-manage-item wrapper-1">
              <img src="img/service-management.png" alt="표" />
            </div>
          </section>
          <section className="service-difference-section">
            <div>
              <img src="img/difference-table.jpg" alt="차이점" />
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
            <img src="img/banner/banner-mes.jpg" alt="페이지의 배너" />
            <div className="page-title">
              <h2>MES</h2>
            </div>
          </PageBanner>
          <section className="service-page-title">
            <div className="service-title-logo-cover">
              <img src="img/onkeeper-logo.png" alt="온키퍼 로고" />
            </div>
            <TitleSection>
              <h2>MES</h2>
              <p>
                자재 입고부터 제품 생산 후 출하까지, <br /> 제조 데이터를
                바탕으로 실제 업무 흐름에 맞게
                <br /> 관리 할 수 있는 현장 중심의 제조 실행 시스템입니다.
              </p>
            </TitleSection>
          </section>
          <section className="service-banner">
            <img
              className="service-banner-background"
              src="img/service-banner.png"
              alt="배너"
            />
          </section>
          <PointSection>
            <div className="point-title1">
              <h3>MES만의 특징</h3>
            </div>

            <ul className="point-grid">
              <Point>
                <PointItem>
                  <img
                    className="p-item-cover"
                    src="img/icon/preferences.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>모든 이산형 제조 유형 지원</h2>
                    <>
                      &middot; 혼합모드 제조 <br />
                      &middot; 조립계획 및 제어 <br />
                    </>
                  </div>
                </PointItem>
              </Point>
              <Point>
                <PointItem>
                  <img
                    className="p-item-cover"
                    src="img/icon/cogwheel.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>서비스 라이프 사이클 관리</h2>
                    <p>
                      &middot; 설비 Lodading/Unloading 및 제어 자동화 <br />
                      &middot; 품질검사 자동화 / 품종 교체 자동화 <br />
                      &middot; 물류 최적화 및 자동화
                    </p>
                  </div>
                </PointItem>
              </Point>
              <Point>
                <PointItem>
                  <img
                    className="p-item-cover"
                    src="img/icon/preferences.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>품질 관리</h2>
                    <p>
                      &middot;제조 Traceability을 위한 ID 표준화
                      <br />
                      &middot;자동인식 기능과 용기(Carrier,Magazine, Tray)
                      표준화
                    </p>
                  </div>
                </PointItem>
              </Point>
              <Point>
                <PointItem>
                  <img
                    className="p-item-cover"
                    src="img/icon/maintenance.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>프로젝트 라이프 사이클 관리</h2>
                    <p>
                      &middot; 예측 기반의 설비/물류 지능적 제어
                      <br />
                      &middot; 설비 無停止 기반 구축
                      <br />
                      &middot; 실시간 종합 분석 (Big Date) 및 의사결정 체계 구축
                      <br />
                    </p>
                  </div>
                </PointItem>
              </Point>
            </ul>
          </PointSection>
          <section className="service-manage-section">
            <TitleSection2>
              <h2>
                모든 생산과정을 체계적으로 <br />
                관리 할 수 있는 MES
              </h2>
            </TitleSection2>
            <div>
              <img src="img/service-management.png" alt="표" />
            </div>
          </section>
          <section>
            <div>
              <img src="img/difference-table.jpg" alt="차이점" />
            </div>
          </section>
          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
