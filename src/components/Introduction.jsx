

import { useLanguage } from "../LanguageContext.jsx";
import { useState } from "react";
import vcpcLogo from "../assets/img/vcpc-header.png";
import meetingImg from "../assets/img/image8.png";
import heroBg from "../assets/img/herobanner-1.png";
import imgProfessional from "../assets/img/8.png";
import imgTrust from "../assets/img/7.png";
import imgEfficiency from "../assets/img/6.png";
import imgCustomer from "../assets/img/5.png";


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
  const [selected, setSelected] = useState(0);
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
        <div className="services-h1" style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
             {language === "VI" ? (<>VỀ CHÚNG TÔI</>) : ("ABOUT US")}
          </h1>
           <style>
            {`
      /* responsive chỉ chỉnh vị trí chữ */
      @media (max-width: 768px) {
        .services-h1 {
          position: relative;
          top: 50%;
          transform: translateY(-30%);
          margin-top: 0;
          margin-bottom: 0;
        }

        .services-h1 h1 {
          font-size: 38px;
        }
      }

      @media (max-width: 480px) {
        .services-h1 {
          top: 50%;
          transform: translateY(-35%);
        }

        .services-h1 h1 {
          font-size: 28px;
        }
      }

      @media (max-width: 360px) {
        .services-h1 {
          top: 60%;
          transform: translateY(-30%);
        }

        .services-h1 h1 {
          font-size: 24px;
        }
      }
    `}
          </style>
        </div>
        {/* Main content row */}

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


      </section>

      <section className="about-section" style={{ background: "#fff", minHeight: 400, width: "100vw", padding: "40px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 40 }}>
          {/* Left: Image */}
          <div className="img-about" style={{ flex: 1 }}>
            <img
              src={meetingImg}
              alt="meeting"
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>

          {/* Right: Content */}
          <div className="Content-about" style={{ flex: 1 }}>
            <h2 className="Content-about-h2" style={{ fontFamily: "SVN-Gilroy", fontWeight: 700, fontSize: 28, color: "#111", marginBottom: 20 }}>
              {language === "VI" ? (<>Thủ tục hành chính, chỉ trong một lần</>) : ("한 번에 끝나는 행정 업무")}
            </h2>
            <p className="Content-about-p" style={{ fontSize: 16, lineHeight: 1.7, color: "#222", textAlign: "justify", marginBottom: 40 }}>

              {language === "VI" ? (<>Năm 2025, One Pass đặt dấu chân đầu tiên tại Busan, Hàn Quốc. One Pass là công ty tư vấn và đại diện thực hiện các thủ tục hành chính, ra đời với mục đích hỗ trợ và cung cấp giải pháp chính xác nhất cho mọi thủ tục hành chính liên quan đến Việt Nam. Chúng tôi cung cấp dịch vụ tư vấn và hỗ trợ chính xác cho mọi nghiệp vụ hành chính, bao gồm hộ chiếu, visa, hồ sơ kết hôn, hợp pháp hóa lãnh sự và công chứng, dành cho cả người Việt Nam và người Hàn Quốc. One Pass mở ra con đường hiệu quả nhất giúp quý khách tiết kiệm tối đa thời gian và công sức.</>)
                : (<>2025년, 대한민국 부산에서 원패스(One Pass)가 힘찬 첫걸음을 시작했습니다.
                  원패스는 베트남 관련 행정 절차에 대한 가장 정확한 지원과 해결책을
                  제공하기 위해 탄생한 행정 대행 및 솔루션 기업입니다. 여권, 비자, 결혼 서류,
                  영사 확인 및 공증 등 모든 행정 업무에 대해 정확한 컨설팅 및 지원 서비스를
                  베트남인과 한국인 모두에게 제공하며, 고객의 시간과 노력을 절약하는 가장
                  효율적인 길을 열어 드립니다.</>)}
            </p>

            {/* Contact Box */}
            <div className="Content-about-box" style={{
              display: "flex",
              alignItems: "center",
              background: "#dcc38f",   // màu nền vàng nhạt
              borderRadius: 10,
              padding: "16px 20px",
              maxWidth: 420
            }}>
              {/* Icon box */}
              <div className="Content-about-icon" style={{
                width: 60,
                height: 60,
                background: "#fff",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16
              }}>
                <span style={{ fontSize: 30 }}>👨‍💼</span>
                {/* thay bằng icon svg nếu có */}
              </div>

              {/* Text */}
              <div className="Content-about-text">
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4, color: "#ffffffff" }}>{language === "VI" ? (<>Liên hệ tư vấn</>) : ("상담 신청")}</div>
                <div style={{ fontSize: 15, color: "#ffffffff" }}>
                  {language === "VI" ? (<>Điện thoại</>) : ("전화번호:")} <span style={{ color: "#2B3A67", fontWeight: 700 }}>   (+82) 51-715-0607</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
  /* --- Responsive cho phần giới thiệu --- */
  @media (max-width: 1024px) {
    .about-section {
      padding: 40px 24px !important;
    }
  }

  @media (max-width: 800px) {
    .about-section > div {
      flex-direction: column !important;
      gap: 32px !important;
    }

    .img-about {
      width: 100% !important;
      order: 1 !important;
    }

    .img-about img {
      width: 100% !important;
      border-radius: 10px !important;
    }

    .Content-about {
      order: 2 !important;
      width: 100% !important;
     
    }

    .Content-about-h2 {
      font-size: 24px !important;
      text-align: center !important;
      margin-bottom: 16px !important;
    }

    .Content-about-p {
      font-size: 15px !important;
      line-height: 1.6 !important;
      margin-bottom: 32px !important;
      text-align: justify !important;
    }

    .Content-about-box {
      margin: 0 auto !important;
      max-width: 100% !important;
      padding: 14px 18px !important;
      justify-content: flex-start !important;
    }

    .Content-about-icon {
      width: 50px !important;
      height: 50px !important;
      margin-right: 12px !important;
    }

    .Content-about-text div:first-child {
      font-size: 16px !important;
    }

    .Content-about-text div:last-child {
      font-size: 14px !important;
    }
  }

  @media (max-width: 480px) {
    .about-section {
      padding: 32px 16px !important;
    }

    .Content-about-h2 {
      font-size: 20px !important;
    }

    .Content-about-p {
      font-size: 14px !important;
    }

              .Content-about-box {
                flex-direction: row !important;
                align-items: center !important;
                padding: 12px 14px !important;
              }

            .Content-about-icon {
                width: 44px !important;
                height: 44px !important;
              }
            }
          `}
        </style>
      </section>

      <section
        style={{
          width: "100%",
          backgroundColor: "#23366f",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "32px",
            }}
          >
            {language === "VI" ? (<>KHỞI NGUỒN CỦA ONE PASS</>) : ("원패스의 ")}
          </h2>

          {/* Content */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              opacity: 0.95,
              whiteSpace: "pre-line",
              textAlign: "justify",
            }}
          >
            {language === "VI" ? (<>"Hành trình của One Pass bắt đầu từ một nhận thức sâu sắc duy nhất. Người sáng lập của chúng tôi đã trực tiếp trải qua vô số khó khăn do các thủ tục hành chính phức tạp và khó lường của Việt Nam khi sinh sống ở nước ngoài. Rào cản ngôn ngữ, sự thay đổi thường xuyên của quy định, cùng với quy trình giấy tờ kéo dài vô tận đã mang lại sự thất vọng cho rất nhiều người. Chúng tôi nhận ra rằng, đây không chỉ là vấn đề của một cá nhân, mà là khó khăn chung mà rất nhiều kiều bào Việt Nam và người nước ngoài có quan hệ với Việt Nam trên toàn thế giới đang phải đối mặt.</>) : (" “원패스의 여정은 한 가지 깊은 깨달음에서 시작되었습니다. 설립자는 해외에서 생활하며 복잡하고 예측 불가능한 베트남 행정 절차들로 인해 수많은 어려움을 직접 경험했습니다. 언어의 장벽, 규정의 잦은 변경, 그리고 끝없이 이어지는 서류 작업은 많은 사람들에게 좌절감을 안겨주었습니다. 이는 단지 한 개인의 문제가 아니라, 전 세계에 흩어져 있는 수많은 베트남 교민과 베트남과 관계를 맺고 있는 외국인들이 공통으로 겪는 어려움이라는 것을 깨달았습니다.")}
            {"\n\n"}
            {language === "VI" ? (<>Để giải quyết những vấn đề này, One Pass đã ra đời với ý nghĩa là 'Lối đi giải quyết mọi quy trình phức tạp chỉ trong một lần duy nhất'. Mục tiêu của chúng tôi không chỉ là đại diện làm giấy tờ đơn thuần, mà còn là bảo vệ nguồn năng lượng và thời gian quý báu của khách hàng. One Pass sẽ là đối tác vững chắc, giúp khách hàng có thể hoàn toàn tập trung vào những khoảnh khắc quan trọng trong cuộc sống bằng cách đơn giản hóa và tăng tính minh bạch cho các thủ tục hành chính."</>) : ("이러한 문제들을 해결하기 위해, 원패스는 '복잡한 과정을 한 번에 해결하는 통로'라는 의미를 담아 탄생했습니다. 저희의 목표는 단순한 서류 대행을 넘어, 고객의 소중한 시간과 에너지를 지켜드리는 것입니다. 원패스는 행정 절차를 간소화하고 투명성을 높여, 고객들이 삶의 중요한 순간에 온전히 집중할 수 있도록 돕는 든든한 파트너가 될 것입니다.”")}
          </p>
        </div>
      </section>


      <section>
        {/* Phần giữa: nền trắng */}
        <div className="about-min" style={{ background: "#fff", padding: "60px 20px" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Bên trái */}
            <div className="about-min-right">
              <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px" }}>
                {language === "VI" ? (<>Mọi thủ tục hành chính,<br /> chúng tôi giải quyết<br />  bằng sự chuyên nghiệp.</>) : (<> 고객과 함께 걸어온 발자취, <br />
                  끝까지 함께 하겠습니다.</>)}
              </h3>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  marginTop: "100px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "45px", fontWeight: "700", color: "#23366f" }}>380</p>
                  <p style={{ fontSize: "16px", color: "#333" }}>{language === "VI" ? (<>Khách hàng</>) : ("만족 고객 수")}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "45px", fontWeight: "700", color: "#23366f" }}>240</p>
                  <p style={{ fontSize: "16px", color: "#333" }}>{language === "VI" ? (<>Hồ sơ</>) : ("접수 사례건 수")}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "45px", fontWeight: "700", color: "#23366f" }}>2300</p>
                  <p style={{ fontSize: "16px", color: "#333" }}>{language === "VI" ? (<>Lần tư vấn</>) : ("누적 상담건 수")}</p>
                </div>
              </div>
            </div>

            {/* Bên phải */}
            <div className="about-min-right">
              <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}>
                {language === "VI" ? (<>CAM KẾT CỦA ONE PASS VỚI KHÁCH HÀNG</>) : ("고객께 드리는 원패스의 약속")}
              </h4>
              <ul className="about-min-right-ul" style={{ lineHeight: 1.8, fontSize: "16px", color: "#333", textAlign: "justify" }}>
                <li>
                  <strong>{language === "VI" ? (<>Sự thoải mái:</>) : ("마음의 평화:")}</strong>
                  {language === "VI" ? (<> Hãy giao phó các thủ tục giấy tờ phức tạp và khó khăn cho chuyên gia của chúng tôi; quý khách sẽ không cần phải lo lắng hay bất an nữa. Chúng tôi chịu trách nhiệm xử lý toàn bộ quy trình.</>) : ("복잡하고 어려운 서류 절차를 전문가에게 맡겨, 고객님은 더 이상 고민하거나불안해하지 않으셔도 됩니다.")}
                </li>
                <li><strong>{language === "VI" ? (<>Tiết kiệm Thời gian & Chi phí:</>) : ("근무시간")}</strong> {language === "VI" ? (<>Chúng tôi giảm thiểu các thủ tục không cần thiết và những thử nghiệm sai sót, giúp quý khách tiết kiệm tối đa thời gian và công sức. Hiệu quả trong công việc giúp giảm thiểu gánh nặng chi phí cho quý khách.</>) : ("불필요한 절차와 시행착오를 줄여 시간을 최소화하고 효율적인 업무처리로 비용 부담까지 덜어 드립니다.")}
                </li>
                <li>
                  <strong>{language === "VI" ? (<>Minh bạch Hoàn hảo:</>) : ("완벽한 투명성:")}</strong> {language === "VI" ? (<> Chúng tôi báo cáo rõ ràng, minh bạch về tiến độ của mọi thủ tục, giúp quý khách luôn an tâm khi ủy thác công việc.</>) : ("모든 절차의 진행 상황을 고객에게 명확하게 보고하여 언제든 안심하고 맡기실 수 있도록 합니다.")}
                </li>
                <li>
                  <strong>{language === "VI" ? (<>Giải pháp Cá nhân hóa:</>) : ("맞춤형 솔루션:")}</strong> {language === "VI" ? (<> Chúng tôi thấu hiểu sâu sắc tình huống riêng biệt của từng khách hàng để đưa ra giải pháp tối ưu và phù hợp nhất với nhu cầu của quý vị.</>) : ("고객 한 분 한 분의 고유한 상황을 이해하고 최적의 해결책을 제시합니다.")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer: OUR MISSION */}
        <div
          style={{
            background: "#d9c084",
            textAlign: "center",
            padding: "20px 0",
            fontWeight: "700",
            fontSize: "32px",
            color: "#fff",
            letterSpacing: "1px",
          }}
        >
           {language === "VI" ? (<>SỨ MỆNH</>) : ("OUR MISSION")}
        </div>

        <style>
          {`
  /* --- Responsive cho about-min section --- */

  /* Tablet */
  @media (max-width: 1024px) {
    .about-min {
      padding: 50px 24px !important;
    }

    .about-min-right h3 {
      font-size: 28px !important;
    }

    .about-min-right-ul {
      font-size: 17px !important;
    }
  }

  /* Mobile layout */
  @media (max-width: 800px) {
    .about-min {
      padding: 40px 16px !important;
    }

    .about-min > div {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    .about-min-right h3 {
      font-size: 24px !important;
      text-align: center !important;
    }

    .about-min-right h4 {
      font-size: 17px !important;
      text-align: center !important;
    }

    .about-min-right-ul {
      font-size: 15px !important;
      line-height: 1.7 !important;
      text-align: justify !important;
    }

    /* Stats - cho 3 cột thành 1 hàng hoặc 2 hàng đẹp */
    .about-min-right div[style*="display: flex"] {
      flex-wrap: wrap !important;
      justify-content: center !important;
      gap: 24px !important;
      margin-top: 50px !important;
    }

    .about-min-right div[style*="text-align: center"] {
      flex: 1 1 100px !important;
    }

    .about-min-right p {
      font-size: 14px !important;
    }

    .about-min-right p:first-child {
      font-size: 38px !important;
    }
  }

  /* iPhone 14 Pro Max (430px) */
  @media (max-width: 480px) {
    .about-min {
      padding: 32px 12px !important;
    }

    .about-min-right h3 {
      font-size: 20px !important;
      line-height: 1.4 !important;
    }

    .about-min-right-ul {
      font-size: 14px !important;
    }

    .about-min-right div[style*="display: flex"] {
      gap: 20px !important;
      margin-top: 40px !important;
    }

    .about-min-right div[style*="text-align: center"] p:first-child {
      font-size: 34px !important;
    }

    .about-min-right div[style*="text-align: center"] p:last-child {
      font-size: 13px !important;
    }

    /* OUR MISSION footer */
    .about-min + div {
      font-size: 22px !important;
      padding: 16px 0 !important;
    }
  }
`}
        </style>

      </section>



      <section className="about-grid" style={{ background: "#fff", width: "100vw", padding: "60px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          {/* Grid 2x2 */}
          <div className="about-grid-main" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {CARDS.map((card, idx) => (
              <div
                className="about-grid-card"
                key={idx}
                style={{
                  display: "flex",
                  background: "#eeeeeeff ",
                  borderRadius: 10,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  alignItems: "stretch",
                }}
              >
                {/* Text left */}
                <div className="about-grid-left" style={{ flex: 1, padding: "20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 10,marginTop:10 }}>
                    {language === "VI" ? (
                      card.title === "전문성" ? "Sự chuyên nghiệp"
                        : card.title === "신뢰" ? "Tin cậy"
                          : card.title === "효율성" ? <>Hiệu quả</>
                            : card.title === "고객 중심" ? <>Khách hàng là trọng tâm</>
                              : card.title
                    ) : (
                      card.title
                    )}
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "#333" }}>
                    
                    {language === "VI" ? (
                      card.desc === "원패스는 정확하고 최신 정보로 완벽한 서류 절차를 보장합니다. 급변하는 법률과 규정들을 항상 주시하며 고객의 문제를 정확히 파악하고, 최적의 해결책을 제시합니다." ? "Chúng tôi luôn theo dõi sát sao các quy định và pháp luật để nắm bắt chính xác vấn đề của khách hàng từ đó đưa ra giải pháp tối ưu nhất."
                        : card.desc === "모든 과정은 고객에게 투명하게 공개되며, 정직한 서비스로 믿음을 쌓아갑니다. 저희는 단기적인 이익보다 고객과의 장기적인 신뢰 관계를 더 중요하게 생각합니다." ? "Toàn bộ quy trình đều được công khai minh bạch, xây dựng lòng tin bằng dịch vụ trung thực. Chúng tôi coi trọng mối quan hệ tin cậy lâu dài với khách hàng hơn lợi ích ngắn hạn."
                          : card.desc === "불필요한 절차와 시행착오를 줄여 시간과 노력을 최소화합니다. 효율적인 업무 처리로 고객의 부담을 덜고, 신속한 서비스로 만족도를 높입니다." ? <>Chúng tôi tiết kiệm tối đa thời gian của quý khách bằng quy trình xử lý công việc hiệu quả, đồng thời nâng cao sự hài lòng bằng dịch vụ chính xác.</>
                            : card.desc === "고객 한 분 한 분의 고유한 상황을 깊이 이해하고, 그에 맞는 가장 최적의 해결책을 제시합니다. 단순한 서류 처리자가 아닌, 고객의 진정한 동반자가 될 것을 약속드립니다." ? <>Thấu hiểu từng trường hợp của khách hàng và đưa ra giải pháp tối ưu nhất. Chúng tôi cam kết không chỉ đơn thuần xử lý hồ sơ, mà luôn đồng hành cùng quý khách khi cần</>
                              : card.desc
                    ) : (
                      card.desc
                    )}
                  </p>
                </div>

                {/* Image right */}
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "40%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>

          {/* Paragraphs below */}
          <div className="about-grid-right" style={{ marginTop: 50 }}>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: "#111" }}>
              {language === "VI" ? (<>Vượt qua sự phức tạp, Mở lối đi dễ dàng</>) : ("복잡함을 넘어, 쉬운 길을 열다")}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#333", marginBottom: 30 }}>
              {language === "VI" ? (<>One Pass tồn tại vì tất cả những ai đang gặp khó khăn do các thủ tục hành chính phức tạp và rườm rà. Sứ mệnh của chúng tôi là bảo vệ thời gian và công sức quý báu của khách hàng bằng cách xử lý mọi nghiệp vụ giấy tờ, từ hồ sơ kết hôn, hộ chiếu, visa, đến hợp pháp hóa lãnh sự, một cách nhanh nhất và chính xác nhất.
                <br />Chúng tôi không chỉ là người đại diện hồ sơ; chúng tôi là đối tác vững chắc giúp khách hàng đơn giản hóa thủ tục hành chính và tăng tính minh bạch, để quý vị có thể hoàn toàn tập trung vào những khoảnh khắc quan trọng trong cuộc sống.</>) : ("원패스(OnePass)는 복잡하고 까다로운 행정 절차로 인해 어려움을 겪는 모든 분들을 위해 존재합니다. 결혼 관련 서류부터 여권, 비자, 영사 확인에 이르기까지, 모든 서류 업무를 가장 빠르고 정확하게 처리하여 고객의 소중한 시간과 노력을 지켜드리는 것이 우리의 사명입니다. 저희는 단순한 서류 대행을 넘어, 행정 절차를 간소화하고 투명성을 높여, 고객들이 삶의 중요한 순간에 온전히 집중할 수 있도록 돕는 든든한 파트너가 될 것입니다.")}
            </p>

            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: "#111" }}>
              {language === "VI" ? (<>Chuyên gia hành chính đáng tin cậy nhất</>) : ("가장 신뢰받는 행정 전문가 파트너")}
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#333" }}>
              {language === "VI" ? (<>One Pass mong muốn trở thành đối tác đáng tin cậy, mang lại những thay đổi tích cực trong cuộc sống của khách hàng. Chúng tôi sẽ thiết lập nên một tiêu chuẩn mới trong lĩnh vực dịch vụ hành chính thông qua dịch vụ minh bạch, chuyên nghiệp và các giải pháp được cá nhân hóa theo từng hoàn cảnh cụ thể.
                Mục tiêu của chúng tôi là tạo ra một thế giới mà tất cả mọi người không còn phải thất vọng vì vấn đề giấy tờ và có thể đạt được những điều mình mong muốn. Để đạt được điều đó, chúng tôi cam kết không ngừng đổi mới và cải thiện chất lượng dịch vụ.</>) : ("원패스는 고객의 삶에 긍정적인 변화를 가져오는 신뢰의 파트너가 되고자 합니다. 투명하고 전문적인 서비스, 그리고 고객 한 분 한 분의 상황에 맞는 맞춤형 솔루션을 통해 행정 서비스 분야의 새로운 기준을 만들어 갈 것입니다. 우리는 모든 사람이 서류 문제로 인해 좌절하지 않고, 원하는 바를 이룰 수 있는 세상을 만드는 것을 목표로 삼고 있습니다. 이를 위해 지속적인 혁신과 서비스 개선을 약속드립니다.")}
            </p>
          </div>
        </div>
        <style>
          {`
              /* --- Responsive cho phần about-grid --- */
              @media (max-width: 1024px) {
                .about-grid {
                    padding: 50px 16px !important;
                  }

    .about-grid-main {
      gap: 24px !important;
    }

    .about-grid-card h3 {
      font-size: 22px !important;
    }

    .about-grid-card p {
      font-size: 16px !important;
    }
  }

  @media (max-width: 800px) {
    .about-grid-main {
      grid-template-columns: 1fr !important;
      gap: 28px !important;
    }

    .about-grid-card {
      flex-direction: column !important;
      align-items: flex-start !important;
      overflow: hidden !important;
    }

    .about-grid-left {
      order: 2 !important;
      padding: 20px 16px !important;
    }

    .about-grid-card img {
      order: 1 !important;
      width: 100% !important;
      height: auto !important;
      max-height: 220px !important;
      object-fit: cover !important;
    }

    .about-grid-card h3 {
      font-size: 20px !important;
      margin-bottom: 8px !important;
    }

    .about-grid-card p {
      font-size: 15px !important;
      line-height: 1.6 !important;
    }

    .about-grid-right {
      margin-top: 40px !important;
    }

    .about-grid-right h3 {
      font-size: 17px !important;
      text-align: center !important;
    }

    .about-grid-right p {
      font-size: 14px !important;
      text-align: justify !important;
      line-height: 1.7 !important;
    }
  }

  @media (max-width: 480px) {
    .about-grid {
      padding: 40px 12px !important;
    }

    .about-grid-main {
      gap: 22px !important;
    }

    .about-grid-card {
      border-radius: 8px !important;
    }

    .about-grid-card img {
      max-height: 180px !important;
    }

    .about-grid-card h3 {
      font-size: 18px !important;
    }

    .about-grid-card p {
      font-size: 14px !important;
    }

    .about-grid-right h3 {
      font-size: 16px !important;
    }

    .about-grid-right p {
      font-size: 14px !important;
    }
  }
`}
        </style>
      </section>

    </>
  );
}

export default Introduction;
