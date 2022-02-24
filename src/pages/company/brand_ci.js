import React from "react";
import "./service.css";
import HeaderSection from "../../components/layout/header";
import FooterSection from "../../components/layout/footer";

export default function brandCi() {
  return (
    <>
      <div className="page-section">
        <HeaderSection />
        <div className="page-banner">
          <img src="img/page-banner.jpg" alt="페이지의 배너" />
          <div className="page-title wrapper-1">
            <h2>공지사항</h2>
          </div>
        </div>

        <section className="service-point-circle"></section>
        <section className="service-manage-section"></section>
        <section className="service-difference-section"></section>
        <FooterSection />
      </div>
    </>
  );
}
