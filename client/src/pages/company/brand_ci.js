import React from "react";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function BrandCi() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/banner/banner-ci.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>브로넥스 CI</h2>
          </div>
        </div>

        <section className="logo-intro">
          <div className="wrapper-1">
            <p>
              새로움과 젊음, 역동성을 겸비한 새로운 기술력의 완전성과 다양한
              기업과의 협력과 공동연구를 통한 형태의 결합을 나타내고 있습니다.
              <br />
              혁신적인 기술과 현실적인 기술의 조화를 위한 브로넥스만의 포부가
              담겨 있습니다.
            </p>
          </div>
        </section>
        <section className="logo-section">
          <div className="wrapper-1">
            <div className="logo-section1">
              <div className="logo-contents">
                <h2>커뮤니케이션명</h2>
                <div className="cover">
                  <img src="img/communication-01.png" alt=""></img>
                </div>
              </div>
              <div className="logo-contents">
                <h2>심볼</h2>
                <div className="cover">
                  <img src="img/symbol-01.png" alt=""></img>
                </div>
              </div>
            </div>

            <div className="logo-section2">
              <h2>적용 예시</h2>
              <div className="logo-contents2">
                <div className="cover">
                  <img src="img/logo-example-01.png" alt=""></img>
                </div>
                <div className="cover">
                  <img src="img/logo-example-02.png" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
}
