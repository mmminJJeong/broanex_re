import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function Spc() {
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
              <h2>EMS</h2>
              <p>
                에너지의 흐름을 모니터링하고 생산현장에 최적화된 에너지를
                제공하는 공장 에너지 관리 시스템입니다.
              </p>
            </div>
          </div>
        </section>
        <section className="service-banner-1">
          <img
            className="service-banner-background"
            src="img/service-banner.png"
            alt="배너"
          />
        </section>

        <section className="ems-point-section">
          <div className="wrapper-1">
            <div className="ems-point-title">
              <h2>
                생산 설비 동력을 최적화할 수 있는 EMS 에너지 흐름의 가시화
              </h2>
            </div>
            <div className="on-point">
              <ul className="on-point-group">
                <li>
                  <div className="point-item-cover">
                    <img src="img/point01.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>설비 에너지 데이터 측정</h3>
                    <ul>
                      <li>에너지 사용량 측정</li>
                      <li>타 시스템 및 모듈과 연계</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="point-item-cover">
                    <img src="img/point02.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>에너지 흐름 분석</h3>
                    <ul>
                      <li>에너지 성과 지표 설정</li>
                      <li>에너지 패턴/상관도 분석</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="point-item-cover">
                    <img src="img/point03.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>에너지 데이터 관리</h3>
                    <ul>
                      <li>에너지 사용 및 흐름 가시화</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="point-item-cover">
                    <img src="img/point04-1.png" alt="" />
                  </div>
                  <div className="on-point-contents">
                    <h3>에너지 최적화</h3>
                    <ul>
                      <li>생산 연계 에너지 최적화 및 설비 운영 적용</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="service-point">
          <div className="point-title wrapper-1">
            <h3>EMS 특장점</h3>
          </div>

          <ul className="point-grid wrapper-1">
            <li>
              <div className="point-item">
                <img
                  className="p-item-cover"
                  src="img/icon/sun.png"
                  alt="icon1"
                />
                <div className="point-content">
                  <h2>최적 에너지 도출</h2>
                  <p>
                    전력 품질을 모니터링하고 소비전력과 생산량 간의 영향력을
                    판단하여 생산에 가장 효율적인 에너지 사용량을 도출합니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img
                  className="p-item-cover"
                  src="img/icon/laptop (3).png"
                  alt="icon1"
                />
                <div className="point-content">
                  <h2>과다 사용원인 유추</h2>
                  <p>
                    정해진 에너지 소비량 초과시 알람을 받아 에너지 과다 사용의
                    원인을 파악하고 해결할 수 있습니다.
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
                  <h2>고효율 설비위주 가동</h2>
                  <p>
                    전력과 생산량을 실시간으로 파악하여 고효율 설비 위주의
                    최적화된 가동으로 생산성을 향상시킵니다.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="point-item">
                <img
                  className="p-item-cover"
                  src="img/icon/watching-tv.png"
                  alt="icon1"
                />
                <div className="point-content">
                  <h2>에너지 비용 모니터링</h2>
                  <p>
                    에너지 요금의 원단회 조회, 계측기/전력 라인별 사용량 등
                    에너지 비용을 조회할 수 있습니다.
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
                  <div>EMS + Monitoring</div>
                </li>
                <li>
                  <i className="use-icon"></i>
                  <strong>구축 내용</strong>
                  <div>
                    최적화된 생산현장을 구축하기 위해 제조 데이터를 활용한
                    스마트팩토리 체계를 구현하며 에너지 최적화까지 달성하고자 함
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="booth-square">구축 내용</h2>
          <div className="usecase-list wrapper-1">
            <div className="usecase-list-contents">
              <ul className="lists type_b">
                <li>
                  기 사용중인 MES 및 빅데이터 플랫폼과 연계한
                  <span> EMS 구축</span>
                </li>
                <li>생산과 전력의 상관관계 분석</li>
                <li>
                  NEXPOM 모니터링과 연계를 통한
                  <span> 종합 에너지 정보 모니터링</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="usecase-detail wrapper-1">
            <div className="holder booth-detail">
              <div className="image">
                <img src="img/graph-ems.jpg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="usecase-graph wrapper-1">
            <h2 className="booth-square">구축효과</h2>
            <ul className="l_row l_row_hairline">
              <li className="l_col l_col_6_12 l_col_mobile_12_12">
                <div className="booth-state">
                  <div className="booth-state-cover is_down">60%</div>
                  <p className="booth-state-contents">
                    에너지 사용의 실시간 모니터링 및 재배치를 통한{" "}
                    <span>에너지 사용량 60% 절감</span>
                  </p>
                </div>
              </li>
              <li className="l_col l_col_6_12 l_col_mobile_12_12">
                <div className="booth-state">
                  <div className="booth-state-cover is_down">6ppm</div>
                  <p className="booth-state-contents">
                    에너지와 생산품질의 상관관계 분석을 통해{" "}
                    <span>불량률 6ppm 급감</span>
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
