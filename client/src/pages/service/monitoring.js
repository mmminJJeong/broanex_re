import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Monitoring() {
  const settings = {
    dots: true, // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 1, //n장씩 보이게 해주세요
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    centerMode: true,
    className: "center",

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1200, // 화면 사이즈 1200px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const useCaseBack = {
    backgroundImage: "url(img/use-section-title.jpg)",
  };

  return (
    <>
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
            </div>
          </div>
        </section>
        <section className="service-banner-section">
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
        </section>
        <section className="service-usecase-section">
          <div className="use-section-subject wrapper-1">
            <h2>Monitoring 구축 사례</h2>
          </div>
          <div className="use-section-title wrapper-1" style={useCaseBack}>
            <div className="use-section-inside">
              <h2>OO기기 A사</h2>
              <ul className="use-section-summary">
                <li>
                  <i className="use-icon"></i>
                  <strong>도입 제품</strong>
                  <div>Monitoring + MES</div>
                </li>
                <li>
                  <i className="use-icon"></i>
                  <strong>구축 이유</strong>
                  <div className="use-description is_en">
                    점점 높아지는 의료용 기기에 대한 품질 관리(UDI)에 대비하고,
                    정확한 재고 관리를 통한 생산효율을 극대화할 수 있는
                    스마트팩토리 시스템 구축
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
                    생산량에 따른 정확한 자재 소요량 파악으로 재고 비용 4% 절감
                  </p>
                </div>
              </li>
              <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                <div className="booth-state">
                  <div className="booth-state-cover is_up">10%</div>
                  <p className="booth-state-contents">
                    공정 진척 현황 관리에 따른 정확한 납기 예측으로 리드타임 10%
                    감소
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <FooterSection />
      </div>
    </>
  );
}
