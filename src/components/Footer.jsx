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
import { useLanguage } from "../LanguageContext.jsx";

function Footer() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });
  const getMessages = () => {
    const lang = language === "VI" ? "vi" : "ko"; 
    
    return {
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
    }[lang];
  };

  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

  const handleSend = async () => {
    const messages = getMessages();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showTemporaryPopup(messages.invalid, true);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("https://op-backend-60ti.onrender.com/api/save-email", { email });
      setEmail("");
      showTemporaryPopup(messages.success);
    } catch (err) {
      console.error("Lỗi gửi email:", err);
      showTemporaryPopup(messages.fail, true);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
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
          
          .popup-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 16px 30px;
            border-radius: 8px;
            font-size: 18px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            animation: pushDown 0.5s ease-out;
            z-index: 9999;
            min-width: 300px;
            text-align: center;
          }
          
          .popup-error {
            background: #E74C3C !important;
          }
        `}
      </style>

      {/* 🔹 Popup thông báo cải tiến */}
      {showPopup && (
        <div className={`popup-notification ${popupMessage.isError ? 'popup-error' : ''}`}>
          {popupMessage.text}
        </div>
      )}

      {/* 🔹 Footer content */}
      <footer
        className="footer"
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
          className="footer-container"
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
          <div style={{ flex: 1.4, minWidth: 400, display: "flex", flexDirection: "column", gap: 18, transform: "translateX(-60px)" }}>
            <div className="logo-footer" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src={logo} alt="Logo" style={{ width: 180 }} />
            </div>
            <div className="info-text" style={{ color: "#E8EEF9", fontSize: 16, fontWeight: 400, lineHeight: 1.9 }}>
              <div>TEL / FAX : (+82) 51-715-0607</div>
              <div>{language === "VI" ? (<>Địa chỉ: (48059) Tòa Byucksan e-Centum Classone, 915 - 916, 99 Centumdong-ro, Haeundae-gu, Busan, Hàn Quốc.</>) : (<> 주소: (48059) 부산광역시 해운대구 센텀동로 99, 915 - 916호 (재송동, 벽산이센텀클래스원) </>)}</div>
              <div>{language === "VI" ? (<>Số đăng ký kinh doanh: 740-87-03727</>) : ("사업자등록번호: 740-87-03727")}</div>
            </div>
            <div className="reserve" style={{ color: "#AFC4E8", fontSize: 13, marginTop: 24 }}>
              ONE PASS INC. © all right reserve
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="Quick-Links" style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#E8EEF9", marginBottom: 16 }}>Quick Link's</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Link to="/Introduction" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                {language === "VI" ? (<>Giới thiệu công ty</>) : ("회사 소개")}
              </Link>
              <Link to="/Service" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                {language === "VI" ? (<>Dịch vụ</>) : ("서비스")}
              </Link>
              <Link to="/News" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                {language === "VI" ? (<>Tin tức</>) : ("뉴스룸")}
              </Link>
              <Link to="/Support" state={{ tab: "Terms-of-Use" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                {language === "VI" ? (<>Điều khoản sử dụng</>) : ("이용약관")}
              </Link>
              <Link to="/Support" state={{ tab: "personal-information" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none", marginBottom: 10 }}>
                {language === "VI" ? (<>Xử lý thông tin cá nhân</>) : ("개인정보처리방침 ")}
              </Link>
            </div>
          </div>

          {/* Right: Subscribe */}
          <div className="subscribe-box" style={{ flex: 1.2, minWidth: 300, display: "flex", gap: 18 }}>
            <div className="update-title" style={{ fontWeight: 700, fontSize: 22, color: "#E8EEF9", marginBottom: 8 }}>
              {language === "VI" ? (<>Nhận thông tin mới nhất</>) : ("For Every Update.")}
            </div>

            <div
              className="update-input-box"
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
                placeholder={language === "VI" ? "Nhập email" : "이메일 입력"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress} 
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
                  fontWeight: 600,
                  border: "none",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background 0.3s ease",
                }}
              >
                {loading
                  ? language === "VI"
                    ? "Đang gửi..."
                    : "전송 중..."
                  : language === "VI"
                    ? "Gửi"
                    : "보내기"}
              </button>
            </div>

            {/* Social icons */}
            <div className="social-row" style={{ display: "flex", gap: 20, marginTop: 18 }}>
              <a href="https://www.facebook.com/profile.php?id=61581863960708" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookLogo} alt="Facebook" style={{ width: 28, height: 28 }} />
              </a>
              <a href="https://www.tiktok.com/@onepass_kr" target="_blank" rel="noopener noreferrer" aria-label="Tiktok">
                <img src={tiktokLogo} alt="Tiktok" style={{ width: 28, height: 28 }} />
              </a>
              <a href="https://www.youtube.com/@ONEPASSINC" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <img src={youtubeLogo} alt="YouTube" style={{ width: 28, height: 28 }} />
              </a>
              <a href="https://blog.naver.com/onepass_kr" target="_blank" rel="noopener noreferrer" aria-label="Naver Blog">
                <img src={nav} alt="Naver" style={{ width: 28, height: 28 }} />
              </a>
            </div>
          </div>
        </div>

        <style>
          {`
       @media (max-width: 768px) {
 .footer {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    flex-direction: column !important;
    overflow-x: hidden !important;
  }
     .logo-footer, .social-row {
    transform: none !important;
  }        
  .reserve {
    margin-left: 0 !important;
    font-size: 20px !important;
    transform: none !important;
    text-align: center !important;
  }

   .logo-footer {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin: 0 !important;
  }

  .info-text {
    padding: 0 16px !important;
    transform: none !important;
    text-align: center !important;
  }

   .social-row {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
  }

  .update-title {
    font-size: 26px !important;
    text-align: center !important;
  }

  .Quick-Links {
    display: none !important;
  }

  .footer-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    gap: 24px !important;
    padding: 0 0 !important;
    width: 100% !important;
    margin: 0 auto !important;
  }
              .logo-footer + .social-row {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-wrap: nowrap !important;
    gap: 20px !important; /* khoảng cách giữa logo và icon */
    width: auto !important;
    margin: 0 auto !important;
  }

  .footer-container > div {
    transform: none !important;
    min-width: 100% !important;
    text-align: center !important;
  }

  .subscribe-box {
    order: -1 !important;
    width: 100% !important;
    align-items: center !important;
  }

  .subscribe-box div {
    width: 100% !important;
  }

  .subscribe-box input {
    font-size: 15px !important;
    width: 100% !important;
  }

  .subscribe-box button {
    height: 48px !important;
    font-size: 14px !important;
    padding: 0 18px !important;
  }

  footer {
    padding: 30px 16px !important;
    overflow-x: hidden !important; /* Quan trọng */
  }
}

