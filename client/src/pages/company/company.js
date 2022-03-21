import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";
import "./company.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

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

const CompanyTit = styled.div`
  text-align: center;
  padding: 0 10px;
  margin-top: 92px;
  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 16px;
  }
`;

const HistoryTit = styled.div`
  width: auto;
  padding: 10px;
  text-align: center;
  h2 {
    font-size: 32px;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
    margin-bottom: 20px;
  }
  p {
    display: block;
    font-family: "NanumSquare";
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    font-size: 16px;
    background-color: #3f54d3;
    padding: 10px 0;
  }
`;

const HistoryYear = styled.div`
  padding: 20px 12px;
  position: relative;
  text-align: center;
  h2 {
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 19px;
  }
  strong {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 24px;
    display: block;
    color: #3472d1;
  }
  .history-year-inside {
    width: 100%;
  }
  ul {
    text-align: left;
    margin-top: 24px;
    margin-bottom: 30px;
  }
  li::before {
    content: "";
    width: 5px;
    height: 5px;
    display: inline-block;
    background-color: #3472d1;
    border-radius: 45%;
    margin-right: 14px;
  }
`;

const Certificate = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export default function Company() {
  return (
    <>
      <BrowserView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          <div className="page-banner">
            <img src="img/banner/banner-company.png" alt="페이지의 배너" />
            <div className="page-title wrapper-1">
              <h2>기업소개</h2>
            </div>
          </div>
          <section className="page-section page-section-container">
            <div className="wrapper-1">
              <div className="page-about-title">
                <p>
                  주식회사 브로넥스는 스마트 팩토리 및 AI 데이터 가공, 자동화
                  제어 부문의 소프트웨어, 하드웨어의 각 분야별 최고의 수준의
                  인재와
                  <br />
                  기술역량을 보유하고 고객에게 최상의 부가가치를 제공하고
                  있습니다.
                </p>
              </div>
            </div>
          </section>
          <section className="page-section page-section-container">
            <div className="wrapper-1">
              <div className="page-history-title">
                <h2>HISTORY</h2>
                <div>
                  <p>
                    "급변하는 경제 환경 속에서 고객과 함께 성장하며 도약하는
                    글로벌 기업 브로넥스"
                  </p>
                </div>
              </div>

              <section className="history-year">
                <h2>2021</h2>
                <div className="history-year-inside">
                  <div className="history-contents">
                    <strong>2021 인재 육성형 기업의로서의 성장</strong>
                    <ul>
                      <li>병역특례 기업 지정</li>
                      <li>기술혁신형중소기업 (이노비즈) 인증</li>
                      <li>경영혁신형 중소기업(메인비즈) 인증</li>
                      <li>IP(지식선정) 나래 선정</li>
                      <li>근무혁신 인센티브 선정 기업 </li>
                      <li>노동시간단축 확인 기업</li>
                      <li>특성화고 인력양성 사업 선정</li>
                      <li>인재 육성형 중소기업 지정</li>
                      <li>소진공 스마트슈퍼 스마트기술 공급 업체 선정</li>
                      <li>과학기술정보통신 K-ICT 창업 멘토링 선정</li>
                      <li>오피스 온키퍼 솔루션 개발</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="history-year">
                <h2>2019 ~ 2020</h2>
                <div className="history-year-inside">
                  <div className="history-contents">
                    <strong>2020 특허출원 및 B to C 솔루션 제품 출시</strong>
                    <ul>
                      <li>
                        대중소 상생형 스마트공장 우수구축 사례 선정
                        (https://www.kbiz.or.kr/ ㈜도아드림,한성식품㈜)
                      </li>
                      <li>벤처기업 인증 연장 및 우수기술 평가 기업 선정</li>
                      <li>
                        중소기업 IP나래 선정 및 특허출원 (OPC-UA 프로토콜을
                        이용한 공장자동화 솔루션)
                      </li>
                      <li>통신판매업 신고 및 비브이패스 솔루션 출시</li>
                      <li>출결 및 학습몰입도 관련 온키퍼 솔루션 출시</li>
                    </ul>
                  </div>
                  <div className="history-contents">
                    <strong>2019 산단 R&D 및 데이터바우처 사업 수행</strong>
                    <ul>
                      <li>
                        스마트공장 추진단 우수구축 사례 선정
                        (https://www.smart-factory.kr/ 주식회사 퍼스프)
                      </li>
                      <li>대중소 상생형 현대차 스마트공장 공급기업 등록</li>
                      <li>데이터바우처 가공기업 선정</li>
                      <li>스마트제조혁신센터(안산)OPC-UA AML구축</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="history-year">
                <h2>2016 ~ 2018</h2>
                <div className="history-year-inside">
                  <div className="history-contents">
                    <strong>2018 MAGIC ERP WEB 출시</strong>
                    <ul>
                      <li>대중소상생형 스마트공장 공급기업 등록</li>
                      <li>스마트공장 추진단 우스공급기업 선정</li>
                      <li>MAGIC POP 프로그램 개발</li>
                      <li>한화정밀기계 협동로봇 기술파트너 선정</li>
                      <li>기업부설연구소인정 (한국산업기술진흥협회)</li>
                      <li>벤처기업인증(기술보증기금)</li>
                    </ul>
                  </div>

                  <div className="history-contents">
                    <strong>2017 브로넥스 자본금 증자 | 5,000만원</strong>
                    <ul>
                      <li>MAGIC CRM WEB 솔루션 개발</li>
                      <li>MAGIC TAMS 솔루션 상용화</li>
                      <li>연구개발전담부서인정 (한국산업기술진흥협회)</li>
                    </ul>
                  </div>

                  <div className="history-contents">
                    <strong>2016 브로넥스 설립 (2016.04.26)</strong>
                    <ul>
                      <li>
                        MAGIC MES WEB | MAGIC 모니터링 | MAGIC ANDROID 등 주요
                        S/W 개발
                      </li>
                      <li>Q-ITAM 솔루션 상용화</li>
                      <li>MAGIC QMS | SPC S/W 개발</li>
                      <li>경북창조경제혁신센터 공급기업 등록</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="page-section page-section-container certificate">
            <div className="wrapper-1">
              <div className="certificate-title">
                <h2>인증 현황</h2>
              </div>
              <div className="certificate-contenst">
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-01.png" alt=""></img>
                </div>
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-02.png" alt=""></img>
                </div>
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-03.png" alt=""></img>
                </div>
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-04.png" alt=""></img>
                </div>
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-05.png" alt=""></img>
                </div>
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-06.png" alt=""></img>
                </div>
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-07.png" alt=""></img>
                </div>
                <div className="certificate-cover">
                  <img src="img/certificate/certificate-08.png" alt=""></img>
                </div>
              </div>
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
            <img src="img/banner/banner-company.png" alt="페이지의 배너" />
            <div className="page-title">
              <h2>기업소개</h2>
            </div>
          </PageBanner>
          <CompanyTit>
            <p>
              주식회사 브로넥스는 스마트 팩토리 및 AI 데이터 가공, 자동화 제어
              부문의 소프트웨어, 하드웨어의
              <br /> 각 분야별 최고의 수준의 인재와
              <br />
              기술역량을 보유하고 고객에게 최상의 부가가치를 제공하고 있습니다.
            </p>
          </CompanyTit>

          <section className="page-section page-section-container">
            <HistoryTit>
              <h2>HISTORY</h2>

              <p>
                "급변하는 경제 환경 속에서 고객과 함께 성장하며 도약하는 글로벌
                기업 브로넥스"
              </p>
            </HistoryTit>

            <HistoryYear>
              <h2>2021</h2>
              <div className="history-year-inside">
                <div>
                  <strong>2021 인재 육성형 기업의로서의 성장</strong>
                  <ul>
                    <li>병역특례 기업 지정</li>
                    <li>기술혁신형중소기업 (이노비즈) 인증</li>
                    <li>경영혁신형 중소기업(메인비즈) 인증</li>
                    <li>IP(지식선정) 나래 선정</li>
                    <li>근무혁신 인센티브 선정 기업 </li>
                    <li>노동시간단축 확인 기업</li>
                    <li>특성화고 인력양성 사업 선정</li>
                    <li>인재 육성형 중소기업 지정</li>
                    <li>소진공 스마트슈퍼 스마트기술 공급 업체 선정</li>
                    <li>과학기술정보통신 K-ICT 창업 멘토링 선정</li>
                    <li>오피스 온키퍼 솔루션 개발</li>
                  </ul>
                </div>
              </div>
            </HistoryYear>
            <HistoryYear>
              <h2>2019 ~ 2020</h2>
              <div className="history-year-inside">
                <div>
                  <strong>2020 특허출원 및 B to C 솔루션 제품 출시</strong>
                  <ul>
                    <li>
                      대중소 상생형 스마트공장 우수구축 사례 선정
                      (https://www.kbiz.or.kr/ ㈜도아드림,한성식품㈜)
                    </li>
                    <li>벤처기업 인증 연장 및 우수기술 평가 기업 선정</li>
                    <li>
                      중소기업 IP나래 선정 및 특허출원 (OPC-UA 프로토콜을 이용한
                      공장자동화 솔루션)
                    </li>
                    <li>통신판매업 신고 및 비브이패스 솔루션 출시</li>
                    <li>출결 및 학습몰입도 관련 온키퍼 솔루션 출시</li>
                  </ul>
                </div>
                <div>
                  <strong>2019 산단 R&D 및 데이터바우처 사업 수행</strong>
                  <ul>
                    <li>
                      스마트공장 추진단 우수구축 사례 선정
                      (https://www.smart-factory.kr/ 주식회사 퍼스프)
                    </li>
                    <li>대중소 상생형 현대차 스마트공장 공급기업 등록</li>
                    <li>데이터바우처 가공기업 선정</li>
                    <li>스마트제조혁신센터(안산)OPC-UA AML구축</li>
                  </ul>
                </div>
              </div>
            </HistoryYear>
            <HistoryYear>
              <h2>2016 ~ 2018</h2>
              <div className="history-year-inside">
                <div>
                  <strong>2018 MAGIC ERP WEB 출시</strong>
                  <ul>
                    <li>대중소상생형 스마트공장 공급기업 등록</li>
                    <li>스마트공장 추진단 우스공급기업 선정</li>
                    <li>MAGIC POP 프로그램 개발</li>
                    <li>한화정밀기계 협동로봇 기술파트너 선정</li>
                    <li>기업부설연구소인정 (한국산업기술진흥협회)</li>
                    <li>벤처기업인증(기술보증기금)</li>
                  </ul>
                </div>

                <div>
                  <strong>2017 브로넥스 자본금 증자 | 5,000만원</strong>
                  <ul>
                    <li>MAGIC CRM WEB 솔루션 개발</li>
                    <li>MAGIC TAMS 솔루션 상용화</li>
                    <li>연구개발전담부서인정 (한국산업기술진흥협회)</li>
                  </ul>
                </div>

                <div>
                  <strong>2016 브로넥스 설립 (2016.04.26)</strong>
                  <ul>
                    <li>
                      MAGIC MES WEB | MAGIC 모니터링 | MAGIC ANDROID 등 주요 S/W
                      개발
                    </li>
                    <li>Q-ITAM 솔루션 상용화</li>
                    <li>MAGIC QMS | SPC S/W 개발</li>
                    <li>경북창조경제혁신센터 공급기업 등록</li>
                  </ul>
                </div>
              </div>
            </HistoryYear>
          </section>

          <section className="page-section page-section-container certificate">
            <div className="certificate-title">
              <h2>인증 현황</h2>
            </div>
            <Certificate>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-01.png" alt=""></img>
              </div>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-02.png" alt=""></img>
              </div>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-03.png" alt=""></img>
              </div>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-04.png" alt=""></img>
              </div>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-05.png" alt=""></img>
              </div>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-06.png" alt=""></img>
              </div>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-07.png" alt=""></img>
              </div>
              <div className="certificate-cover">
                <img src="img/certificate/certificate-08.png" alt=""></img>
              </div>
            </Certificate>
          </section>
          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
