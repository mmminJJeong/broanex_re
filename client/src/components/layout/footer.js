import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";

const FooterItem = styled.div`
  padding: 0 12px;
`;

const Footer = styled.div`
  width: 100%;
  height: auto;
  background-color: #242424;
  padding-bottom: 30px;
  margin-top: 93px;
  text-align: center;
`;

const FooterContent = styled.p`
  text-align: left;
  font-size: 13px;
  line-height: 2;
  font-family: "Noto Sans KR", sans-serif;
  display: block;
  width: 100%;
  margin-top: 20px;
  color: #e9e9e9;
  span {
    font-weight: bold;
    margin: 0 12px;
    color: #fff;
  }
`;

export default function FooterSection() {
  return (
    <>
      <BrowserView>
        <footer className="footer">
          <div className="footer-item wrapper-1">
            <div className="logobox">
              <img src="/img/broanex-logo.png" alt="로고" />
            </div>
            <p className="footer-content">
              <span>㈜브로넥스</span>
              <br />
              <span>대표</span> 오영탁 <span>사업자등록번호</span> 785-87-00363
              <br />
              <span>본사</span> 경기도 수원시 영통구 영통로 237
              에이스하이엔드타워 영통 510호,511호
              <br />
              <span>TEL</span> 031-306-0426 <span>FAX</span> 0504-384-8237
            </p>
          </div>
        </footer>
      </BrowserView>
      <MobileView>
        <Footer>
          <FooterItem>
            <div className="logobox">
              <img src="/img/broanex-logo.png" alt="로고" />
            </div>
            <FooterContent>
              <span>㈜브로넥스</span>
              <br />
              <span>대표</span> 오영탁 <br />
              <span>사업자등록번호</span> 785-87-00363
              <br />
              <span>TEL</span> 031-306-0426 <br />
              <span>FAX</span> 0504-384-8237
            </FooterContent>
          </FooterItem>
        </Footer>
      </MobileView>
    </>
  );
}
