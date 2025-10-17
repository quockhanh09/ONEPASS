

import { useLanguage } from "../LanguageContext.jsx";

import { useState } from "react";
import vcpcLogo from "../assets/img/vcpc-header.png";
import meetingImg from "../assets/img/image8.png";
import heroBg from "../assets/img/herobanner-1.png";
import imgProfessional from "../assets/img/8.png";
import imgTrust from "../assets/img/7.png";
import imgEfficiency from "../assets/img/6.png";
import imgCustomer from "../assets/img/5.png";
import n1 from "../assets/img/n1.png"
import n2 from "../assets/img/n2.png"
import n3 from "../assets/img/n3.png"
import n4 from "../assets/img/N4.png"
import n5 from "../assets/img/n5.png"

const CARDS = [
  {
    title: "전문성",
    desc: "원패스는 정확하고 최신 정보로 완벽한 서류 절차를 보장합니다. 급변하는 법률과 규정들을 항상 주시하며 고객의 문제를 정확히 파악하고, 최적의 해결책을 제시합니다.",
    img: imgProfessional,
  },
  {
    title: "신뢰",
    desc: "모든 과정은 고객에게 투명하게 공개되며, 정직한 서비스로 믿음을 쌓아갑니다. 저희는 단기적인 이익보다 고객과의 장기적인 신뢰 관계를 더 중요하게 생각합니다.",
    img: imgTrust,
  },
  {
    title: "효율성",
    desc: "불필요한 절차와 시행착오를 줄여 시간과 노력을 최소화합니다. 효율적인 업무 처리로 고객의 부담을 덜고, 신속한 서비스로 만족도를 높입니다.",
    img: imgEfficiency,
  },
  {
    title: "고객 중심",
    desc: "고객 한 분 한 분의 고유한 상황을 깊이 이해하고, 그에 맞는 가장 최적의 해결책을 제시합니다. 단순한 서류 처리자가 아닌, 고객의 진정한 동반자가 될 것을 약속드립니다.",
    img: imgCustomer,
  },
];

