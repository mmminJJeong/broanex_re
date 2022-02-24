import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function OnKeeper() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>브로넥스만의 솔루션</h2>
          </div>
        </div>
        <section className="onkeeper-title-section">
          <div className="wrapper-1">
            <img
              className="title-logo-cover"
              src="img/onkeeper-logo.png"
              alt="온키퍼 로고"
            />
            <div className="title-contents">
              <h2>대한민국 제조업 생태계를 뒤바꿀 비대면 서비스 플랫폼</h2>
              <p>
                중소기업용 마이크로 서비스 아키텍처 기반의 제조 어플리케이션
              </p>
            </div>
          </div>
        </section>
        <section className="onkeeper-banner-sec">
          <img
            className="banner-background-img"
            src="img/onkeeper-middle-banner.png"
            alt="배너"
          />
        </section>
        <section className="onkeeper-contents1">
          <div className="contents1-title  wrapper-1">
            <h2>온키퍼 구축내용</h2>
            <p>
              온키퍼는 데이터 수집 및 제어 단계부터 공장 지능화까지,
              스마트팩토리 구축을 위한 전 과정을 지원할 수 있는 솔루션입니다.
            </p>
          </div>
          <div className="contents1-cover-img  wrapper-1">
            <img src="img/table-mark.png" alt="구축내용 표" />
          </div>
        </section>
        <section className="onkeeper-contents2">
          <img src="img/onkeeper-bottom-banner.jpg" alt="배너입니다" />
        </section>

        {/* 온키퍼 포인트 */}
        <section className="onkeeper-point">
          <div className="wrapper-1">
            <div className="on-point-title">
              <h2>온키퍼만의 특징</h2>
            </div>
            <div className="on-point">
              <ul className="on-point-group">
                <li>
                  <div className="point-item-cover">
                    <img src="img/point01.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>모든 이산형 제조 유형 지원</h3>
                    <ul>
                      <li>혼합 모드 제조</li>
                      <li>조립계획 및 제어</li>
                      <li>고객별 BOM(Bill of Materials) 및 작업공정</li>
                      <li>생산 현장 제어</li>
                      <li>반복형 생산</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="point-item-cover">
                    <img src="img/point02.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>서비스 라이프 사이클 관리</h3>
                    <ul>
                      <li>고객컨텐 센터 관리</li>
                      <li>보증 및 클레임 관리</li>
                      <li>MRO(Maintenance, Repair, Overhaul)</li>
                      <li>서비스 센터 관리</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="point-item-cover">
                    <img src="img/point03.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>품질 관리</h3>
                    <ul>
                      <li>APQP(Advanced Product Quality Planning)</li>
                      <li>통계 기반 품질 관리(샘플링 계획 포함)</li>
                      <li>초도품 검사</li>
                      <li>품질관리자 대시보드</li>
                      <li>부적합 보고</li>
                      <li>
                        엔터프라이즈 소셜 협업 기능 내장 <br />
                        -계획 및 품질 문제 해결 지원
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="point-item-cover">
                    <img src="img/point04.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>프로젝트 라이프 사이클 관리</h3>
                    <ul>
                      <li>사전계약 약관</li>
                      <li>입찰 및 견적, 제안서 관리</li>
                      <li>획득 가치(EV) 관리</li>
                      <li>제품 원가 원장</li>
                      <li>프로젝트 수요/공급 조정</li>
                      <li>공급자 분할 결제</li>
                      <li>하도급 계약</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
}
