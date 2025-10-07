import facebookLogo from "../assets/img/Facebook.svg";
import youtubeLogo from "../assets/img/Youtube.svg";
import linkedinLogo from "../assets/img/Linkedin.svg";
import logo from "../assets/img/Logo-name.png";
import "../style/App.css";

function Footer() {
  return (
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
        {/* Left: Logo text and contact */}
        <div style={{ flex: 1.4, minWidth: 320, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontWeight: 900, fontSize: 50, letterSpacing: 3, color: "#fff", lineHeight: 1 }}>
              <img src={logo} alt="" />
            </div>
          </div>
          <div style={{ color: "#E8EEF9", fontSize: 16, fontWeight: 400, lineHeight: 1.9 }}>
            <div>TEL / FAX : (+82) 51-715-0607</div>
            <div>대표자: 이종섭</div>
            <div>사업자등록번호: 740-87-03727</div>
          </div>
          <div style={{ color: "#AFC4E8", fontSize: 13, marginTop: 24 }}>
            ONE PASS INC. © all right reserve
          </div>
        </div>

        {/* Center: Quick Links */}
        <div style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column" }}>
          <div style={{ fontWeight: 700, fontSize: 22, color: "#E8EEF9", marginBottom: 16 }}>Quick Link’s</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              "회사 소개",
              "서비스",
              "뉴스룸",
              "진행 조회",
              "이용약관",
              "개인정보처리방침",
            ].map((txt, idx) => (
              <a key={idx} href="#" style={{ color: "#D6DEED", fontSize: 15, textDecoration: "none" }}>
                {txt}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Subscribe + Social */}
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
              style={{
                height: 46,
                padding: "0 22px",
                background: "#E8EEF9",
                color: "#0B2447",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
              }}
            >
              보내기
            </button>
          </div>

          <div style={{ display: "flex", gap: 20, marginTop: 18 }}>
            <a href="#" style={{ color: "#E8EEF9" }}>
              <img src={facebookLogo} alt="Facebook" style={{ width: 28, height: 28, objectFit: "contain" }} />
            </a>
            <a href="#" style={{ color: "#E8EEF9" }}>
              <img src={linkedinLogo} alt="LinkedIn" style={{ width: 28, height: 28, objectFit: "contain" }} />
            </a>
            <a href="#" style={{ color: "#E8EEF9" }}>
              <img src={youtubeLogo} alt="YouTube" style={{ width: 28, height: 28, objectFit: "contain" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
