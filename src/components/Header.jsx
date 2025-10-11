import { useState, useEffect } from "react"; 
import logo from "../assets/img/Logo-name.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import "../style/App.css";

function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

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
  <div className="header-inner" style={{ width: "calc(100% - 40px)", maxWidth: 1300, padding: "8px 20px", borderRadius: 40 }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Link to="/" className="logo-link" >
          <img src={logo} alt="VCPC Logo" className="header-logo-img" />
        </Link>

        {/* Nav menu */}
        <nav className="navmenu">
          <div className="nav-pill">
            <ul className="nav-list">
              <li><Link to="/Introduction">ABOUT US</Link></li>

              {/* NEWSROOM */}
              <li>
                <Link
                  to="/news"
                  onClick={() => setActiveMenu("newsroom")}
                  onMouseEnter={() => setActiveMenu("newsroom")}
                >
                  NEWSROOM
                </Link>
              </li>

              <li>
                <Link
                  to="/Service"
                  onClick={() => setActiveMenu("services")}
                  onMouseEnter={() => setActiveMenu("services")}
                >
                  SERVICES
                </Link>
              </li>

              <li><Link to="/Consult">CONSULT</Link></li>

              <li>
                <Link
                  to="/Support"
                  onClick={() => setActiveMenu("support")}
                  onMouseEnter={() => setActiveMenu("support")}
                >
                  SUPPORT
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Ngôn ngữ */}
        <div
          className="header-right"
          style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 20 }}
        >
          <div className="lang-switch" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="globe-wrapper" aria-hidden style={{ marginRight: 8 }}>
              <img src={iconGlobal} alt="Globe Icon" />
            </span>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#fff", fontWeight: 600, fontSize: 22, letterSpacing: 1 }}>KO</a>
            <span className="lang-sep" style={{ color: "#fff", fontWeight: 600, fontSize: 18, margin: "0 8px" }}>/</span>
           
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#fff", fontWeight: 600, fontSize: 22, letterSpacing: 1 }}>VI</a>
          </div>
        </div>
      </div>

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
    </header>
  );
}

export default Header;
