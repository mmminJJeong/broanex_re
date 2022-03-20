import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 스크롤탑을 지정안해주면 페이지 이동시에 최상단 위치로 열리지 않으니 주의하자 */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
