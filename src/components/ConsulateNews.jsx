import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n4 from "../assets/img/N4.png";
import n5 from "../assets/img/n5.png";
import heroBg from "../assets/img/herobanner-1.png";
import fbIcon from "../assets/img/image20.png";
import kakaotalkIcon from "../assets/img/image17.png";
import zaloIcon from "../assets/img/image18.png";
import naverIcon from "../assets/img/image19.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import { useState, useEffect } from "react";
export default function ConsulateNews() {
  const [activeId, setActiveId] = useState(null);
    const [hoverId, setHoverId] = useState(null);
    const effectiveId = hoverId ?? activeId;
    const items = [
      { id: 1, name: "페이스북", icon: fbIcon, link: "https://www.facebook.com/profile.php?id=61581863960708" },
      { id: 2, name: "카카오톡", icon: kakaotalkIcon, link: "https://pf.kakao.com/_BHALn" },
      { id: 3, name: "Zalo", icon: zaloIcon, link: "https://zalo.me/0395944818" },
      { id: 4, name: "네이버", icon: naverIcon, link: "https://blog.naver.com/onepass_kr" },
    ];
  const { language } = useLanguage();
  const [service, setService] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });

  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

  const handleSubmit = async () => {
    if (!service || !name || !phone || !agree) {
      showTemporaryPopup("모든 항목을 입력하고 동의해 주세요.", true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://op-backend-60ti.onrender.com/api/tuvan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TenDichVu: service,
          HoTen: name,
          MaVung: countryCode,
          SoDienThoai: phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        showTemporaryPopup(`오류 발생: ${data.error || "Server error"}`, true);
        console.error("Server Error:", data);
        return;
      }

      showTemporaryPopup("상담 신청 완료되었습니다!");
      console.log("Server response:", data);


      setService("");
      setName("");
      setPhone("");
      setAgree(false);
    } catch (err) {
      console.error("Lỗi khi kết nối server:", err);
      showTemporaryPopup("서버 연결 실패");
    } finally {
      setLoading(false);
    }
  };


  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  return (
    <>
      <section style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        minHeight: "50vh",
        width: "100vw",
        paddingTop: "120px",
      }}>
        {/* Header title center */}
        <div style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            NEWSROOM
          </h1>
        </div>


        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            fontFamily: "sans-serif",
            zIndex: 9999,
          }}
        >
          {/* --- Bên trái --- */}
          <div
            style={{
              background: "#d7c199",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              height: "100%",
              minWidth: 310,
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16 }}>📞</span>
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                {language === "VI" ? (<>Điện thoại</>) : ("전화번호")}
              </span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 16, marginTop: 2 }}>
              (+82) 051-715-0607
            </div>
          </div>

          {/* --- Giữa --- */}
          <div
            style={{
              flex: 1,
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: "0 14px",
              height: "100%",
            }}
          >
            <label style={{ fontSize: 16 }}>{language === "VI" ? (<>Dịch vụ</>) : ("서비스 선택")}</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: 6,
                padding: "6px 10px",
                fontSize: 16,
                width: 160,
                height: 38,
                boxSizing: "border-box",
                marginRight: 15
              }}
            >
              <option value="">{language === "VI" ? (<>Chọn dịch vụ</>) : ("서비스 선택")}</option>
              <option value="인증 센터">{language === "VI" ? (<>Chứng thực</>) : ("인증 센터")}</option>
              <option value="결혼 이민">{language === "VI" ? (<>Kết hôn</>) : ("결혼 이민")}</option>
              <option value="출생신고 대행">{language === "VI" ? (<>Khai sinh, khai tử</>) : ("출생신고 대행")}</option>
              <option value="출입국 행정 대행">{language === "VI" ? (<>Xuất nhập cảnh</>) : ("출입국 행정 대행")}</option>
              <option value="신분증명 서류 대행">{language === "VI" ? (<>Giấy tờ tuỳ thân</>) : ("신분증명 서류 대행")}</option>
              <option value="입양 절차 대행">{language === "VI" ? (<>Nhận nuôi </>) : ("입양 절차 대행")}</option>
              <option value="비자 대행">{language === "VI" ? (<>Thị thực</>) : ("비자 대행")}</option>
              <option value="법률 컨설팅">{language === "VI" ? (<>Tư vấn pháp lý</>) : ("법률 컨설팅")}</option>
              <option value="B2B 서비스">{language === "VI" ? (<>Dịch vụ B2B</>) : ("B2B 서비스")}</option>
              <option value="기타">{language === "VI" ? (<>Khác </>) : ("기타")}</option>
            </select>

            <label style={{ fontSize: 16, marginLeft: 15, }}>{language === "VI" ? (<>Họ tên</>) : ("이름")}</label>
            <input
              placeholder={language === "VI" ? ("Họ tên") : ("이름")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "none",
                fontSize: 16,
                width: 160,
                height: 38,
                boxSizing: "border-box",

                marginRight: 15
              }}
              required
              pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
              title="Họ tên phải có ít nhất 2 ký tự, chỉ bao gồm chữ cái hoặc tiếng Hàn."
            />

            <label style={{ fontSize: 16 }}>{language === "VI" ? (<>Điện thoại</>) : ("전화번호")}</label>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: 6,
                padding: "6px 10px",
                fontSize: 16,
                width: 100,
                height: 38,
                boxSizing: "border-box",
              }}
            >
              <option value="">{language === "VI" ? (<>Chọn</>) : ("선택")}</option>
              <option value="+82">+82</option>
              <option value="+84">+84</option>
            </select>

            <input
              placeholder={language === "VI" ? "Số điện thoại" : "전화번호"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "none",
                fontSize: 16,
                width: 160,
                height: 38,
                boxSizing: "border-box",
              }}
              pattern={
                countryCode === "+82"
                  ? "[0-9]{9,11}"
                  : countryCode === "+84"
                    ? "[0-9]{9,10}"
                    : ".*"
              }
              title={
                countryCode === "+82"
                  ? "Số điện thoại Hàn Quốc phải có 9–11 chữ số."
                  : countryCode === "+84"
                    ? "Số điện thoại Việt Nam phải có 9–10 chữ số."
                    : "Vui lòng chọn mã quốc gia trước khi nhập số điện thoại."
              }
            />

            <label
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 16,
                gap: 4,
                color: "#bbb",
                whiteSpace: "nowrap",
                marginLeft: 20
              }}
            >
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginRight: 6 }}
              />
              {language === "VI" ? (<>Đồng ý xử lý thông tin cá nhân</>) : ("개인정보 수집 및 이용 동의")}
            </label>
          </div>

          {/* --- Nút gửi --- */}
          <div
            onClick={loading ? undefined : handleSubmit}
            style={{
              width: 310,
              background: "#d7c199",
              color: "#fff",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 24px",
              height: "100%",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: 16,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading
              ? language === "VI"
                ? "Đang gửi..."
                : "전송 중..."
              : language === "VI"
                ? "Tư vấn"
                : "상담 신청"}
          </div>
        </div>
        <div className="social-container">
          {items.map((item) => {
            const isExpanded = effectiveId === item.id;
            return (
              <div
                key={item.id}
                className={`social-btn ${isExpanded ? "expanded" : ""}`}
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => {
                  setActiveId((prev) => (prev === item.id ? null : item.id));
                  window.open(item.link, "_blank");
                }}
              >
                <img src={item.icon} alt={item.name} className="icon" />
                <span className="label"> {language === "VI" ? (
                  item.name === "페이스북" ? "Liên Kết Facebook"
                    : item.name === "카카오톡" ? " Liên Kết KakaoTalk"
                      : item.name === "Zalo" ? <>Liên Kết Zalo</>
                        : item.name === "네이버" ? "Liên Kết Naver"
                          : item.name
                ) : (
                  item.name
                )}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Thanh menu nhỏ */}
          <div
            style={{
              background: "#f9fbfc",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 24px",
              borderRadius: 4,
              marginBottom: 50,
            }}
          >
            {/* Tabs */}

            <div style={{ display: "flex", gap: 24}}>
              {/* 전체 뉴스 */}
              <span
                onClick={() => navigate("/news/전체 뉴스")}
                style={{
                  fontWeight: currentPath === "/news/전체 뉴스" ? 700 : 400,
                  color: currentPath === "/news/전체 뉴스" ? "#111827" : "#6b7280",
                  borderBottom:
                    currentPath === "/news/전체 뉴스" ? "2px solid #111827" : "none",
                  paddingBottom: currentPath === "/news/전체 뉴스" ? 4 : 0,
                  cursor: "pointer",
                }}
              >
                 {language === "VI" ? (<>Tất cả tin tức</>) : (" 전체 뉴스")}
              </span>

              {/* 대사관·총영사관 소식 */}
              <span
                onClick={() => navigate("/news/대사관•총영사관 소식")}
                style={{
                  fontWeight:
                    currentPath === "/news/대사관•총영사관 소식" ? 700 : 400,
                  color:
                    currentPath === "/news/대사관•총영사관 소식"
                      ? "#111827"
                      : "#6b7280",
                  borderBottom:
                    currentPath === "/news/대사관•총영사관 소식"
                      ? "2px solid #111827"
                      : "none",
                  paddingBottom:
                    currentPath === "/news/대사관•총영사관 소식" ? 4 : 0,
                  cursor: "pointer",
                }}
              >
                {language === "VI" ? (<>Tin tức Đại sứ / Lãnh sự quán</>) : (" 대사관·총영사관 소식")}

              </span>
            </div>

            {/* Search box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#fff",
                borderRadius: 20,
                padding: "6px 14px",
                border: "1px solid #e5e7eb",
                width: 220,
              }}
            >
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  color: "#111827",
                }}
              />
              <span
                style={{
                  color: "#6b7280",
                  fontSize: 16,
                  marginLeft: 4,
                  cursor: "pointer",
                }}
              >
                🔍
              </span>
            </div>
          </div>

          {/* Tiêu đề */}
          <h2
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#111827",
              marginBottom: 40,
            }}
          >
            {language === "VI" ? (<>Tin tức Đại sứ / Lãnh sự quán</>) : (" 대사관·총영사관 소식")}

          </h2>

          {/* News Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: 32,
            }}
          >
            {/* 1 */}


            {/* 4 */}
            <div
             onClick={() => (window.location.href = "/news대사관•총영사관%20소식/NewsDetail4")}
                            style={{ cursor: "pointer" }}>
              <img
                src={n4}
                alt="국경일 행사"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  marginBottom: 12,
                  objectFit: "cover",
                }}
              />
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                    {language === "VI" ? (<>09:00 Sáng | Ngày 27 tháng 09 năm 2025</>) : (" 2025년 09월 27일 | 오전 09:00")}

              </p>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 8,
                }}
              >
                 {language === "VI" ? (<>One Pass vinh dự nhận bằng khen tri ân t...</>) : ("주부산 베트남 총영사관 공식 개소: 한-베트남 관계 강화...")}

              </h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                  {language === "VI" ? (<>Ngày mùng 1 tháng 10 năm 2025, Công ty One Pass đã vinh dự được Tổng Lãnh sự quán Việt N</>) : ("2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며, 한-베트남 관계, 동남아 협력 등...")}
              </p>
              <a
                href="#"
                style={{
                  fontSize: 14,
                  color: "#2563eb",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: 10,
                }}
              >
                →
              </a>
            </div>

            {/* 5 */}
            <div  onClick={() => (window.location.href = "/news대사관•총영사관%20소식/NewsDetail5")}
                            style={{ cursor: "pointer" }}>
              <img
                src={n5}
                alt="문화 행사"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  marginBottom: 12,
                  objectFit: "cover",
                }}
              />
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                {language === "VI" ? (<>09:00 Sáng | Ngày 27 tháng 09 năm 2025</>) : ("2025년 09월 27일 | 오전 09:00")}

              </p>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 8,
                }}
              >
                {language === "VI" ? (<>“Xin chào”... Tổng lãnh sự quán Việt Nam</>) : ("“쑥쑥안(안녕하세요)”…주부산 베트남총영사관 문화 행사 ")}

              </h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                 {language === "VI" ? (<>Tổng Lãnh sự quán Việt Nam chuẩn bị có mặt tại Thành phố Busan . Ngày 13 tháng 8 vừa qua, th...</>) : ("2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며...")}
              </p>
              <a
                href="#"
                style={{
                  fontSize: 14,
                  color: "#2563eb",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: 10,
                }}
              >
                →
              </a>
            </div>
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
              gap: 10,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <button
                key={n}
                style={{
                  border: "none",
                  background: n === 1 ? "#111827" : "transparent",
                  color: n === 1 ? "#fff" : "#6b7280",
                  borderRadius: 4,
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
       <style>
{`
/* Mobile (max-width: 768px) */
@media (max-width: 768px) {
  section {
    padding: 40px 0 !important;
  }

  /* Khung chính */
  section > div {
    padding: 0 16px !important;
  }

  /* Thanh menu nhỏ */
  section > div > div:first-child {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 16px !important;
    padding: 16px !important;
  }

  /* Tabs */
  section > div > div:first-child > div:first-child {
    flex-wrap: wrap !important;
    gap: 16px !important;
  }

  /* Ô tìm kiếm */
  section input {
    font-size: 13px !important;
  }

  section > div > div:first-child > div:last-child {
    width: 100% !important;
  }

  /* Tiêu đề */
  section h2 {
    font-size: 20px !important;
    margin-bottom: 24px !important;
  }

  /* Lưới tin tức */
  section div[style*="grid"] {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }

  /* Hình ảnh */
  section img {
    height: auto !important;
  }

  /* Nội dung bài */
  section h3 {
    font-size: 15px !important;
  }

  section p {
    font-size: 13px !important;
  }

  /* Nút phân trang */
  section button {
    padding: 6px 10px !important;
    font-size: 13px !important;
  }
}

/* Tablet (768px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  section > div {
    padding: 0 24px !important;
  }

  section div[style*="grid"] {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
    gap: 28px !important;
  }

  section h2 {
    font-size: 22px !important;
  }
}
`}
</style>

      </section>
    </>
  );
}
