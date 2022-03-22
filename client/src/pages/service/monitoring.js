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
  text-align: center;
`;

const ServicePointCont = styled.div`
  margin: 0 auto;
  padding: 0 12px;
  .point-content2 {
    width: auto;
    margin-bottom: 50px;
  }
  .point-content-item {
    div {
      margin: 0 auto;
    }
  }
`;

const ConTit = styled.h2`
  height: 44px;
  line-height: 44px;
  background-color: #2d3e9e;
  max-width: 260px;
  margin: 0 auto -22px auto;
  font-weight: bold;
  color: white;
  text-align: center;
  font-size: 18px;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;
`;

const UseList = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 40px;
  padding: 40px 8px;
  .lists {
    font-size: 14px;
  }
`;
const UseCaseSec = styled.div`
  align-items: center;
  position: relative;
  z-index: 10;
  color: white;
  padding: 60px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  ul {
    margin-top: 18px;
  }
  li {
    margin-bottom: 24px;
    font-size: 16px;
  }
`;

const UsecaseGraph = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 1.76;
  margin: 90px 8px 0 8px;
`;

export default function Monitoring() {
  const useCaseBack = {
    backgroundImage: "url(img/use-section-title.jpg)",
  };
  const pageBack = {
    backgroundImage: "url(img/banner/banner-mes.jpg)",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <BrowserView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          <div className="page-banner">
            <img src="img/banner/banner-mes.jpg" alt="페이지의 배너" />
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
          <section className="service-point">
            <div className="wrapper-1">
              <div className="service-point-tit">
                <h2>Monitoring 활용 예시</h2>
              </div>
              <div className="service-point-cont">
                <div className="point-content2">
                  <div className="point-content-item">
                    <div>
                      <img src="/img/icon/maintenance.png" alt="" />
                    </div>
                  </div>
                  <div className="point-content-text">
                    <h3>STEP. 1</h3>
                    <p>
                      생산공정 및 설비 관련 데이터 수집,<br></br> 저장, 알림,
                      분석&모니터링을 통한 <br />
                      정보 통합 및 분석 / 관리
                    </p>
                  </div>
                </div>
                <div className="point-content2">
                  <div className="point-content-item">
                    <div>
                      <img src="/img/icon/preferences.png" alt="" />
                    </div>
                  </div>
                  <div className="point-content-text">
                    <h3>STEP. 2</h3>
                    <p>
                      대시보드를 통한 신뢰성 있는
                      <br /> 정보 공유를 하여 개선 목표 도출 및 내부 공감
                    </p>
                  </div>
                </div>
                <div className="point-content2">
                  <div className="point-content-item">
                    <div>
                      <img src="./img/icon/settings (1).png" alt="" />
                    </div>
                  </div>
                  <div className="point-content-text">
                    <h3>STEP. 3</h3>
                    <p>
                      개선목표에 대응하는 시스템 확장 또는 고도화를 통해 원활한
                      시스템 활용 및 맞춤형 스마트공장으로 진화
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="service-banner-section">
          <Slider {...settings} className="home-banner-sec">
            <div>
              <img src="img/Home_banner_01.jpg" alt="" />
            </div>
            <div>
              <img src="img/Home_banner_02.jpg" alt="" />
            </div>
            <div>
              <img src="img/Home_banner_02.png" alt="" />
            </div>
          </Slider>
        </section> */}
          <section className="service-usecase-section">
            <div className="use-section-subject wrapper-1">
              <h2>Monitoring 구축 사례</h2>
            </div>
            <div className="use-section-title wrapper-1" style={useCaseBack}>
              <div className="use-section-inside">
                <h2>OO기기 A사</h2>
                <ul className="use-section-summary">
                  <li>
                    {/* <i className="use-icon"></i> */}
                    <strong>도입 제품</strong>
                    <div>Monitoring + MES</div>
                  </li>
                  <li>
                    {/* <i className="use-icon"></i> */}
                    <strong>구축 이유</strong>
                    <div className="use-description is_en">
                      점점 높아지는 의료용 기기에 대한 품질 관리(UDI)에
                      대비하고,
                      <br /> 정확한 재고 관리를 통한 생산효율을 극대화할 수 있는
                      <br /> 스마트팩토리 시스템 구축
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="booth-square">구축 내용</h2>
            <div className="usecase-list wrapper-1">
              <div className="usecase-list-contents">
                <ul className="lists type_b">
                  <li>자재 입고에서 출하까지 MES를 통한 LOT 추적 관리</li>
                  <li>설비 I/F를 통한 생산 데이터 수집 자동화</li>
                  <li>
                    원재료, 반제품, 완제품에 대한 정확한 재고 파악 및 모니터링
                  </li>
                </ul>
              </div>
            </div>
            <div className="usecase-detail wrapper-1">
              <div className="holder booth-detail">
                <div className="image">
                  <img src="img/usecaes-01.jpg" alt=""></img>
                </div>
              </div>
            </div>
            <div className="usecase-graph wrapper-1">
              <h2 className="booth-square">구축효과</h2>
              <ul className="l_row l_row_hairline">
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_up">25%</div>
                    <p className="booth-state-contents">
                      생산과정의 체계적인 시스템화에 따른 생산량 25% 증가
                    </p>
                  </div>
                </li>
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_down">24%</div>
                    <p className="booth-state-contents">
                      측정 데이터의 실시간 관리를 통한 완제품 불량률 24% 개선
                    </p>
                  </div>
                </li>
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_up">4%</div>
                    <p className="booth-state-contents">
                      생산량에 따른 정확한 자재 소요량 파악으로 재고 비용 4%
                      절감
                    </p>
                  </div>
                </li>
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_up">10%</div>
                    <p className="booth-state-contents">
                      공정 진척 현황 관리에 따른 정확한 납기 예측으로 리드타임
                      10% 감소
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <FooterSection />
        </div>
      </BrowserView>
      <MobileView>
        <div className="page-section">
          <HeaderSection />
          <PageBanner style={pageBack}>
            <div className="page-title">
              <h2>Monitoring</h2>
            </div>
          </PageBanner>
          <section className="service-page-title">
            <div className="service-title-logo-cover">
              <img src="img/onkeeper-logo.png" alt="온키퍼 로고" />
            </div>
            <TitleSection>
              <h2>Monitoring</h2>
              <p>
                ONKEEPER는 생산, 설비, 품질, 에너지 등의 KPI를 기준으로 시스템
                및 공장 현황을 통합 분석 및 실시간 모니터링하여,
                <br /> 공장의 종합상황실 역할을 하고 최적의 공장 운영 지표를
                제공합니다.
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
            <TitleSection2>
              <h2>Monitoring 활용 예시</h2>
            </TitleSection2>
            <ServicePointCont>
              <div className="point-content2">
                <div className="point-content-item">
                  <div></div>
                </div>
                <div className="point-content-text">
                  <h3>STEP. 1</h3>
                  <p>
                    생산공정 및 설비 관련 데이터 수집, 저장, 알림,
                    분석&모니터링을 통한 정보 통합 및 분석 / 관리
                  </p>
                </div>
              </div>
              <div className="point-content2">
                <div className="point-content-item">
                  <div></div>
                </div>
                <div className="point-content-text">
                  <h3>STEP. 2</h3>
                  <p>
                    대시보드를 통한 신뢰성 있는 정보 공유를 하여 개선 목표 도출
                    및 내부 공감
                  </p>
                </div>
              </div>
              <div className="point-content2">
                <div className="point-content-item">
                  <div></div>
                </div>
                <div className="point-content-text">
                  <h3>STEP. 3</h3>
                  <p>
                    개선목표에 대응하는 시스템 확장 또는 고도화를 통해 원활한
                    시스템 활용 및 맞춤형 스마트공장으로 진화
                  </p>
                </div>
              </div>
            </ServicePointCont>
          </PointSection>
          {/* <section className="service-banner-section">
          <Slider {...settings} className="home-banner-sec">
            <div>
              <img src="img/Home_banner_01.jpg" alt="" />
            </div>
            <div>
              <img src="img/Home_banner_02.jpg" alt="" />
            </div>
            <div>
              <img src="img/Home_banner_02.png" alt="" />
            </div>
          </Slider>
        </section> */}
          <section className="service-usecase-section">
            <TitleSection2>
              <h2>Monitoring 구축 사례</h2>
            </TitleSection2>
            <div className="use-section-title" style={useCaseBack}>
              <UseCaseSec>
                <h2>OO기기 A사</h2>
                <ul>
                  <li>
                    <strong>도입 제품</strong>
                    <div>Monitoring + MES</div>
                  </li>
                  <li>
                    <strong>구축 이유</strong>
                    <div className="use-description is_en">
                      점점 높아지는 의료용 기기에 대한 품질 관리(UDI)에
                      대비하고, 정확한 재고 관리를 통한 생산효율을 극대화할 수
                      있는 스마트팩토리 시스템 구축
                    </div>
                  </li>
                </ul>
              </UseCaseSec>
            </div>
            <ConTit>구축 내용</ConTit>
            <UseList>
              <div className="usecase-list-contents">
                <ul className="lists">
                  <li>자재 입고에서 출하까지 MES를 통한 LOT 추적 관리</li>
                  <li>설비 I/F를 통한 생산 데이터 수집 자동화</li>
                  <li>
                    원재료, 반제품, 완제품에 대한 정확한 재고 파악 및 모니터링
                  </li>
                </ul>
              </div>
            </UseList>
            <div className="usecase-detail">
              <div className="holder booth-detail">
                <div className="image">
                  <img src="img/usecaes-01.jpg" alt=""></img>
                </div>
              </div>
            </div>
            <UsecaseGraph>
              <ConTit>구축효과</ConTit>
              <ul className="l_row l_row_hairline">
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_up">25%</div>
                    <p className="booth-state-contents">
                      생산과정의 체계적인 시스템화에 따른 생산량 25% 증가
                    </p>
                  </div>
                </li>
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_down">24%</div>
                    <p className="booth-state-contents">
                      측정 데이터의 실시간 관리를 통한 완제품 불량률 24% 개선
                    </p>
                  </div>
                </li>
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_up">4%</div>
                    <p className="booth-state-contents">
                      생산량에 따른 정확한 자재 소요량 파악으로 재고 비용 4%
                      절감
                    </p>
                  </div>
                </li>
                <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                  <div className="booth-state">
                    <div className="booth-state-cover is_up">10%</div>
                    <p className="booth-state-contents">
                      공정 진척 현황 관리에 따른 정확한 납기 예측으로 리드타임
                      10% 감소
                    </p>
                  </div>
                </li>
              </ul>
            </UsecaseGraph>
          </section>
          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
