import React, { useState } from "react";

function Popup(props) {
  const [closePopup, setclosePopup] = useState(1);

  return (
    <div className={closePopup === 1 ? "popup openModal" : "popup-none"}>
      <section>
        <main>
          <p>
            현재 홈페이지 리뉴얼 중입니다.
            <br /> 새로워진 모습으로 곧 만나요!
          </p>
        </main>
        <footer>
          <button
            className="footerbtn"
            onClick={() => {
              if (closePopup === 0) {
                setclosePopup(1);
              } else if (closePopup === 1) {
                setclosePopup(0);
              }
            }}
          >
            닫기
          </button>
        </footer>
      </section>
    </div>
  );
}

export default Popup;
