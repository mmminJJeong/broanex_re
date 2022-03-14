import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Spc() {
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
            <h2>SPC</h2>
          </div>
        </div>
        <section className="service-page-title">
          <div className="wrapper-1">
            <div className="service-title-logo-cover">
              <img src="img/onkeeper-logo.png" alt="온키퍼 로고" />
            </div>
            <div className="service-title-contents">
              <h2>SPC</h2>
              <p>
                생산 라인에서 발생하는 품질 정보와 상태를 통계적 분석 관리를
                통해 일정한 고품질의 양품 생산을 지원하는 품질 데이터 관리
                시스템입니다.
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
        <section className="service-banner-section">
          <h2 className="service-banber-title">
            SPC를 통한 체계적인 품질관리가 곧 스마트한 공장의 시작
          </h2>
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
        <section className="service-point">
          <div className="point-title wrapper-1">
            <h3>SPC 특장점</h3>
          </div>

          <ul className="point-grid wrapper-1">
            <li>
              <div className="point-item">
                <img
                  className="p-item-cover"
                  src="img/icon/computer-01.png"
                  alt="icon1"
                />
                <div className="point-content">
                  <h2>데이터 전산화</h2>
                  <p>
                    설계도, 스펙, 작업 지시서, 성적서 등의 전산화로 체계적인
                    생산 프로세스를 관리합니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img
                  className="p-item-cover"
                  src="img/icon/chart.png"
                  alt="icon1"
                />
                <div className="point-content">
                  <h2>페이퍼 워크 감소</h2>
                  <p>
                    DB/빅데이터 기반으로 수집, 통계, 조회하므로 종이 문서 작업이
                    감소되며 유실의 위험도 적어집니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img
                  className="p-item-cover"
                  src="img/icon/person.png"
                  alt="icon1"
                />
                <div className="point-content">
                  <h2>생산 효율성 달성</h2>
                  <p>
                    효율적인 품질관리, 생산 프러세스 개선 및 표준화 원가를
                    절감합니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img
                  className="p-item-cover"
                  src="img/icon/inauguration.png"
                  alt="icon1"
                />
                <div className="point-content">
                  <h2>스마트 팩토리 첫걸음</h2>
                  <p>
                    합리적인 가격과 쉬운 사용법으로 스마트팩토리를 시작하는
                    기업들에게 적합합니다.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section className="service-usecase-section">
          <div className="use-section-subject wrapper-1">
            <h2>SPC 구축 사례</h2>
          </div>
          <div className="use-section-title wrapper-1" style={useCaseBack}>
            <div className="use-section-inside">
              <h2>OO기기 B사</h2>
              <ul className="use-section-summary">
                <li>
                  <i className="use-icon"></i>
                  <strong>도입 제품</strong>
                  <div>SPC</div>
                </li>
                <li>
                  <i className="use-icon"></i>
                  <strong>구축 내용</strong>
                  <div>
                    생산된 제품을 사람이 100% 전수 검사하기 때문에 정확도 및
                    업무효율성이 낮은 편으로, 품질향상과 공정개선을 이루고자
                    SPC를 도입
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="booth-square">구축 내용</h2>
          <div className="usecase-list wrapper-1">
            <div className="usecase-list-contents">
              <ul className="lists type_b">
                <li>자동 이송 및 공급 장치를 통한 품질 개선</li>
                <li>정밀한 품질 측정이 가능한 3차원 측정기 도입 및 SPC 연계</li>
                <li>LOT 추적관리 시스템을 추가하여 품질 추적 가능</li>
              </ul>
            </div>
          </div>
          <div className="usecase-detail wrapper-1">
            <div className="holder booth-detail">
              <div className="image">
                <img src="img/usecase-02.jpg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="usecase-graph wrapper-1">
            <h2 className="booth-square">구축효과</h2>
            <ul className="l_row l_row_hairline">
              <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                <div className="booth-state">
                  <div className="booth-state-cover is_down">60%</div>
                  <p className="booth-state-contents">
                    품질 모니터링을 통한 생산 문제 대응력 향상으로 고객 클레임
                    60% 개선
                  </p>
                </div>
              </li>
              <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                <div className="booth-state">
                  <div className="booth-state-cover is_up">15%</div>
                  <p className="booth-state-contents">
                    제품의 원가 절감에 따른 매출액 15% 증가
                  </p>
                </div>
              </li>
              <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                <div className="booth-state">
                  <div className="booth-state-cover is_down">35%</div>
                  <p className="booth-state-contents">
                    업무 수행 능력 개선 및 수작업 최소화로 작업 공수 35% 개선
                  </p>
                </div>
              </li>
              <li className="l_col l_col_6_12 l_col_large_3_12 l_col_mobile_12_12">
                <div className="booth-state">
                  <div className="booth-state-cover is_up">10%</div>
                  <p className="booth-state-contents">
                    효율적인 인력 및 자원 관리로 생산 품목수 10% 증가
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
