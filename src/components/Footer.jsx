import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import facebookLogo from "../assets/img/Facebook.svg";
import youtubeLogo from "../assets/img/Youtube.svg";
import linkedinLogo from "../assets/img/Linkedin.svg";
import tiktokLogo from "../assets/img/tiktok.svg";
import nav from "../assets/img/Nav.svg";
import logo from "../assets/img/Logo-name.png";
import "../style/App.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });

  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };
  const handleSend = async () => {
    const lang = localStorage.getItem("lang") || "ko";

  const messages = {
  ko: {
    invalid: "유효한 이메일을 입력해주세요.",
    success: "고객님 소중한 정보를 남겨주셔서 감사합니다.",
    fail: "정보를 다시 확인해주세요.",
  },
  vi: {
    invalid: "Vui lòng nhập email hợp lệ.",
    success: "Cảm ơn bạn đã để lại thông tin.",
    fail: "Vui lòng kiểm tra lại thông tin.",
  },
  en: {
    invalid: "Please enter a valid email address.",
    success: "Thank you for your submission.",
    fail: "Please check your information again.",
  },
};

   if (!email || !email.includes("@")) {
    showTemporaryPopup(messages[lang].invalid, true);
    return;
  }

  setLoading(true);
  try {
    const res = await axios.post("https://op-backend-60ti.onrender.com/api/save-email", { email });
    setEmail("");
    showTemporaryPopup(messages[lang].success);
  } catch (err) {
    console.error(err);
    showTemporaryPopup(messages[lang].fail, true);
  } finally {
    setLoading(false);
  }
  };


  return (
    <>
      {/* 🔹 CSS animation */}
      <style>
        {`
          @keyframes pushDown {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            60% {
              transform: translateY(10px);
              opacity: 1;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* 🔹 Popup thông báo */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            background: popupMessage.isError ? "#E74C3C" : "#4CAF50",
            color: "white",
            padding: "16px 30px",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            animation: "pushDown 0.5s ease-out",
            zIndex: 9999,
          }}
        >
          {popupMessage.text}
        </div>
      )}

      {/* 🔹 Footer content */}
      <footer
        style={{
          width: "100%",
          background: "#1D2C5B",
          color: "#E8EEF9",
          padding: 0,
          fontFamily: "'Montserrat', Arial, sans-serif",
          marginTop: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "56px 0 28px 0",
            gap: 32,
          }}
        >
          {/* Left: Logo + Info */}
          <div style={{ flex: 1.4, minWidth: 400, display: "flex", flexDirection: "column", gap: 18 ,transform: "translateX(-60px)"}}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src={logo} alt="Logo" style={{ width: 180 }} />
            </div>
            <div style={{ color: "#E8EEF9", fontSize: 16, fontWeight: 400, lineHeight: 1.9 }}>
              <div>TEL / FAX : (+82) 51-715-0607</div>
              <div>대표자: 이종섭 thành 주소: (48059) 부산광역시 해운대구 센텀동로 99, 915 - 916호 (재송동, 벽산이센텀클래스원)</div>
              <div>사업자등록번호: 740-87-03727</div>
            </div>
            <div style={{ color: "#AFC4E8", fontSize: 13, marginTop: 24 }}>
              ONE PASS INC. © all right reserve
            </div>
          </div>

          {/* Center: Quick Links */}
          <div style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column" }}>
              <div style={{ fontWeight: 700, fontSize: 22, color: "#E8EEF9", marginBottom: 16 }}>Quick Link’s</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to="/Introduction" style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                  회사 소개
                </Link>
                <Link to="/Service" style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                  서비스
                </Link>
                <Link to="/News" style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                  뉴스룸
                </Link>
                {/* Support tab: Terms-of-Use */}
                <Link to="/Support" state={{ tab: "Terms-of-Use" }} style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                  이용약관
                </Link>
                {/* Support tab: personal-information */}
                <Link to="/Support" state={{ tab: "personal-information" }} style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                  개인정보처리방침
                </Link>
              </div>
          </div>

          {/* Right: Subscribe */}
          <div style={{ flex: 1.2, minWidth: 300, display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#E8EEF9", marginBottom: 8 }}>For Every Update.</div>

            <div
              style={{
                width: 420,
                maxWidth: "100%",
                border: "2px solid #E3E8F2",
                borderRadius: 10,
                display: "flex",
                overflow: "hidden",
                background: "transparent",
              }}
            >
              <input
                placeholder="이메일 입력"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  height: 46,
                  border: "none",
                  outline: "none",
                  padding: "0 14px",
                  fontSize: 15,
                  color: "#E8EEF9",
                  background: "transparent",
                }}
              />
              <button
                onClick={handleSend}
                disabled={loading}
                style={{
                  height: 46,
                  padding: "0 22px",
                  background: loading ? "#ccc" : "#E8EEF9",
                  color: "#0B2447",
                  fontWeight: 800,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "전송 중..." : "보내기"}
              </button>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 20, marginTop: 18 }}>
              <a href="https://www.facebook.com/profile.php?id=61581863960708" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookLogo} alt="Facebook" style={{ width: 28, height: 28 }} />
              </a>
              <img src={tiktokLogo} alt="Tiktok" style={{ width: 28, height: 28 }} />
              <img src={youtubeLogo} alt="YouTube" style={{ width: 28, height: 28 }} />
              <a href="https://blog.naver.com/onepass_kr" target="_blank" rel="noopener noreferrer" aria-label="Naver Blog">
                <img src={nav} alt="Naver" style={{ width: 28, height: 28 }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
