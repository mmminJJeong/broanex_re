import React from "react";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";
import Location from "../../components/Location";
// import MapContainer from "../../components/kakaomap/Mapcontainer";

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

const MapInfo = styled.div`
  padding: 0 10px 90px 10px;
  margin: 0 auto;
  width: 100%;
  margin-top: 20px;
  li {
    margin-bottom: 12px;
    line-height: 1.8;
  }
`;
export default function LocationMap() {
  return (
    <>
      <BrowserView>
        {" "}
        <div className="page-section">
          <HeaderSection />
          <div className="page-banner">
            <img src="img/banner/banner-map.jpg" alt="페이지의 배너" />
            <div className="page-title wrapper-1">
              <h2>찾아 오시는 길</h2>
            </div>
          </div>

          <section className="page-section page-section-container">
            <div className="wrapper-1 map-section">
              <h2 className="map-tilte">본사</h2>
              <ul className="map-section-summary">
                <li>
                  <strong>본사 주소</strong>
                  <div className="use-description">
                    경기도 수원시 영통구 영통로 237 (신동 338)
                    에이스하이엔드타워 영통 제 5층 510호, 511호 (16679)
                  </div>
                </li>
                <li>
                  <strong>대표번호</strong>
                  <div className="use-description">031-306-0426</div>
                </li>
                <li>
                  <strong>기업부설연구소번호</strong>
                  <div className="use-description">031-306-0423</div>
                </li>
                <li>
                  <strong>사업관리번호</strong>
                  <div className="use-description">031-306-0425</div>
                </li>
                <li>
                  <strong>FAX</strong>
                  <div className="use-description">0504-384-8237</div>
                </li>
                <li>
                  <strong>E-MAIL</strong>
                  <div className="use-description">broanex.sales@gmail.com</div>
                </li>
              </ul>
            </div>
            <div className="wrapper-1 maps">
              <Location />
            </div>
          </section>
          <FooterSection />
        </div>
      </BrowserView>
      <MobileView>
        <div className="page-section">
          <HeaderSection />
          <PageBanner>
            <img src="img/banner/banner-map.jpg" alt="페이지의 배너" />
            <div className="page-title">
              <h2>찾아 오시는 길</h2>
            </div>
          </PageBanner>

          <MapInfo>
            <div>
              <ul>
                <li>
                  <strong>본사 주소</strong>
                  <div className="use-description">
                    경기도 수원시 영통구 영통로 237 (신동 338)
                    에이스하이엔드타워 영통 제 5층 510호, 511호 (16679)
                  </div>
                </li>
                <li>
                  <strong>대표번호</strong>
                  <div className="use-description">031-306-0426</div>
                </li>
                <li>
                  <strong>기업부설연구소번호</strong>
                  <div className="use-description">031-306-0423</div>
                </li>
                <li>
                  <strong>사업관리번호</strong>
                  <div className="use-description">031-306-0425</div>
                </li>
                <li>
                  <strong>FAX</strong>
                  <div className="use-description">0504-384-8237</div>
                </li>
                <li>
                  <strong>E-MAIL</strong>
                  <div className="use-description">broanex.sales@gmail.com</div>
                </li>
              </ul>
            </div>
            <div className="maps">
              <Location />
            </div>
          </MapInfo>
          <FooterSection />
        </div>
      </MobileView>
    </>
  );
}