function Introduction() {
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


  const [selected, setSelected] = useState(0);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      {/* PHẦN GIỚI THIỆU */}
      <section style={{
        margin: 0,
        padding: 0,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        minHeight: "40vh",
        width: "100vw",
        paddingTop: "120px",
      }}>
        {/* Header title center */}
        <div style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            NEWSROOM
          </h1>

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
                <option value="">{language === "VI" ? (<>Chọn</>) : ("이름")}</option>
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
        </div>
        {/* Main content row */}

      </section>

      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30
          }}>
            <h2><a href="/news/전체 뉴스" style={{ fontSize: 24, fontWeight: 700, color: "#384D8D", textDecoration: "none" }} >전체 뉴스</a></h2>
            <a href="/news/전체 뉴스" style={{ fontSize: 15, color: "#384D8D", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              더보기 →
            </a>
          </div>

          {/* News Cards */}
          <div style={{
            display: "flex",
            gap: 30,
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}>
            {/* Card 1 */}
            <div onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail")} style={{ flex: "1 1 30%", minWidth: 300 }}>
              <img src={n1} alt="추석 연휴 안내"
                style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>2025년 09월 30일 | 오전 09:00</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>추석 연휴 휴무 안내</h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                안녕하세요. 고객 여러분께 저희 원패스는 추석 연휴를 맞아 아래와 같이 휴무를 시행함을 알려드립니다...
              </p>
            </div>

            {/* Card 2 */}
            <div onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail2")} style={{ flex: "1 1 30%", minWidth: 300 }}>
              <img src={n2} alt="베트남 총영사관 개소"
                style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>2025년 09월 27일 | 오전 09:00</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>주부산 베트남 총영사관 공식 개소</h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며...
              </p>
            </div>

            {/* Card 3 */}
            <div onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail3")} style={{ flex: "1 1 30%", minWidth: 300 }}>
              <img src={n3} alt="원패스 업무 개시 안내"
                style={{ width: "100%", height: 215.91, borderRadius: 8, marginBottom: 12 }} />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>2025년 09월 25일 | 오전 09:00</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>원패스(One Pass) 공식 업무 개시 안내</h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                2025년 10월 1일, 원패스가 고객 여러분을 찾아갑니다...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <h2><a href="/news/대사관•총영사관 소식" style={{ fontSize: 24, fontWeight: 700, color: "#384D8D", textDecoration: "none" }} >대사관•총영사관 소식</a></h2>
            <a
              href="/news/대사관•총영사관 소식"
              style={{
                fontSize: 15,
                color: "#384D8D",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              더보기 →
            </a>
          </div>

          {/* News Cards */}
          <div
            style={{
              display: "flex",
              gap: 30,
              flexWrap: "wrap",

            }}
          >
            {/* Card 1 */}
            <div
              onClick={() => (window.location.href = "/news대사관•총영사관 소식/NewsDetail4")}
              style={{
                width: 380,
                flexShrink: 0,
              }}
            >
              <img
                src={n4}
                alt="추석 연휴 안내"
                style={{
                  width: 380,
                  height: 216,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>
                2025년 09월 30일 | 오전 09:00
              </p>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 8,
                }}
              >
                추석 연휴 휴무 안내
              </h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                안녕하세요. 고객 여러분께 저희 원패스는 추석 연휴를 맞아 아래와 같이
                휴무를 시행함을 알려드립니다...
              </p>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => (window.location.href = "/news대사관•총영사관 소식/NewsDetail5")}
              style={{
                width: 380,
                flexShrink: 0,
              }}
            >
              <img
                src={n5}
                alt="베트남 총영사관 개소"
                style={{
                  width: 380,
                  height: 216,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>
                2025년 09월 27일 | 오전 09:00
              </p>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#384D8D",
                  marginBottom: 8,
                }}
              >
                주부산 베트남 총영사관 공식 개소
              </h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며...
              </p>
            </div>
          </div>
        </div>
      </section>


      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>

          {/* LEFT: Calendar */}
          <div style={{ flex: "0 0 45%" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e3a8a", marginBottom: 20 }}>
              업무 일정 (휴일 일정)
            </h2>
            <div style={{
              width: 460,
              maxWidth: '100%',
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 8px 24px rgba(12,20,40,0.08)",
              border: '1px solid rgba(15,23,42,0.06)',
              padding: "15px 20px",
              textAlign: "center",
              fontFamily: 'Inter, Arial, sans-serif'
            }}>
              {/* Styled Calendar (matches provided design) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-start', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#0b1220', lineHeight: 1 }}>{calendarDate.getMonth() + 1}</div>
                  <div style={{ fontSize: 16, color: '#6b7280', fontWeight: 600, lineHeight: 1, transform: 'translateY(1px)' }}>▾</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#0b1220', lineHeight: 1 }}>{calendarDate.getFullYear()}</div>
                  <div style={{ fontSize: 16, color: '#6b7280', fontWeight: 600, lineHeight: 1, transform: 'translateY(1px)' }}>▾</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 56px)', gap: 6, justifyContent: 'center', marginBottom: 12 }}>
                {['일', '월', '화', '수', '목', '금', '토'].map((d, i) => (
                  <div key={d} style={{ width: 56, fontSize: 13, color: '#9aa4b8', textAlign: 'center', lineHeight: '18px' }}>{d}</div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 56px)', gap: 8, justifyContent: 'center' }}>
                {(() => {
                  const year = calendarDate.getFullYear();
                  const month = calendarDate.getMonth();
                  const firstDay = new Date(year, month, 1).getDay();
                  const daysInMonth = new Date(year, month + 1, 0).getDate();
                  const totalCells = 35; // 5 rows x 7 cols
                  const today = new Date(); // 🔴 Lấy ngày hiện tại
                  const cells = [];

                  for (let i = 0; i < totalCells; i++) {
                    const dayNum = i - firstDay + 1;
                    const isValid = dayNum >= 1 && dayNum <= daysInMonth;
                    const col = i % 7;
                    const isWeekend = col === 0 || col === 6;

                    const isSelected =
                      selectedDate &&
                      isValid &&
                      selectedDate.getFullYear() === year &&
                      selectedDate.getMonth() === month &&
                      selectedDate.getDate() === dayNum;

                    const isToday =
                      isValid &&
                      today.getFullYear() === year &&
                      today.getMonth() === month &&
                      today.getDate() === dayNum; // ✅ So sánh với ngày hiện tại

                    cells.push(
                      <div
                        key={i}
                        onClick={() => isValid && setSelectedDate(new Date(year, month, dayNum))}
                        style={{
                          height: 56,
                          width: 56,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 16,
                          fontWeight: isSelected || isToday ? 700 : 400,
                          color: isValid
                            ? isToday
                              ? '#fff' // chữ trắng
                              : isSelected
                                ? '#ef4444'
                                : isWeekend
                                  ? '#ef4444'
                                  : '#111827'
                            : 'transparent',
                          cursor: isValid ? 'pointer' : 'default',
                          borderRadius: 10,
                          background: isToday ? '#5C7DE1' : 'transparent', // 🔴 tô nền đỏ cho hôm nay
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {isValid ? dayNum : ''}
                      </div>
                    );
                  }
                  return cells;
                })()}
              </div>
            </div>
          </div>

          {/* RIGHT: News */}
          {/* <div style={{ flex: "0 0 50%" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e3a8a", marginBottom: 20 }}>
              법률 관련 뉴스
            </h2>

            {[...Array(4)].map((_, idx) => (
              <div key={idx} style={{
                borderBottom: "1px solid #e5e7eb",
                padding: "12px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#111827", marginBottom: 4 }}>
                    한국 체류 베트남 교민 대상 주요 법률 안내 강화
                  </p>
                  <p style={{ fontSize: 13, color: "#9ca3af", margin: 0 }}>📅 2025.10.15</p>
                </div>
                <a href="#" style={{
                  color: "#3b82f6",
                  fontSize: 14,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 4
                }}>
                  더 보기 →
                </a>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Introduction;
