import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";
import styled from "styled-components";

// 모바일 css
const ShowOnkeeper = styled.section`
  width: 100%;
  height: auto;
  margin: 0 auto;
  background-color: #80aaec;
  padding: 30px 10px;
  text-align: center;
`;

const ShowTit = styled.div`
  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0 20px 0;
  }
`;

const ViewButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid #fff;
  margin-top: 30px;
`;
const ViewButton2 = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid #2222;
  margin-top: 30px;
  color: #000;
`;

const TitleZone = styled.div`
  margin-bottom: 0px;
  text-align: center;
  h3 {
    font-size: 32px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    color: #0d0d0d;
    margin-bottom: 18px;
  }
`;

const SmartFactory = styled.div`
  position: relative;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 12px;
`;

const ContentArea = styled.div`
  width: 180px;
  height: 200px;
  border: 1px solid #cfcfcf;
  border-radius: 32px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  text-align: center;
  position: relative;
  margin: 0 0 20px 0;
  text-align: center;
  .grid-contents-cover {
    position: absolute;
    top: 25%;
    left: 30%;
    width: 73px;
    height: 73px;
  }
  img {
    width: 100%;
  }
  .gird-contents-text {
    width: 100%;
  }
`;

const PointSection = styled.section`
  padding: 50px 10px;
  background-color: #f8f8f8;
`;

const Point = styled.li`
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  margin-bottom: 40px;
`;

const PointItem = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;

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
  }
`;

const NewsSection = styled.section`
  padding: 10px 12px;
  margin-top: 60px;
  text-align: center;
`;

const BottomBanner = styled.div`
  width: 100%;
  margin-top: 50px;
  img {
    width: 100%;
  }
