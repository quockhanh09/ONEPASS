import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Nhận props: services, language
export default function MainIconBar({ services, language }) {
  // Không mặc định chọn icon nào khi load trang
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [fixed, setFixed] = useState(false);
  const barRef = useRef(null);
  const navigate = useNavigate();

  // Hiệu ứng fixed khi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!barRef.current) return;
      const rect = barRef.current.getBoundingClientRect();
      setFixed(rect.top <= 50); // 50px giống Service.jsx
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mapping slug cho từng dịch vụ (phải giống Service.jsx)
  const serviceSlugs = [
    "chung-thuc-hop-phap-hoa", // 0: 영사확인, 공증
    "ket-hon", // 1: 결혼 이민
    "khai-sinh-khai-tu", // 2: 출생신고
    "quoc-tich", // 3: 국적
    "ho-chieu-ho-tich", // 4: 여권 • 호적
    "nhan-nuoi", // 5: 입양 • 자녀 인지
    "thi-thuc", // 6: 비자 대행
    "tu-van-phap-ly", // 7: 법률 컨설팅
    "dich-vu-b2b", // 8: B2B 서비스
  ];

  // Xử lý click: chuyển sang /service/slug đúng chuẩn
  const handleServiceClick = (i) => {
    const slug = serviceSlugs[i] || "";
    if (slug) {
      navigate(`/service/${slug}`);
    }
  };

  return (
    <div
      className="main-icon"
      ref={barRef}
      style={{
        position: fixed ? "sticky" : "relative",
        top: 50,
        zIndex: 1000,
        background: "#fff",
        width: "100%",
      }}
    >
      <div
        className="main-icon-1"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            margin: "0 auto",
            padding: "10px 0",
          }}
        >
          {/* ----- Mũi tên trái ----- */}
          <div
            className="arrow-btn arrow-left"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === 0 ? services.length - 1 : prev - 1
              )
            }
            style={{ cursor: "pointer" }}
          >
            <span className="arrow-icon">←</span>
          </div>

          {/* Container ICON */}
          <div className={`main-icon-container${fixed ? ' fixed' : ''}`}
          >
            {services.map((item, i) => {
              const isActive = activeIndex === i;
              const currentIcon = isActive
                ? item.activeIcon || item.icon
                : hoverIndex === i
                  ? item.hoverIcon || item.icon
                  : item.icon;
              return (
                <div
                  key={i}
                  className={`main-icon-item${isActive ? " active" : ""}`}
                  onClick={() => {
                    setActiveIndex(i);
                    handleServiceClick(i);
                  }}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  style={{
                    width: 120,
                    height: 140,
                    textAlign: "center",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="main-icon-img"
                    src={currentIcon}
                    alt={item.title}
                    style={{
                      width: 80,
                      height: 80,
                      transition: "opacity 0.3s",
                    }}
                  />
                  <div
                    className="main-icon-title"
                    style={{
                      marginTop: 12,
                      fontSize: 15,
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "#2B3A67" : "#222",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {language === "VI" ? (
                      item.title === "영사확인, 공증" ? <>Hợp pháp hóa<br />công chứng</>
                        : item.title === "결혼 이민" ? "Kết hôn"
                          : item.title === "출생신고" ? <>Khai sinh, khai tử</>
                            : item.title === "국적" ? <>Quốc tịch </>
                              : item.title === "여권 • 호적" ? "Hộ chiếu, Hộ tịch"
                                : item.title === "입양 • 자녀 인지" ? <>Nhận nuôi </>
                                  : item.title === "비자 대행" ? <>Thị thực</>
                                    : item.title === "법률 컨설팅" ? "Tư vấn pháp lý"
                                      : item.title === "B2B 서비스" ? <>Dịch vụ B2B</>
                                        : item.title
                    ) : (
                      item.title
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ----- Mũi tên phải ----- */}
          <div
            className="arrow-btn arrow-right"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === services.length - 1 ? 0 : prev + 1
              )
            }
            style={{ cursor: "pointer" }}
          >
            <span className="arrow-icon">→</span>
          </div>
        </div>
      </div>
      <style>{`
      .main-icon-container {
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;
        background: #fff;
        z-index: 1000;
      }
      .main-icon-container.fixed {
        position: fixed;
        top: 45px;
        left: 0;
        width: 100%;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 10px 0;
        z-index: 1000;
      }
      .main-icon-item {
        display: flex;
        box-sizing: border-box;
        opacity: 1;
        transform: none;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
      .main-icon-title { font-size: 15px; }
      .arrow-btn { display: none; }
      @media (max-width: 768px) {
        .main-icon-container {
          display: flex !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          scroll-behavior: smooth !important;
          -webkit-overflow-scrolling: touch !important;
          gap: 15px !important;
          padding: 0 20px !important;
          justify-content: flex-start !important;
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        .main-icon-container::-webkit-scrollbar { display: none !important; }
        .main-icon-item {
          position: static !important;
          opacity: 1 !important;
          transform: none !important;
          pointer-events: auto !important;
          flex-shrink: 0 !important;
          width: 95px !important;
          height: 120px !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .main-icon-img { width: 60px !important; height: 60px !important; }
        .main-icon-title { font-size: 12px !important; margin-top: 6px !important; text-align: center !important; white-space: nowrap !important; }
        .arrow-btn { display: none !important; }
      }
      `}</style>
    </div>
  );
}