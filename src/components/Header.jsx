import { useState, useEffect } from "react";
import logo from "../assets/img/Logo-name.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import iconMenu from "../assets/img/iconMenu.png";
import "../style/App.css";
import { useLanguage } from "../LanguageContext";
function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  if (isLoginPage) return null;


  useEffect(() => {
    // Toggle sticky state based on scroll position and add/remove .scrolled on body
    const onScroll = () => {
      const scrolled = window.scrollY > 16; // when user scrolls past the header area
      setIsSticky(scrolled);
      try {
        if (scrolled) document.body.classList.add("scrolled");
        else document.body.classList.remove("scrolled");
      } catch (err) {
        // ignore in non-browser environments
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // run once to initialise
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { language, setLanguage } = useLanguage();// 👈 ngôn ngữ mặc định là KO

  const menuTexts = {
    KO: {
      about: "ABOUT US",
      newsroom: "NEWSROOM",
      services: "SERVICES",
      consult: "CONSULT",
      support: "SUPPORT",
    },
    VI: {
      about: "ABOUT US",
      newsroom: "NEWSROOM",
      services: "SERVICES",
      consult: "CONSULT",
      support: "SUPPORT",
    },
  };


  return (
    <header
      id="header"
      className={`header d-flex align-items-center center-x ${isSticky ? 'header--sticky' : ''}`}
      style={{
        position: isSticky ? "fixed" : "absolute",
        left: 0,
        top: isSticky ? 0 : 16,
        width: "100%",
        zIndex: 9999,
        margin: 0,
        padding: 0,
        borderRadius: 0,
        transition: "top 0.18s ease, background-color 0.2s ease",
        transform: "translateX(0px)",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="header-inner" style={{ width: "calc(100% - 40px)", maxWidth: 1300, padding: "8px 20px", borderRadius: 40, alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <div
            className="menu-toggle"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <img src={iconMenu} alt="Menu" />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            <Link to="/" className="logo-link" >
              <img src={logo} alt="VCPC Logo" className="header-logo-img" />
            </Link>

            {/* Nav menu */}
            <nav className="navmenu">
              <div className="nav-pill">
                <ul className="nav-list">
                  <li><Link to="/Introduction">{menuTexts[language].about}</Link></li>

                  <li>
                    <Link
                      to="/Service"
                      onClick={() => setActiveMenu("services")}
                      onMouseEnter={() => setActiveMenu("services")}
                    >
                      {menuTexts[language].services}
                    </Link>
                  </li>

                  <li><Link to="/Consult"
                    onClick={() => setActiveMenu("consult")}
                    onMouseEnter={() => setActiveMenu("consult")}
                  >{menuTexts[language].consult}</Link></li>

                  <li>
                    <Link
                      to="/news"
                      onClick={() => setActiveMenu("newsroom")}
                      onMouseEnter={() => setActiveMenu("newsroom")}
                    >
                      {menuTexts[language].newsroom}
                    </Link>
                  </li>


                  <li>
                    <Link
                      to="/Support"
                      onClick={() => setActiveMenu("support")}
                      onMouseEnter={() => setActiveMenu("support")}
                    >
                      {menuTexts[language].support}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div
              className="header-right"
              style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 20 }}
            >
              <div className="lang-switch" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setLanguage("KO");
                  }}
                  className={`lang-btn ${language === "KO" ? "active" : ""}`}
                  style={{ color: "#fff", fontWeight: 600, fontSize: 22, letterSpacing: 1 }}
                >
                  KO
                </a>

                <span
                  className="lang-sep"
                  style={{ color: "#fff", fontWeight: 600, fontSize: 18, margin: "0 8px" }}
                >
                  /
                </span>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setLanguage("VI");
                  }}
                  className={`lang-btn ${language === "VI" ? "active" : ""}`}
                  style={{ color: "#fff", fontWeight: 600, fontSize: 22, letterSpacing: 1 }}
                >
                  VI
                </a>

              </div>
            </div>
          </div>


          {showMobileMenu && (
            <div className="mobile-dropdown">
              <ul>
                <li><Link to="/Introduction" onClick={() => setShowMobileMenu(false)}>{menuTexts[language].about}</Link></li>
                <li><Link to="/Service" onClick={() => setShowMobileMenu(false)}>{menuTexts[language].services}</Link></li>
                <li><Link to="/Consult" onClick={() => setShowMobileMenu(false)}>{menuTexts[language].consult}</Link></li>
                <li><Link to="/news" onClick={() => setShowMobileMenu(false)}>{menuTexts[language].newsroom}</Link></li>
                <li><Link to="/Support" onClick={() => setShowMobileMenu(false)}>{menuTexts[language].support}</Link></li>
              </ul>

              
            </div>
          )}
          {/* Submenu NEWSROOM */}
          {activeMenu === "newsroom" && (
            <div
              className="submenu"
              style={{ marginTop: 10 }}
              onMouseEnter={() => setActiveMenu("newsroom")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="newsroom-tab">NEWSROOM</div>
              <div className="submenu-links">
                <ul>
                  <li><Link to="/news/전체 뉴스">전체뉴스</Link></li>
                  <li><Link to="/news/대사관•총영사관 소식">대사관·총영사관 소식</Link></li>
                </ul>
              </div>
            </div>
          )}


          {activeMenu === "consult" && (
            <div
              className="submenu"
              style={{ marginTop: 10 }}
              onMouseEnter={() => setActiveMenu("consult")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="newsroom-tab">CONSULT</div>
              <div className="submenu-links">
                <ul style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                  padding: 0,
                  margin: 0,
                  listStyle: "none"
                }}>
                  <li><Link to="/Consult" state={{ tab: "sns" }}>SNS 채팅 상담</Link></li>
                  <li><Link to="/Consult" state={{ tab: "phone" }}>전화 상담</Link></li>
                  <li><Link to="/Consult" state={{ tab: "email" }}>이메일 상담</Link></li>
                  <li><Link to="/Consult" state={{ tab: "visit" }}>방문 상담</Link></li>
                </ul>
              </div>
            </div>
          )}

          {/* Submenu SERVICES */}
          {activeMenu === "services" && (
            <div
              className="submenu"
              style={{ marginTop: 10 }}
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="newsroom-tab">SERVICES</div>
              <div className="submenu-links">
                <ul style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                  padding: 0,
                  margin: 0,
                  listStyle: "none"
                }}>
                  <li><Link to="/Service" state={{ serviceIndex: 0 }}>인증 센터</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 1 }}>결혼 이민</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 2 }}>출생신고</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 3 }}>출입국 행정</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 4 }}>신분증명 서류</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 5 }}>입양 • 자녀 인지</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 6 }}>비자 대행</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 7 }}>법률 컨설팅</Link></li>
                  <li><Link to="/Service" state={{ serviceIndex: 8 }}>B2B 서비스</Link></li>
                </ul>
              </div>
            </div>
          )}

          {/* Submenu SUPPORT */}
          {activeMenu === "support" && (
            <div
              className="submenu"
              style={{ marginTop: 10 }}
              onMouseEnter={() => setActiveMenu("support")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="newsroom-tab">SUPPORT</div>
              <div className="submenu-links">
                <ul style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                  padding: 0,
                  margin: 0,
                  listStyle: "none"
                }}>
                  <li><Link to="/Support" state={{ tab: "profile-search" }}>진행 현황 조회</Link></li>
                  <li><Link to="/Support" state={{ tab: "contact" }}>Contact</Link></li>
                  <li><Link to="/Support" state={{ tab: "Terms-of-Use" }}>이용약관</Link></li>
                  <li><Link to="/Support" state={{ tab: "personal-information" }}>개인 정보 처리 방침</Link></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>
        {`
      /* === RESPONSIVE HEADER (700px -> 390px) === */
@media screen and (max-width: 700px) {
  .navmenu {
    display: none !important;
  }

  .header-inner {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 10px 18px !important;
    position: relative;
    background: transparent !important; /* 🔹 bỏ nền đen */
    border-radius: 40px;
  }

  /* Icon menu trái */
  .menu-toggle {
    display: block !important;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 10000;
  }

  .menu-toggle img {
    width: 26px;
    height: 26px;
  }

  /* Logo giữa */
  .logo-link {
    margin: 0 auto !important;
  }

  .header-logo-img {
    height: 28px !important;
    width: auto;
  }

  /* Icon globe phải */
  .globe-wrapper {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  .globe-wrapper img {
    width: 26px;
    height: 26px;
  }

  /* Dropdown menu trượt xuống */
  .mobile-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.9); /* 🔹 nền sáng nhẹ */
  
    animation: dropdownSlide 0.25s ease forwards;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .mobile-dropdown ul {
    list-style: none;
    margin: 0;
    padding: 12px 0;
    text-align: center;
  }

  .mobile-dropdown li {
    margin: 10px 0;
  }

  .mobile-dropdown li a {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
  }

  /* Hiện cả phần chuyển ngôn ngữ trong dropdown */
  .mobile-lang {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .mobile-lang a {
    color: #1a1a1a;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
  }

  @keyframes dropdownSlide {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* === THU NHỎ HƠN 390px === */
@media screen and (max-width: 390px) {
  .menu-toggle img {
    width: 22px;
    height: 22px;
  }

  .header-logo-img {
    height: 24px !important;
  }

  .globe-wrapper img {
    width: 22px;
    height: 22px;
  }

  .mobile-dropdown li a,
  .mobile-lang a {
    font-size: 18px;
  }
}

/* Ẩn menu mobile khi trở lại desktop */
@media screen and (min-width: 701px) {
  .menu-toggle,
  .mobile-dropdown {
    display: none !important;
  }
}
        `}
      </style>
    </header>
  );
}

export default Header;