@media (max-width: 400px) {
  /* Ngăn tràn trắng toàn vùng footer */
  html, body, footer, .footer, .footer-container {
    overflow-x: hidden !important;
    max-width: 100% !important;
  }

  .footer {
    width: 100% !important;
    margin: 0 auto !important;
    padding: 20px 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: #1e2b55; /* hoặc màu gốc */
  }

  .footer-container {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 16px !important;
    width: 100% !important;
    text-align: center !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;
  }

  /* Gom logo và social cùng hàng */
  .logo-footer,
  .social-row {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    transform: none !important;
    padding: 0 !important;
    margin: 0 !important;
    box-sizing: border-box !important;
  }

  /* Logo + social cùng hàng, giữa màn hình */
  .logo-footer + .social-row,
  .footer .logo-footer + .social-row {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-wrap: nowrap !important;
    gap: 12px !important;
    width: 100% !important;
    margin: 0 auto !important;
  }

  /* Logo */
  .logo-footer img {
    height: 26px !important;
    width: auto !important;
    display: block !important;
  }

  /* Social icon */
  .social-row a,
  .social-row i {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .social-row a img,
  .social-row i {
    width: 20px !important;
    height: 20px !important;
  }

  /* Chữ và phần khác */
  .update-title {
    font-size: 22px !important;
    text-align: center !important;
  }

  .Quick-Links {
    display: none !important;
  }

  .subscribe-box input,
  .subscribe-box button {
    height: 40px !important;
  }
}
        `}
        </style>
      </footer>
    </>
  );
}

export default Footer;