`;

export default function Home() {
  const linkStyle = {
    textDecoration: "none",
    color: "#000000",
  };

  return (
    <>
      <BrowserView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          {/* 배너 */}
          <div className="home-banner-sec">
            <img src="img/Main-baenner-f.jpg" alt="" />
          </div>
          {/* 브로넥스 온키퍼 배너 */}
          <Link to="/onkeeper" style={linkStyle}>
            {" "}
            <section className="show-intro">
              <div className="wrapper-1 middle-banner">
                <img
                  className="showintro-logo"
                  src="img/onkeeper-logo.png"
                  alt="브로넥스 logo"
                />
                <div className="show-title">
                  <h2>대한민국 제조업 생태계를 뒤바꿀 비대면 서비스 플랫폼</h2>
                  <p>
                    기존에는 필요에 따라 각각 설치했던 시스템을 모듈형 플랫폼인
                    ONKEEPER에서 한번에 관리할 수 있습니다. <br />
                    스마트 팩토리 통합관리, <strong>ONKEEPER</strong> 하나면
                    충분 합니다.
                  </p>
                </div>
                <button className="view-btn">VIEW MORE</button>
              </div>
              {/* 브로넥스 구성솔루션 */}
              {/* <div className="showintro-background">
              <img
                className="showintro-cover-images"
                src="img/home-middle-background.jpg"
                alt="태블릿 이미지"
              />
              <img
                className="showintro-cover-text"
                src="img/home-middle-background.png"
                alt="backgroud text"
              />
            </div> */}
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
              <Link to="/onkeeper" style={linkStyle}>
                <div className="content-area">
                  <div className="grid-contents-cover">
                    <img src="img/icon/info.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">온키퍼</div>
                </div>
              </Link>
              <Link to="/mes" style={linkStyle}>
                <div className="content-area">
                  <div className="grid-contents-cover">
                    <img src="img/icon/laptop-05.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">MES</div>
                </div>
              </Link>
              <Link to="/monitoring" style={linkStyle}>
                <div className="content-area">
                  <div className="grid-contents-cover">
                    <img src="img/icon/laptop (4).png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">Monitoring</div>
                </div>
              </Link>
              <Link to="/HACCP" style={linkStyle}>
                <div className="content-area">
                  <div className="grid-contents-cover">
                    <img src="img/icon/coffee.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">HACCP</div>
                </div>
              </Link>
              <Link to="/EMS" style={linkStyle}>
                <div className="content-area">
                  <div className="grid-contents-cover">
                    <img src="img/icon/battery.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">EMS</div>
                </div>
              </Link>
            </div>
          </section>

          {/* 핵심전략 */}
          <section className="main-point">
            <div className="point-title wrapper-1">
              <h3>브로넥스 솔루션 핵심전략</h3>
            </div>

            <ul className="point-grid wrapper-1">
              <li>
                <div className="point-item">
                  <img
                    className="p-item-cover"
                    src="img/icon/laptop-01.png"
                    alt="icon1"
                  />
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
                  <img
                    className="p-item-cover"
                    src="img/icon/automation.png"
                    alt="icon1"
                  />
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
                  <img
                    className="p-item-cover"
                    src="img/icon/laptop-02.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>Real-time Tracking</h2>
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
                    src="img/icon/gear.png"
                    alt="icon1"
                  />
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
                  <img
                    className="p-item-cover"
                    src="img/icon/renewable-energy.png"
                    alt="icon1"
                  />
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
              <button className="view-btn news-btn">
                <Link to="/newsList" style={linkStyle}>
                  VIEW MORE
                </Link>
              </button>
            </div>
            {/* <div className="news-item wrapper-1">
            <Link to="" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
            <Link to="" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
            <Link to="" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
          </div> */}
          </section>
          <section className="bottom-banner">
            <img
              src="img/bottom-banner.jpg"
              alt="저희를 경험하면 다른 모든곳의 경험이 불편해진다"
            />
          </section>
          <FooterSection />
        </div>
      </BrowserView>
      <MobileView>
        {" "}
        <div className="page-section">
          <HeaderSection />

          {/* 배너 */}
          <div className="home-banner-sec">
            <img src="img/Main-baenner-2.jpg" alt="" />
          </div>
          {/* 브로넥스 온키퍼 배너 */}

          <ShowOnkeeper>
            <img src="img/onkeeper-logo.png" alt="브로넥스 logo" />
            <ShowTit>
              <h2>
                대한민국 제조업 생태계를 뒤바꿀 비대면<br></br> 서비스 플랫폼
              </h2>
              <p>
                기존에는 필요에 따라 각각 설치했던 시스템을<br></br> 모듈형
                플랫폼인 ONKEEPER에서 <br /> 한번에 관리할 수 있습니다. <br />{" "}
                스마트 팩토리 통합관리, <strong>ONKEEPER</strong> 하나면 충분
                합니다.
              </p>
            </ShowTit>
            <Link to="/onkeeper" style={linkStyle}>
              <ViewButton>VIEW MORE</ViewButton>
            </Link>
          </ShowOnkeeper>

          <section className="smartfactory-solution">
            <TitleZone>
              <h3>스마트팩토리 구성 솔루션</h3>
              <p>
                우리 공장에 적합한 스마트팩토리 솔루션을 <br></br> 지금 확인
                하세요.
              </p>
            </TitleZone>
            <SmartFactory>
              <Link to="/onkeeper" style={linkStyle}>
                <ContentArea>
                  <div className="grid-contents-cover">
                    <img src="img/icon/info.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">온키퍼</div>
                </ContentArea>
              </Link>
              <Link to="/mes" style={linkStyle}>
                <ContentArea>
                  <div className="grid-contents-cover">
                    <img src="img/icon/laptop-05.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">MES</div>
                </ContentArea>
              </Link>
              <Link to="/monitoring" style={linkStyle}>
                <ContentArea>
                  <div className="grid-contents-cover">
                    <img src="img/icon/laptop (4).png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">Monitoring</div>
                </ContentArea>
              </Link>
              <Link to="/HACCP" style={linkStyle}>
                <ContentArea>
                  <div className="grid-contents-cover">
                    <img src="img/icon/coffee.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">HACCP</div>
                </ContentArea>
              </Link>
              <Link to="/EMS" style={linkStyle}>
                <ContentArea>
                  <div className="grid-contents-cover">
                    <img src="img/icon/battery.png" alt="icon1" />
                  </div>
                  <div className="gird-contents-text">EMS</div>
                </ContentArea>
              </Link>
            </SmartFactory>
          </section>

          {/* 핵심전략 */}
          <PointSection>
            <TitleZone>
              <h3>브로넥스 솔루션 핵심전략</h3>
            </TitleZone>

            <ul className="point-grid">
              <Point>
                <PointItem>
                  <img
                    className="p-item-cover"
                    src="img/icon/laptop-01.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>양방향 통신 표준화</h2>
                    <p>
                      &middot; 설비와 설비템과의 양방향 수직적 표준화 <br />
                      &middot; 설비간, 시스텀간의 양방향 수평적 표준화
                    </p>
                  </div>
                </PointItem>
              </Point>
              <Point>
                <PointItem>
                  <img
                    className="p-item-cover"
                    src="img/icon/automation.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>설비/물류 자동화</h2>
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
                    src="img/icon/laptop-02.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>Real-time Tracking</h2>
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
                    src="img/icon/gear.png"
                    alt="icon1"
                  />
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
                </PointItem>
              </Point>
              <Point>
                <PointItem>
                  <img
                    className="p-item-cover"
                    src="img/icon/renewable-energy.png"
                    alt="icon1"
                  />
                  <div className="point-content">
                    <h2>제조 환경/안전</h2>
                    <p>
                      &middot; 제조 IoT 신경망 구축 (설비 및 제조환경 실시간
                      센싱체계)
                      <br />
                      &middot; 제조 시설, 환경 안전 모니터링 및 조합관제
                    </p>
                  </div>
                </PointItem>
              </Point>
            </ul>
          </PointSection>
          <NewsSection>
            <div className="new-title">
              <h2>NEWS</h2>
              <p>브로넥스의 새로운 소식을 만나보세요.</p>
            </div>
            <Link to="/newsList" style={linkStyle}>
              <ViewButton2>VIEW MORE</ViewButton2>
            </Link>

            {/* <div className="news-item wrapper-1">
            <Link to="" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
            <Link to="" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
            <Link to="" style={linkStyle}>
              <div className="news-area">
                <div className="new-item-cover">
                  <img src="" alt="" />
                </div>
                <div>2022-03-01의 브로넥스를 만나보세요</div>
              </div>
            </Link>
          </div> */}
          </NewsSection>
          <BottomBanner>
            <img
              src="img/bottom-banner.jpg"
              alt="저희를 경험하면 다른 모든곳의 경험이 불편해진다"
            />
          </BottomBanner>
          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
