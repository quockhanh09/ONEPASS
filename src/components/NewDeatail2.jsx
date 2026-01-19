import React from "react";
import n1 from "../assets/img/n19.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n8 from "../assets/img/n8.png";
import heroBg from "../assets/img/herobanner-1.png";
import consulate from "../assets/img/n2.png"; 
import fbIcon from "../assets/img/image20.png";
import kakaotalkIcon from "../assets/img/image17.png";
import zaloIcon from "../assets/img/image18.png";
import naverIcon from "../assets/img/image19.png";
import { useLanguage } from "../LanguageContext.jsx";
import { useState, useEffect } from "react";

const relatedNews = [
    {
        id: 1,
        img: n1,
        title: "영사과 휴무 일정 안내",
        desc: "2023년 9월 추석 연휴 기간 동안...",
    },
    {
        id: 2,
        img: n2,
        title: "베트남 총영사관 개소식",
        desc: "호찌민시 외교부는 새로운 총영사관 개소를...",
    },
    {
        id: 3,
        img: n3,
        title: "비자 신청 접수 안내",
        desc: "비자 관련 업무는 10월 1일부터 재개됩니다.",
    },
];

export default function NewsDetail2() {
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
        const lang = localStorage.getItem("lang") || "ko";

        const messages = {
          ko: {
            empty: "모든 항목을 입력하고 동의해 주세요.",
            success: "상담 신청 완료되었습니다!",
            fail: "서버 연결 실패 (Server connection failed)",
            serverError: "서버 오류가 발생했습니다.",
          },
          vi: {
            empty: "Vui lòng điền đầy đủ thông tin và đồng ý.",
            success: "Đăng ký tư vấn thành công!",
            fail: "Kết nối máy chủ thất bại.",
            serverError: "Đã xảy ra lỗi máy chủ.",
          },
        };

        if (!service || !name || !phone || !agree) {
          showTemporaryPopup(messages[lang].empty, true);
          return;
        }

        setLoading(true);

        try {
          const response = await fetch("https://onepasscms-backend-tvdy.onrender.com/api/tuvan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              TenDichVu: service,
              TenHinhThuc: "Tư Vấn Nhanh", 
              HoTen: name,
              MaVung: countryCode,
              SoDienThoai: phone,
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            showTemporaryPopup(`${messages[lang].serverError}`, true);
            console.error("Server Error:", data);
            return;
          }

          showTemporaryPopup(messages[lang].success);
          setService("");
          setName("");
          setPhone("");
          setAgree(false);
        } catch (err) {
          console.error("Lỗi khi kết nối server:", err);
          showTemporaryPopup(messages[lang].fail, true);
        } finally {
          setLoading(false);
        }
      };

    return (
        <>
            <section
                style={{
                    margin: 0,
                    padding: 0,
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    minHeight: "50vh",
                    width: "100vw",
                    paddingTop: "120px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: 60,
                        marginBottom: 30,
                    }}
                >
                    <h1
                        style={{
                            fontFamily: 'TrajanPro3, "Times New Roman", serif',
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 60,
                            lineHeight: 1.5,
                            margin: 0,
                            letterSpacing: 1,
                        }}
                    >
                        {language === "VI" ? "TIN TỨC" : "NEWSROOM"}
                    </h1>
                </div>

                 <div className="consultation-bar"
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
                      <option value="인증 센터">{language === "VI" ? (<>Hợp pháp hóa, công chứng</>) : ("영사확인, 공증")}</option>
                      <option value="결혼 이민">{language === "VI" ? (<>Kết hôn</>) : ("결혼 이민")}</option>
                      <option value="출생신고 대행">{language === "VI" ? (<>Khai sinh, khai tử</>) : ("출생신고 대행")}</option>
                      <option value="국적 대행">{language === "VI" ? (<>Quốc tịch</>) : ("국적 대행")}</option>
                      <option value="여권 • 호적 대행">{language === "VI" ? (<>Hộ chiếu, Hộ tịch</>) : ("여권 • 호적 대행")}</option>
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

            <section>
  <div
    style={{
      maxWidth: "1250px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
      color: "#222",
      lineHeight: "1.8",
    }}
  >
    <h1
      style={{
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px",
        textAlign:"justify"
      }}
    >
      {language === "VI"
        ? <>Tổng lãnh sự quán Việt Nam tại Busan chính thức khai trương: Kỷ nguyên hợp tác mới giữa Hàn Quốc và Việt Nam tại khu vực Nam Bộ</>
        : "주부산 베트남 총영사관 공식 개소: 한-베트남 남부지역 협력의 새 시대 개막"}
    </h1>

    <p style={{ fontSize: "14px", marginBottom: "10px",textAlign:"justify" }}>
      {language === "VI"
        ? "Ngày 01 tháng 10 năm 2025, Tổng Lãnh sự quán Việt Nam tại Busan đã chính thức đi vào hoạt động, đánh dấu một cột mốc quan trọng trong quan hệ giữa Hàn Quốc và Việt Nam, đặc biệt là trong hợp tác ngoại giao tại khu vực Đông Nam Hàn Quốc."
        : "2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 업무를 개시하며, 한-베트남 관계, 특히 한국 동남부 지역에서의 외교적 협력에 있어 중요한 이정표를 세웠습니다."}
    </p>

    <p style={{ fontSize: "14px", marginBottom: "20px",textAlign:"justify" }}>
      {language === "VI"
        ? "Lễ khai trương đã được tổ chức trang trọng với sự tham dự của đại diện Bộ Ngoại giao hai nước, lãnh đạo chính quyền thành phố Busan, cùng đông đảo cộng đồng người Việt đang sinh sống, học tập và tham gia các hoạt động kinh tế tại khu vực Busan - Ulsan - Gyeongnam (Bu/Ul/Gyeong)."
        : "저개소식은 양국 외교부 대표, 부산광역시 정부 관계자, 그리고 부산-울산-경남(부/울/경) 지역에 거주하며 학업 및 경제 활동에 참여하고 있는 수많은 베트남 교민들이 참석한 가운데 성대하게 진행되었습니다."}
    </p>

    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <img
        src={consulate}
        alt="추석 안내"
        style={{
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      />
    </div>

    <div style={{ fontSize: "14px", marginBottom: "40px" ,textAlign:"justify"}}>
      <p>
        {language === "VI"
          ? "Tổng Lãnh sự quán đặt tại trung tâm Busan, có sứ mệnh chính là cung cấp các dịch vụ lãnh sự thiết yếu một cách thuận tiện nhất cho khoảng 60.000 kiều bào Việt Nam sinh sống tại khu vực này, bao gồm: cấp/đổi hộ chiếu, visa, công chứng, và hỗ trợ pháp lý."
          : "부산 중심부에 자리 잡은 총영사관은 이 지역에 거주하는 약 6만 명의 베트남 교민들을 위해 여권 발급 및 교체, 비자(사증), 공증, 법률 지원 등 필수 영사 서비스를 가장 편리하게 제공하는 것을 주요 사명으로 합니다."}
      </p>

      <p>
        {language === "VI"
          ? "Việc mở Tổng Lãnh sự quán không chỉ nhằm hỗ trợ kiều bào mà còn được kỳ vọng sẽ đóng vai trò là cầu nối mạnh mẽ, thúc đẩy các hoạt động kinh tế, thương mại, đầu tư và du lịch giữa các tỉnh miền Nam Việt Nam và các trung tâm công nghiệp, kinh tế lớn của Hàn Quốc như Busan và Ulsan."
          : "총영사관 개소는 단순히 교민을 지원하는 것을 넘어, 베트남 남부 지방과 부산, 울산 등 한국의 주요 산업 및 경제 중심지 간의 경제, 무역, 투자, 관광 활동을 강력하게 촉진하는 가교 역할도 할 것으로 기대됩니다"}
      </p>

      <p>
        {language === "VI"
          ? 'Đại diện Bộ Ngoại giao Việt Nam nhấn mạnh tại sự kiện: "Việc thành lập Tổng Lãnh sự quán tại Busan thể hiện ý chí mạnh mẽ của Chính phủ Việt Nam trong việc bảo vệ và hỗ trợ quyền lợi chính đáng của công dân Việt Nam ở nước ngoài, đồng thời mở ra một chương mới cho quan hệ Đối tác Chiến lược Toàn diện giữa hai quốc gia.”'
          : '이날 행사에서 베트남 외교부 대표는 "주부산 총영사관의 설립은 해외 거주 베트남 국민의 정당한 권익을 보호하고 지원하려는 베트남 정부의 강력한 의지를 보여주는 것이며, 양국 간 포괄적 전략적 동반자 관계의 새로운 장을 열게 될 것입니다"라고 강조했습니다.'}
      </p>

      <p style={{ color: "#666", fontSize: "14px", marginTop: "20px" }}>
        {language === "VI"
          ? "sáng lúc 09:00 Sáng | Ngày 27 tháng 09 năm 2025"
          : "2025년 09월 27일 | 오전 09:00"}
      </p>
    </div>

    <h2
      style={{
        fontSize: "22px",
        fontWeight: "600",
        paddingBottom: "10px",
        marginBottom: "25px",
      }}
    >
      {language === "VI" ? "Tin liên quan" : "관련 뉴스"}
    </h2>

     <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                                gap: 32,
                            }}
                        >
                            {/* 1 */}
                            <div
                                onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail")}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={n1}
                                    alt="추석 연휴 휴무 안내"
                                    style={{
                                        width: "100%",
                                        borderRadius: 8,
                                        marginBottom: 12,
                                        objectFit: "cover",
                                    }}
                                />
                                <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                    {language === "VI" ? (<>09:00 Sáng | Ngày 30 tháng 09 năm 2025</>) : (" 2025년 09월 30일 | 오전 09:00")}
                                </p>
                                <h3
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#111827",
                                        marginBottom: 8,
                                    }}
                                >
                                    {language === "VI" ? (<>Thông báo lịch nghỉ Tết Trung thu Hàn Qu...</>) : ("추석 연휴 휴무 안내")}
                                </h3>
                                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                    {language === "VI" ? (<>Kính gửi Quý Khách hàng và Đối tác, One Pass xin trân trọng thông báo lịch nghỉ Tết Trung thu năm</>) : ("안녕하세요. 고객 여러분께 저희 원패스는 추석 연휴를 맞아 아래와 같이 휴무를 시행함을 알려드립니다...")}
                                </p>
                                <a
                                    href="/news전체 뉴스/NewsDetail"
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
    
    
                            {/* 2 */}
                            <div
                              onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail2")}
                            >
                                <img
                                    src={n2}
                                    alt="베트남 총영사관 개소"
                                    style={{
                                        width: "100%",
                                        borderRadius: 8,
                                        marginBottom: 12,
                                        objectFit: "cover",
                                    }}
                                />
                                <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                    {language === "VI" ? (<>09:00 Sáng | Ngày 30 tháng 09 năm 2025</>) : (" 2025년 09월 30일 | 오전 09:00")}
                                </p>
                                <h3
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#111827",
                                        marginBottom: 8,
                                    }}
                                >
                                    {language === "VI" ? (<>Tổng lãnh sự quán Việt Nam tại Busan chí...</>) : ("주부산 베트남 총영사관 공식 개소")}
                                </h3>
                                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                     {language === "VI" ? (<>Ngày 01 tháng 10 năm 2025, Tổng Lãnh sự quán Việt Nam tại Busan đã chính thức đi vào hoạt đ...</>) : (" 2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며... ")}
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
    
                            {/* 3 */}
                            <div onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail3")}>
                                <img
                                    src={n3}
                                    alt="원패스(One Pass) 업무 개시"
                                    style={{
                                        width: "100%",
                                        height:215.91,
                                        borderRadius: 8,
                                        marginBottom: 12,
                                        objectFit: "cover",
                                    }}
                                />
                                <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                    {language === "VI" ? (<>09:00 Sáng | Ngày 25 tháng 09 năm 2025</>) : (" 2025년 09월 25일 | 오전 09:00")}
                                </p>
                                <h3
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#111827",
                                        marginBottom: 8,
                                    }}
                                >
                                    {language === "VI" ? (<>Kể từ tháng 10/2025, One Pass chính thức ...</>) : ("원패스(One Pass) 공식 업무 개시 안내")}
                                </h3>
                                <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                    {language === "VI" ? (<>Chúng tôi xin vui mừng thông báo: Công ty cung cấp giải pháp và đại diện thực hiện thủ tục hành ...</>) : ("2025년 10월 1일, 원패스가 고객 여러분을 찾아갑니다...")}
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
  </div>
</section>
        </>
    );
}
