import React, { useCallback, useEffect, useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function LocationMap() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>찾아 오시는 길</h2>
          </div>
        </div>

        <section className="news-board">
          <ul className="use-section-summary">
            <li>
              <strong>본사 주소</strong>
              <div>
                경기도 수원시 영통구 영통로 237 (신동 338) 에이스하이엔드타워
                영통 제 5층 510호, 511호 (16679)
              </div>
            </li>
            <li>
              <strong>대표번호</strong>
              <div className="use-description is_en">031-306-0426</div>
            </li>
            <li>
              <strong>기업부설연구소번호</strong>
              <div className="use-description is_en">031-306-0423</div>
            </li>
            <li>
              <strong>사업관리번호</strong>
              <div className="use-description is_en">031-306-0425</div>
            </li>
            <li>
              <strong>FAX</strong>
              <div className="use-description is_en">0504-384-8237</div>
            </li>
            <li>
              <strong>E-MAIL</strong>
              <div className="use-description is_en">
                davidoh@broanexgroup.com
              </div>
            </li>
          </ul>
        </section>
        <FooterSection />
      </div>
    </>
  );
}
