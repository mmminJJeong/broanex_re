import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";

import "./example.css";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";
// import ModalPop from "../../components/modapop";

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

// const ExContent = styled.ul`
//   text-align: center;
//   li {
//     width: auto;
//     margin-bottom: 30px;
//   }
// `;

const TextCon = styled.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  padding: 100px 0;
`;

export default function ConstrucExample() {
  return (
    <>
      <BrowserView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          <div className="page-banner">
            <img src="img/banner/banner-bulid.jpg" alt="페이지의 배너" />
            <div className="page-title wrapper-1">
              <h2>구축사례</h2>
            </div>
          </div>

          <section className="example-board">
            {/* <div className="wrapper-2">
            <ul className="example-list">
              <li className="example-item">
                <div className="example-cover"></div>
                <div className="example-contents">
                  <h2>안녕하세요 예제입니다</h2>

                  <span className="date">2022-02-28</span>
                  <p>
                    인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                    남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지 용감하고
                    청춘의 과실이 그것은 새가 그들은 스며들어 위하여서. 소금이라
                    인간의 얼마나 안고, 바이며, 철환하였는가? 더운지라 곳으로
                    하는 설산에서 위하여, 수 보라. 인간은 예수는 너의 더운지라
                    그리하였는가? 힘차게 청춘에서만 석가는 힘있다.
                  </p>
                </div>
                <div className="example-btn">
                  <ModalPop></ModalPop>
                </div>
              </li>
              <li className="example-item">
                <div className="example-cover"></div>
                <div className="example-contents">
                  <h2>안녕하세요 예제입니다</h2>

                  <span className="date">2022-02-28</span>
                  <p>
                    인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                    남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지 용감하고
                    청춘의 과실이 그것은 새가 그들은 스며들어 위하여서. 소금이라
                    인간의 얼마나 안고, 바이며, 철환하였는가? 더운지라 곳으로
                    하는 설산에서 위하여, 수 보라. 인간은 예수는 너의 더운지라
                    그리하였는가? 힘차게 청춘에서만 석가는 힘있다.
                  </p>
                </div>
                <div className="example-btn">
                  <ModalPop></ModalPop>
                </div>
              </li>
              <li className="example-item">
                <div className="example-cover"></div>
                <div className="example-contents">
                  <h2>안녕하세요 예제입니다</h2>

                  <span className="date">2022-02-28</span>
                  <p>
                    인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                    남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지 용감하고
                    청춘의 과실이 그것은 새가 그들은 스며들어 위하여서. 소금이라
                    인간의 얼마나 안고, 바이며, 철환하였는가? 더운지라 곳으로
                    하는 설산에서 위하여, 수 보라. 인간은 예수는 너의 더운지라
                    그리하였는가? 힘차게 청춘에서만 석가는 힘있다.
                  </p>
                </div>
                <div className="example-btn">
                  <ModalPop></ModalPop>
                </div>
              </li>
            </ul>
          </div> */}
          </section>
          <FooterSection />
        </div>
      </BrowserView>
      <MobileView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          <PageBanner>
            <img src="img/banner/banner-bulid.jpg" alt="페이지의 배너" />
            <div className="page-title wrapper-1">
              <h2>구축사례</h2>
            </div>
          </PageBanner>
          <TextCon> 준비중입니다.</TextCon>
          {/* <section className="example-board">
            <ExContent>
              <li className="example-item">
                <div className="example-cover"></div>
                <div className="example-contents">
                  <h2>안녕하세요 예제입니다</h2>

                  <span className="date">2022-02-28</span>
                  <p>
                    인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                    남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지 용감하고
                    청춘의 과실이 그것은 새가 그들은 스며들어 위하여서. 소금이라
                    인간의 얼마나 안고, 바이며, 철환하였는가? 더운지라 곳으로
                    하는 설산에서 위하여, 수 보라. 인간은 예수는 너의 더운지라
                    그리하였는가? 힘차게 청춘에서만 석가는 힘있다.
                  </p>
                </div>
                <div className="example-btn">
                  <ModalPop></ModalPop>
                </div>
              </li>
              <li className="example-item">
                <div className="example-cover"></div>
                <div className="example-contents">
                  <h2>안녕하세요 예제입니다</h2>

                  <span className="date">2022-02-28</span>
                  <p>
                    인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                    남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지 용감하고
                    청춘의 과실이 그것은 새가 그들은 스며들어 위하여서. 소금이라
                    인간의 얼마나 안고, 바이며, 철환하였는가? 더운지라 곳으로
                    하는 설산에서 위하여, 수 보라. 인간은 예수는 너의 더운지라
                    그리하였는가? 힘차게 청춘에서만 석가는 힘있다.
                  </p>
                </div>
                <div className="example-btn">
                  <ModalPop></ModalPop>
                </div>
              </li>
              <li className="example-item">
                <div className="example-cover"></div>
                <div className="example-contents">
                  <h2>안녕하세요 예제입니다</h2>

                  <span className="date">2022-02-28</span>
                  <p>
                    인생을 장식하는 능히 가는 넣는 교향악이다. 이것을 충분히
                    남는 들어 아니한 얼마나 봄바람이다. 속잎나고, 길지 용감하고
                    청춘의 과실이 그것은 새가 그들은 스며들어 위하여서. 소금이라
                    인간의 얼마나 안고, 바이며, 철환하였는가? 더운지라 곳으로
                    하는 설산에서 위하여, 수 보라. 인간은 예수는 너의 더운지라
                    그리하였는가? 힘차게 청춘에서만 석가는 힘있다.
                  </p>
                </div>
                <div className="example-btn">
                  <ModalPop></ModalPop>
                </div>
              </li>
            </ExContent>
          </section> */}
          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
