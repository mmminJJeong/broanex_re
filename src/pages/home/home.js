import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function Home() {
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="page-section">
        <HeaderSection />
        {/* 배너 */}
        <Slider {...settings} className="home-banner-sec">
          <div>
            <img src="img/Home_banner_01.jpg" alt="" />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
        {/* 브로넥스 온키퍼 배너 */}
        <Link to="/" style={linkStyle}>
          {" "}
          <section className="show-intro">
            <div className="wrapper-1">
              <img
                className="showintro-logo"
                src="img/onkeeper-logo.png"
                alt="브로넥스 logo"
              />
              <div className="show-title">
                <h2>대한민국 제조업 생태계를 뒤바꿀 비대면 서비스 플랫폼</h2>
                <p>
                  기존에는 필요에 따라 각각 설치했던 시스템을 모듈형 플랫폼인
                  ONKEEPER에서 한번에 관리할 수 있습니다. 스마트 팩토리
                  통합관리, ONKEEPER 하나면 충분 합니다.
                </p>
              </div>
              <button className="view-btn">VIEW MORE</button>
            </div>
            {/* 브로넥스 구성솔루션 */}
            <div className="showintro-background">
              <img
                className="showintro-cover-images"
                src="img/showintrotab-2.png"
                alt="태블릿 이미지"
              />
              <img
                className="showintro-cover-text"
                src="img/home-middle-background.png"
                alt="backgroud text"
              />
            </div>
          </section>
        </Link>
        <section className="smartfactory-solution">
          <div className="title-zone">
            <h3>
              스마트팩토리<span>구성 솔루션</span>
            </h3>
            <p>우리 공장에 적합한 스마트팩토리 솔루션을 지금 확인 하세요.</p>
          </div>
          <div className="smartfactory-grid wrapper-1">
            <Link to="/" style={linkStyle}>
              <div className="content-area">
                <img src="" alt="icon1" />
                <div>온키퍼</div>
              </div>
            </Link>
            <Link to="/" style={linkStyle}>
              <div className="content-area">
                <img src="" alt="icon2" />
                <div>MES</div>
              </div>
            </Link>
            <Link to="/" style={linkStyle}>
              <div className="content-area">
                <img src="" alt="icon3" />
                <div>Monitoring</div>
              </div>
            </Link>
            <Link to="/" style={linkStyle}>
              <div className="content-area">
                <img src="" alt="icon4" />
                <div>HACCP</div>
              </div>
            </Link>
            <Link to="/" style={linkStyle}>
              <div className="content-area">
                <img src="" alt="icon5" />
                <div>EMS</div>
              </div>
            </Link>
          </div>
        </section>
        <section className="main-point">
          <div className="point-title wrapper-1">
            <h3>브로넥스 솔루션 핵심전략</h3>
          </div>

          <ul className="point-grid wrapper-1">
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>양방향 통신 표준화</h2>
                  <p>
                    &middot; 설비와 설비템과의 양방향 수직적 표준화 <br />
                    &middot; 설비간, 시스텀간의 양방향 수평적 표준화
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>설비/물류 자동화</h2>
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
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>Real-time Tracking</h2>
                  <p>
                    &middot;제조 Traceability을 위한 ID 표준화
                    <br />
                    &middot;자동인식 기능과 용기(Carrier,Magazine, Tray) 표준화
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>시스템에 의한 지능화</h2>
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
            <li>
              <div className="point-item">
                <img className="p-item-cover" src="" alt="icon1" />
                <div className="point-content">
                  <h2>제조 환경/안전</h2>
                  <p>
                    &middot; 제조 IoT 신경망 구축 (설비 및 제조환경 실시간
                    센싱체계)
                    <br />
                    &middot; 제조 시설, 환경 안전 모니터링 및 조합관제
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="news-section">
          <div className="news-title-section wrapper-1">
            <div className="new-title">
              <h2>NEWS</h2>
              <p>브로넥스의 새로운 소식을 만나보세요.</p>
            </div>
            <button className="view-btn news-btn">VIEW MORE</button>
          </div>
          <div className="news-item wrapper-1">
            <Link to="/" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
            <Link to="/" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
            <Link to="/" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
          </div>
        </section>
        <section className="bottom-banner">
          <img
            src="img/bottom-banner.jpg"
            alt="저희를 경험하면 다른 모든곳의 경험이 불편해진다"
          />
        </section>
        <FooterSection />
      </div>
    </>
  );
}
