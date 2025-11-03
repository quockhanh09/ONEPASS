import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import axios from "axios";
import heroBg from "../assets/img/herobanner-1.png";
import iconMess from "../assets/img/iconmess.png";
import iconZalo from "../assets/img/iconzalo.png";
import iconKakao from "../assets/img/iconTalk.png";
import iconNaver from "../assets/img/iconna.png";
import qrZalo from "../assets/img/qrZalo.png";
import { em, i } from "framer-motion/client";

export default function Consult() {

  const { language } = useLanguage();
  const handleSubmitConsult1 = async () => {
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




  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const list = [
    "인증 센터",
    "결혼 이민",
    "출생신고 대행",
    "출입국 행정 대행",
    "신분증명 서류 대행",
    "입양 절차 대행",
    "비자 대행",
    "법률 컨설팅",
    "B2B 서비스",
    "기타",
  ];
  const [serviceContents, setServiceContents] = useState([
    {
      title: "인증 센터",

    },

  ]);

  const [activeIndex, setActiveIndex] = useState(""); // 👉 mặc định chọn "인증 센터"
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });

  const [countryCode, setCountryCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("");
  const [showTimePopup, setShowTimePopup] = useState(false);

  const [submittedPhone, setSubmittedPhone] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [submittedVisit, setSubmittedVisit] = useState(false);

  const handleTabClick = (tabId) => {
    setSelected("");
    setName("");
    setEmail("");
    setPhone("");
    setAgree(false);
    setTitle("");
    setContent("");
    setDate("");
    setTime("");

    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setDateError(false);
    setTitleError(false);
    setContentError(false);


    setSubmittedPhone(false);
    setSubmittedEmail(false);
    setSubmittedVisit(false);

    if (tabId === "phone") {
      setSubmittedPhone(true);
    } else if (tabId === "email") {
      setSubmittedEmail(true);
    } else if (tabId === "visit") {
      setSubmittedVisit(true);
    }

    if (name.trim() === "") setNameError(true);
    if (email.trim() === "") setEmailError(true);
    if (phone.trim() === "") setPhoneError(true);
    if (date.trim() === "") setDateError(true);

    setActiveTab(tabId);
  };


  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };
  const handleSubmit = async (e) => {  // Gọi Điện
    e.preventDefault();

    setSubmittedPhone(true);

    const lang = localStorage.getItem("lang") || "ko";
    const messages = {
      ko: {
        empty: "모든 항목을 입력하고 동의해 주세요.",
        success: "상담 신청 완료되었습니다!",
        fail: "서버 연결 실패 (Server connection failed)",
      },
      vi: {
        empty: "Vui lòng điền đầy đủ thông tin và đồng ý.",
        success: "Đăng ký tư vấn thành công!",
        fail: "Kết nối server thất bại",
      },
      en: {
        empty: "Please fill in all fields and agree.",
        success: "Consultation request submitted!",
        fail: "Server connection failed",
      },
    };


    let hasError = false;

    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    }
    if (!phone.trim()) {
      setPhoneError(true);
      hasError = true;
    }
    if (!email.trim()) {
      setEmailError(true);
      hasError = true;
    }
    if (!agree) {
      hasError = true;
    }

    if (hasError) {
      showTemporaryPopup(messages[lang].empty, true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://op-backend-60ti.onrender.com/api/tuvangoidien", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TenDichVu: service,
          TenHinhThuc: "Gọi điện",
          HoTen: name,
          Email: email,
          MaVung: countryCode,
          SoDienThoai: phone,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Server Error:", data);
        showTemporaryPopup(`❌ ${data.error || messages[lang].fail}`, true);
        return;
      }

      showTemporaryPopup(messages[lang].success);

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setAgree(false);
      setNameError(false);
      setPhoneError(false);
      setEmailError(false);

    } catch (err) {
      console.error("Lỗi khi kết nối server:", err);
      showTemporaryPopup(messages[lang].fail, true);
    } finally {
      setLoading(false);
    }
  };


  const handleSubmit1 = async (e) => { // Email
    const lang = localStorage.getItem("lang") || "ko";
    e.preventDefault();
    setSubmittedEmail(true);
    const messages = {
      ko: {
        empty: "모든 항목을 입력하고 동의해 주세요.",
        success: "상담 신청 완료되었습니다!",
        fail: "서버 연결 실패 (Server connection failed)",
      },
      vi: {
        empty: "Vui lòng điền đầy đủ thông tin và đồng ý.",
        success: "Đăng ký tư vấn thành công!",
        fail: "Kết nối server thất bại",
      },
      en: {
        empty: "Please fill in all fields and agree.",
        success: "Consultation request submitted!",
        fail: "Server connection failed",
      },
    };
    if (!name || !phone || !email || !agree || !content || !title) {
      if (!name) setNameError(true);
      if (!phone) setPhoneError(true);
      if (!email) setEmailError(true);
      if (!title) setTitleError(true);
      if (!content) setContentError(true);
      showTemporaryPopup(messages[lang].empty, true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://op-backend-60ti.onrender.com/api/tuvanemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TenDichVu: service,
          TenHinhThuc: "Email",
          HoTen: name,
          Email: email,
          MaVung: countryCode,
          SoDienThoai: phone,
          TieuDe: title,
          NoiDung: content,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Server Error:", data);
        showTemporaryPopup(`${data.error || messages[lang].fail}`, true);
        return;
      }

      showTemporaryPopup(messages[lang].success);
      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setAgree(false);
      setTitle("");
      setContent("");

      console.log("✅ Server response:", data);
    } catch (err) {
      console.error(err);
      showTemporaryPopup(messages[lang].fail, true);
    } finally {
      setLoading(false);
    }
  };
  const handleTimeChange = (e) => {
    const value = e.target.value;


    if (value < "09:00" || value > "18:00") {
      setShowTimePopup(true);
      setTimeout(() => setShowTimePopup(false), 5000);
      return;
    }


    if (value >= "12:00" && value < "13:00") {
      setShowTimePopup(true);
      setTimeout(() => setShowTimePopup(false), 5000);
      return;
    }


    setTime(value);
  };
  const handleSubmit2 = async (e) => {
    const lang = localStorage.getItem("lang") || "ko";
    e.preventDefault();
    // mark that user attempted to submit the visit form so errors will render
    setSubmittedVisit(true);
    const messages = {
      ko: {
        empty: "모든 항목을 입력하고 동의해 주세요.",
        success: "상담 신청 완료되었습니다!",
        fail: "서버 연결 실패 (Server connection failed)",
      },
      vi: {
        empty: "Vui lòng điền đầy đủ thông tin và đồng ý.",
        success: "Đăng ký tư vấn thành công!",
        fail: "Kết nối server thất bại",
      },
      en: {
        empty: "Please fill in all fields and agree.",
        success: "Consultation request submitted!",
        fail: "Server connection failed",
      },
    };
    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-GB")
      : "";
    if (!name || !phone || !email || !date || !time || !agree) {
      if (!name) setNameError(true);
      if (!phone) setPhoneError(true);
      if (!email) setEmailError(true);
      if (!date) setDateError(true);
      showTemporaryPopup(messages[lang].empty, true);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://op-backend-60ti.onrender.com/api/tuvantructiep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TenDichVu: service,
          TenHinhThuc: "Trực tiếp",
          HoTen: name,
          Email: email,
          MaVung: countryCode,
          SoDienThoai: phone,
          ChonNgay: formattedDate,
          Gio: time
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Server Error:", data);
        showTemporaryPopup(`${data.error || messages[lang].fail}`, true);
        return;
      }

      showTemporaryPopup(messages[lang].success);
      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setAgree(false);
      setTitle("");
      setContent("");

      console.log("✅ Server response:", data);
    } catch (err) {
      console.error(err);
      showTemporaryPopup(messages[lang].fail, true);
    } finally {
      setLoading(false);
    }
  };
  const [activeTab, setActiveTab] = useState("sns");
  // read route state to allow opening a specific tab when navigated from elsewhere
  const location = useLocation();

  useEffect(() => {
    if (location && location.state && location.state.tab) {
      const tab = location.state.tab;
      // validate allowed tabs
      const allowed = ["sns", "phone", "email", "visit"];
      if (allowed.includes(tab)) setActiveTab(tab);
    }
  }, [location]);
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    visitDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const tabButton = (id, label) => (
    <button
      key={id}
      onClick={() => setActiveTab(id)}
      style={{
        border: "none",
        background: "none",
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 500,
        color: activeTab === id ? "#1d4ed8" : "#9ca3af",
        borderBottom: activeTab === id ? "2px solid #1d4ed8" : "2px solid transparent",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {label}
    </button>
  );

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #d1d5db",
    borderRadius: 6,
    marginBottom: 10,
    fontSize: 14,
  };

  const buttonStyle = {
    background: "#1d4ed8",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 30,
    cursor: "pointer",
    fontSize: 14,
  };

  const snsForm = (
    <div
      style={{
        maxWidth: 1200,
        margin: "60px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 40,
      }}
    >
      {/* Left */}
      <div style={{ flex: 1, minWidth: 340, maxWidth: 460 }}>
        <h3
          style={{
            color: "#1d4ed8",
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 14,
          }}
        >
          {language === "VI" ? (<>Nhắn tin</>) : ("SNS 채팅 상담")}
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >

          {language === "VI" ? (<>Tìm kiếm giải pháp chính xác một cách tiện lợi, mọi lúc mọi nơi</>) : ("언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.")}
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >
          {language === "VI" ? (<>Tư vấn nhanh chóng mọi lúc mọi nơi, miễn phí với chuyên gia thông qua phương thức nhắn tin trực tiếp qua các kênh mạng xã hội.</>) : ("실시간 채팅으로 상담사와 빠르게 연결하여 언제든 어디서든 간편하게 받을 수 있습니다.")}
        </p>
      </div>

      {/* Right */}
      <div
        className="snsRight"
        style={{
          flex: 1,
          maxWidth: 650,
          background: "#f9fafb",
          borderRadius: 8,
          padding: "75px 80px",
          border: "1px solid #e5e7eb",

        }}
      >
        <h3 className="snsRight-h3" style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}>
          {language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}
        </h3>
        <div style={{ height: 1, background: "#d1d5db", marginBottom: 24 }}></div>

        {[
          { text: "메신저를 이용하여 실시간 채팅 상담", img: iconMess, link: "https://www.messenger.com/t/803644846172440/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0" },
          { text: "카카오톡을 이용하여 실시간 채팅 상담", img: iconKakao, link: "https://pf.kakao.com/_BHALn/chat" },
          { text: "Zalo를 이용하여 실시간 채팅 상담", img: iconZalo, link: "" },
          { text: "네이버톡을 이용하여 실시간 채팅 상담", img: iconNaver, link: "https://talk.naver.com/ct/w3ou8nh#nafullscreen" },
        ].map((item, i) => (
          <React.Fragment key={i}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="snsRight-button"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 9999,
                  padding: "20px 60px",
                  marginBottom: 12,
                  cursor: "pointer",
                  fontSize: 18,
                  color: "#374151",
                  fontWeight: 500,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#f3f4f6")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
              >
                <span className="snsRight-button-text">
                  {language === "VI" ? (
                    item.text === "메신저를 이용하여 실시간 채팅 상담" ? "Liên hệ tư vấn qua Messenger"
                      : item.text === "카카오톡을 이용하여 실시간 채팅 상담" ? "Liên hệ tư vấn qua KakaoTalk"
                        : item.text === "Zalo를 이용하여 실시간 채팅 상담" ? <>Liên hệ tư vấn qua Zalo</>
                          : item.text === "네이버톡을 이용하여 실시간 채팅 상담" ? <>Liên hệ tư vấn qua Naver Talk</>
                            : item.text
                  ) : (
                    item.text
                  )}
                </span>
                <img className="snsRight-button-img"
                  src={item.img}
                  alt=""
                  style={{ width: 30, height: 30, objectFit: "contain" }}
                />
              </button>
            </a>

            {/* Thêm hình QR ngay sau Zalo */}

          </React.Fragment>
        ))}

        {/* Divider */}
        <div className="snsRight-divider"
          style={{
            display: "flex",
            alignItems: "center",
            margin: "28px 0",
          }}
        >
          <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
          <span style={{ margin: "0 10px", color: "#000000ff", fontSize: 18 }}>or</span>
          <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
        </div>

        {/* Contact */}
        <div className="snsRight-Contact" style={{ fontSize: 18, color: "#111827", lineHeight: 1.8, textAlign: "center" }}>
          <p className="snsRight-Contact-1">
            <strong>{language === "VI" ? (<>Liên hệ:</>) : ("전화 걸기:")}</strong> (+82) 51-715-0607
          </p>
          <p className="snsRight-Contact-2">
            <strong>{language === "VI" ? (<>Email: </>) : ("이메일 보내기:")}</strong> onepass.kr@gmail.com
          </p>
          <p className="snsRight-Contact-3" style={{ color: "#6b7280", fontSize: 16 }}>

            {language === "VI" ? (<>*Giờ làm việc: 09:00 ~ 18:00 (Nghỉ trưa: 12:00~13:00, Thứ Bảy,<br /> Chủ Nhật và các ngày Lễ/Tết Hàn Quốc)</>) : ("*이용 시간: 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)")}
          </p>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 600px) {
  .snsRight {
    padding: 40px 25px !important;
  }

  .snsRight-h3 {
    font-size: 26px !important;
    text-align: center !important;
  }

  .snsRight-button {
    padding: 14px 30px !important;
    font-size: 15px !important;
    border-radius: 9999px !important;
  }

  .snsRight-button-text {
    white-space: normal !important;
    text-align: left !important;
  }

  .snsRight-button-img {
    width: 24px !important;
    height: 24px !important;
  }

  .snsRight-divider {
    margin: 24px 0 !important;
  }

  .snsRight-divider span {
    font-size: 16px !important;
  }

  .snsRight-Contact {
    font-size: 15px !important;
    line-height: 1.7 !important;
    text-align: center !important;
  }

  .snsRight-Contact-3 {
    font-size: 14px !important;
  }
}

/* ⚡ Dưới 400px */
@media (max-width: 400px) {
  .snsRight {
    padding: 25px 18px !important;
  }

  .snsRight-h3 {
    font-size: 22px !important;
    text-align: center !important;
  }

  .snsRight-button {
    padding: 12px 18px !important;
    font-size: 14px !important;
    border-radius: 9999px !important;
  }

  .snsRight-button-img {
    width: 22px !important;
    height: 22px !important;
  }

  .snsRight-divider {
    margin: 20px 0 !important;
  }

  .snsRight-divider span {
    font-size: 14px !important;
  }

  .snsRight-Contact {
    font-size: 14px !important;
    line-height: 1.6 !important;
  }

  .snsRight-Contact-3 {
    font-size: 13px !important;
  }
}
        `}
      </style>
    </div>
  );


  const phoneForm = (
    <div
      style={{
        maxWidth: 1200,
        margin: "60px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 40,
      }}
    >
      {/* Left */}
      <div style={{ flex: 1, minWidth: 340, maxWidth: 460 }}>
        <h3
          style={{
            color: "#1d4ed8",
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 14,
          }}
        >
          {language === "VI" ? (<>Gọi điện</>) : ("전화 상담")}
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >

          {language === "VI" ? (<>Tìm kiếm giải pháp chính xác một cách tiện lợi, mọi lúc mọi nơi</>) : ("언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.")}
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >

          {language === "VI" ? (<>Giải quyết các vấn đề cấp bách bằng cách liên hệ với tổng đài của chúng tôi. Bạn sẽ được nối máy và tư vấn với đội ngũ chuyên gia ngay tức thì.</>) :
            ("전화를 통해서 급한 문제를 빠르게 해결할 수 있습니다. 전문 상담사와 바로 연결하여 상담 받을 수 있습니다.")}
        </p>
      </div>

      {/* Right */}

      <div className="phoneRight"
        style={{
          maxWidth: 640,
          width: "100%",
          background: "#f4f4f4",
          borderRadius: 8,
          padding: "60px 80px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="phoneRight-h2" style={{ fontSize: 32, fontWeight: 700, marginBottom: 10, }}>
          {language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}
        </h2>
        <div style={{ height: 1, background: "#000000ff", marginBottom: 30 }}></div>
        <form className="phoneRight-form" onSubmit={handleSubmit}>
          {/* 서비스 선택 */}
          <div className="phoneRight-form-main" style={{ marginBottom: 20, position: "relative" }}>
            <div className="phoneRight-form-1"
              onClick={() => setOpen(!open)}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              <label className="phoneRight-form-1-text" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Dịch vụ</>) : ("서비스 선택")} <span style={{ color: "red" }}>*</span>
              </label>
              <div className="phoneRight-form1" style={{ flex: 1, padding: "12px 0", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: selected ? "#000" : "#999" }}>
                  {selected || (language === "VI" ? "Chọn dịch vụ" : "서비스 선택")}
                </span>
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    transition: ".2s",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>

            {open && (
              <div className="phoneRight-form1-1"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 120,
                  right: 0,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  zIndex: 10,
                }}
              >
                {list.map((v) => (
                  <div className="phoneRight-form1-2"
                    key={v}
                    onClick={() => {
                      setSelected(v);
                      setService(v);
                      setOpen(false);
                    }}
                    style={{
                      padding: "10px 12px",
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
                    onMouseLeave={(e) => (e.target.style.background = "#fff")}
                  >
                    {language === "VI" ? (
                      v === "인증 센터" ? "Chứng thực" :
                        v === "결혼 이민" ? "Kết hôn" :
                          v === "출생신고 대행" ? "Khai sinh, khai tử" :
                            v === "출입국 행정 대행" ? "Xuất nhập cảnh" :
                              v === "신분증명 서류 대행" ? "Giấy tờ tuỳ thân" :
                                v === "입양 절차 대행" ? "Nhận nuôi " :
                                  v === "비자 대행" ? "Thị thực" :
                                    v === "법률 컨설팅" ? "Tư vấn pháp lý" :
                                      v === "B2B 서비스" ? "Dịch vụ B2B" :
                                        v === "기타" ? "Khác " :
                                          v
                    ) : (
                      v
                    )}
                  </div>
                ))}
              </div>
            )}

            {!selected && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 이름 */}
          <div className="phoneRight-form-2" style={{ marginBottom: 20, fontSize: 18, }}>
            <div className="phoneRight-form2"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Họ tên</>) : ("이름")}<span style={{ color: "red" }}>*</span>
              </label>
              <input className="phoneRight-form2-input"
                type="text"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  if (value.trim() === "") {
                    setNameError(true);
                  } else {
                    setNameError(false);
                  }
                }}
                placeholder={language === "VI" ? "Vui lòng nhập họ và tên" : "이름을 입력해주세요"}
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                title="이름은 두 글자 이상이어야 한다"
              />
            </div>
            {nameError && submittedPhone && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div className="phoneRight-form3" style={{ marginBottom: 20, fontSize: 18, }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Email</>) : ("이메일")}
              </label>
              <input className="phoneRight-form3-input"
                type="email"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  if (value.trim() === "") {
                    setEmailError(true);
                  } else {
                    setEmailError(false);
                  }
                }}
                placeholder={language === "VI" ? "Vui lòng nhập Email" : "이메일을 입력해주세요"}
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="유효한 이메일 주소를 입력해 주세요"
              />
            </div>
            {/* {emailError && submittedPhone && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
              </div>
            )} */}
          </div>

          {/* 전화번호 */}
          <div className="phoneRight-form4" style={{ marginBottom: 20, fontSize: 18, }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Điện thoại</>) : ("전화번호")} <span style={{ color: "red" }}>*</span>
              </label>
              <select className="phoneRight-form4-select"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  width: 65,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                }}
              >
                <option value="선택">{language === "VI" ? (<>Chọn</>) : ("선택")}</option>
                <option value="+82">+82</option>
                <option value="+84">+84</option>
              </select>
              <input className="phoneRight-form4-input"
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  setPhone(value);
                  if (value.trim() === "") {
                    setPhoneError(true);
                  } else {
                    setPhoneError(false);
                  }
                }}
                placeholder={language === "VI" ? "Số điện thoại" : "전화번호"}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                }}
                pattern={
                  countryCode === "+82"
                    ? "[0-9]{9,11}"
                    : countryCode === "+84"
                      ? "[0-9]{9,10}"
                      : ".*"
                }
                title={
                  language === "VI"
                    ? (
                      countryCode === "+82"
                        ? "Số điện thoại Hàn Quốc phải có 9~11 chữ số."
                        : countryCode === "+84"
                          ? "Số điện thoại Việt Nam phải có 9~10 chữ số."
                          : "Vui lòng chọn mã quốc gia trước."
                    )
                    : (
                      countryCode === "+82"
                        ? "한국 전화번호는 9~11자리여야 합니다."
                        : countryCode === "+84"
                          ? "베트남 전화번호는 9~10자리여야 합니다."
                          : "국가 코드를 먼저 선택하세요."
                    )
                }
              />
            </div>
            {phoneError && submittedPhone && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 개인정보 동의 */}
          <div className="phoneRight-form5" style={{ marginBottom: 22, fontSize: 18, }}>
            <label
              style={{ fontSize: 18, display: "flex", alignItems: "center" }}
            >
              <input className="phoneRight-form5-input"
                type="radio"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{
                  marginRight: 6,
                  width: 16,
                  height: 16,
                  accentColor: "#000",
                }}
              />
              {language === "VI" ? (<>Đồng ý xử lý thông tin cá nhân</>) : ("개인정보 수집 및 이용 동의")}
            </label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "28px 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
            <span style={{ margin: "0 18px", color: "#000000ff", fontSize: 18 }}>
              or
            </span>
            <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
          </div>
          {/* Info liên hệ */}
          <div className="phoneRight-Contact"
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 26,
              textAlign: "center",
            }}
          >
            <div className="phoneRight-Contact-1">
              <strong>{language === "VI" ? (<>Liên hệ:</>) : ("전화 걸기:")}</strong> (+82) 51-715-0607
            </div>
            <div className="phoneRight-Contact-2">
              <strong>{language === "VI" ? (<>Email: </>) : ("이메일 보내기:")}</strong> onepass.kr@gmail.com
            </div>
            <div className="phoneRight-Contact-3" style={{ color: "#444" }}>
              {language === "VI" ? (<>*Giờ làm việc: 09:00 ~ 18:00 (Nghỉ trưa: 12:00~13:00,<br />  Thứ Bảy, Chủ Nhật và các ngày Lễ/Tết Hàn Quốc)</>) : ("*이용 시간: 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)")}
            </div>
          </div>

          {/* Nút submit */}
          <button className="phoneRight-submit"
            type="submit"
            style={{
              width: "100%",
              background: "#d9c4a4",
              color: "#ffffffff",
              padding: "16px",
              border: "none",
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            {language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}
          </button>
        </form>
      </div>
      <style>
        {
          `
                  @media (max-width: 600px) {
        .phoneRight {
          padding: 40px 30px !important;
        }
      
        .phoneRight-h2 {
          font-size: 26px !important;
          
        }
      
        /* Label */
        .phoneRight-form label,
        .phoneRight-form2 label,
        .phoneRight-form4 label,
        .phoneRight-form-1 label {
          
          font-size: 16px !important;
          flex-shrink: 0 !important;
        }
      
        /* Input */
        .phoneRight-form2-input,
        .phoneRight-form3-input,
        .phoneRight-form4-input {
          font-size: 15px !important;
        }
      
        .phoneRight-form4-select {
          font-size: 15px !important;
        }
         .phoneRight-form1{
          font-size: 15px !important;
         } 
        /* Dropdown */
        .phoneRight-form1-1 {
          left: 0 !important;
        }
      
        /* Lỗi hiển thị gọn */
        .phoneRight-form div[style*="color: red"] {
          margin-left: 0 !important;
        }
      
        /* Nút gửi */
        .phoneRight-submit {
          font-size: 16px !important;
          padding: 14px !important;
        }
      
        /* Liên hệ */
        .phoneRight-Contact {
          font-size: 15px !important;
          line-height: 1.6 !important;
        }
      
        .phoneRight-Contact-3 {
          font-size: 13.5px !important;
        }
      }
      
      /* ⚡ Dưới 400px */
      @media (max-width: 400px) {
        /* Container chính */
        .phoneRight {
          padding: 25px 16px !important;
        }
      
        /* Căn chỉnh đoạn liên hệ */
        .phoneRight-Contact {
          font-size: 13.5px !important;
          line-height: 1.7 !important;
          text-align: left !important;
          word-break: keep-all !important;
          white-space: normal !important;
          margin-top: 14px !important;
        }
      
        /* Từng dòng liên hệ */
        .phoneRight-Contact p,
        .phoneRight-Contact div,
        .phoneRight-Contact span {
          display: block !important;
          margin-bottom: 4px !important;
        }
      
        /* Nút "상담 신청" */
        .phoneRight-submit {
          margin-top: 18px !important;
          width: 100% !important;
          font-size: 15px !important;
          padding: 12px !important;
          border-radius: 10px !important;
        }
      
      }
      
                `
        }
      </style>
    </div>

  );

  const emailForm = (
    <div
      style={{
        maxWidth: 1200,
        margin: "60px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 40,
      }}
    >
      {/* Left */}
      <div style={{ flex: 1, minWidth: 340, maxWidth: 460 }}>
        <h3
          style={{
            color: "#1d4ed8",
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 14,
          }}
        >
          {language === "VI" ? (<>Email</>) : ("이메일 상담")}
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >
          {language === "VI" ? (<>Tìm kiếm giải pháp chính xác một cách tiện lợi, mọi lúc mọi nơi</>) : ("언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.")}
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >
          {language === "VI" ? (<>Để lại thông tin và vấn đề mà bạn cần được tư vấn, chúng tôi sẽ giải đáp vấn đề của bạn thông qua email.</>) : ("문의사항을 남겨주시고 문의 내용을 확인하여 3영업일 이내에 답변을 드립니다.")}

        </p>
      </div>

      {/* Right */}

      <div className="emailRight"
        style={{
          maxWidth: 640,
          width: "100%",
          background: "#f4f4f4",
          borderRadius: 8,
          padding: "60px 80px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="emailRight-h2" style={{ fontSize: 32, fontWeight: 700, }}>
          {language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}
        </h2>
        <div style={{ height: 1, background: "#000000ff", marginBottom: 30 }}></div>

        <form className="emailRight-form" onSubmit={handleSubmit1}>
          {/* 서비스 선택 */}
          <div className="emailRight-form-main" style={{ marginBottom: 20, position: "relative" }}>
            <div className="emailRight-form1"
              onClick={() => setOpen(!open)}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              <label className="emailRight-form1-label" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Dịch vụ</>) : ("서비스 선택")} <span style={{ color: "red" }}>*</span>
              </label>
              <div className="emailRight-form1-1" style={{ flex: 1, padding: "12px 0", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: selected ? "#000" : "#999" }}>
                  {selected || (language === "VI" ? "Chọn dịch vụ" : "서비스 선택")}
                </span>
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    transition: ".2s",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>

            {open && (
              <div className="emailRight-form1-list"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 120,
                  right: 0,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  zIndex: 10,
                }}
              >
                {list.map((v) => (
                  <div
                    key={v}
                    onClick={() => {
                      setSelected(v);
                      setService(v);
                      setOpen(false);
                    }}
                    style={{
                      padding: "10px 12px",
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
                    onMouseLeave={(e) => (e.target.style.background = "#fff")}
                  >
                    {language === "VI" ? (
                      v === "인증 센터" ? "Chứng thực" :
                        v === "결혼 이민" ? "Kết hôn" :
                          v === "출생신고 대행" ? "Khai sinh, khai tử" :
                            v === "출입국 행정 대행" ? "Xuất nhập cảnh" :
                              v === "신분증명 서류 대행" ? "Giấy tờ tuỳ thân" :
                                v === "입양 절차 대행" ? "Nhận nuôi " :
                                  v === "비자 대행" ? "Thị thực" :
                                    v === "법률 컨설팅" ? "Tư vấn pháp lý" :
                                      v === "B2B 서비스" ? "Dịch vụ B2B" :
                                        v === "기타" ? "Khác " :
                                          v
                    ) : (
                      v
                    )}
                  </div>
                ))}
              </div>
            )}

            {!selected && (
              <div className="emailRight-form1-selected" style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 이름 */}
          <div className="emailRight-form2" style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label className="emailRight-form2-label1" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Họ tên</>) : ("이름")}<span style={{ color: "red" }}>*</span>
              </label>
              <input className="emailRight-form2-input"
                type="text"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  if (value.trim() === "") {
                    setNameError(true);
                  } else {
                    setNameError(false);
                  }
                }}
                placeholder={language === "VI" ? "Vui lòng nhập họ và tên" : "이름을 입력해주세요"}
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                title="이름은 최소 2자 이상이어야 합니다"
              />
            </div>
            {nameError && submittedEmail && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div className="emailRight-form3" style={{ marginBottom: 20, fontSize: 18 }}>
            <div className="emailRight-form3-main"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label className="emailRight-form3-label" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Email</>) : ("이메일")}<span style={{ color: "red" }}>*</span>
              </label>
              <input className="emailRight-form3-input"
                type="email"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  if (value.trim() === "") {
                    setEmailError(true);
                  } else {
                    setEmailError(false);
                  }
                }}
                placeholder={language === "VI" ? "Vui lòng nhập Email" : "이메일을 입력해주세요"}
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="유효한 이메일 주소를 입력해 주세요"
              />
            </div>
            {emailError && submittedEmail && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 전화번호 */}
          <div className="emailRight-form4" style={{ marginBottom: 20, fontSize: 18 }}>
            <div className="emailRight-form4-main"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label className="emailRight-form4-label" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Điện thoại</>) : ("전화번호")} <span style={{ color: "red" }}>*</span>
              </label>
              <select className="emailRight-form4-select"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  width: 65,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                  marginRight: 10,
                }}
              >
                <option value="선택">{language === "VI" ? (<>Chọn</>) : ("선택")}</option>
                <option value="+82">+82</option>
                <option value="+84">+84</option>
              </select>
              <input className="emailRight-form4-input"
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  setPhone(value);
                  if (value.trim() === "") {
                    setPhoneError(true);
                  } else {
                    setPhoneError(false);
                  }
                }}
                placeholder={language === "VI" ? "Số điện thoại" : "전화번호"}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                }}
                pattern={
                  countryCode === "+82"
                    ? "[0-9]{9,11}"
                    : countryCode === "+84"
                      ? "[0-9]{9,10}"
                      : ".*"
                }
                title={
                  language === "VI"
                    ? (
                      countryCode === "+82"
                        ? "Số điện thoại Hàn Quốc phải có 9~11 chữ số."
                        : countryCode === "+84"
                          ? "Số điện thoại Việt Nam phải có 9~10 chữ số."
                          : "Vui lòng chọn mã quốc gia trước."
                    )
                    : (
                      countryCode === "+82"
                        ? "한국 전화번호는 9~11자리여야 합니다."
                        : countryCode === "+84"
                          ? "베트남 전화번호는 9~10자리여야 합니다."
                          : "국가 코드를 먼저 선택하세요."
                    )
                }
              />
            </div>
            {phoneError && submittedEmail && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 제목 */}
          <div className="emailRight-form5" style={{ marginBottom: 20, fontSize: 18 }}>
            <div className="emailRight-form5-main"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                padding: "4px 0",
              }}
            >
              <label className="emailRight-form5-label" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Nội dung</>) : ("내용")}<span style={{ color: "red" }}>*</span>
              </label>
              <input className="emailRight-form5-input"
                value={content}
                onChange={(e) => {
                  const value = e.target.value;
                  setContent(value);
                  if (value.trim() === "") setContentError(true);
                  else setContentError(false);
                }}
                onBlur={() => {
                  if (content.trim() === "") setContentError(true);
                }}
                placeholder={language === "VI" ? "Vui lòng nhập nội dung tư vấn " : "상담 내용을 입력해주세요"}
                rows={2} // 👈 Giảm chiều cao
                style={{
                  flex: "none",
                  width: 215,
                  height: "40px",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  resize: "none",
                  fontSize: 16,
                  padding: "6px 0",
                }}
              />
            </div>

            {contentError && submittedEmail && (
              <div

                style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* <div style={{ marginBottom: 20, fontSize: 18, marginTop: 50 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
            </div>
            <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>*필수입력입니다</div>
          </div> */}

          {/* 개인정보 동의 */}
          <div
            className="emailRight-form5"
            style={{
              marginBottom: 22,
              fontSize: 18,
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              className="emailRight-form5-label"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "nowrap",
                fontSize: "inherit",
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              <input
                className="emailRight-form5-input"
                type="radio"
                name="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{
                  width: 18,
                  height: 18,
                  accentColor: "#000",
                  flexShrink: 0,
                }}
              />
              {language === "VI" ? (<>Đồng ý xử lý thông tin cá nhân</>) : ("개인정보 수집 및 이용 동의")}
            </label>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "28px 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
            <span style={{ margin: "0 18px", color: "#000000ff", fontSize: 18 }}>or</span>
            <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
          </div>

          {/* Info liên hệ */}
          <div className="emailRight-Contact"
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 26,
              textAlign: "center",
            }}
          >
            <div className="emailRight-Contact-1">
              <strong>{language === "VI" ? (<>Liên hệ:</>) : ("전화 걸기:")}</strong> (+82) 51-715-0607
            </div>
            <div className="emailRight-Contact-2">
              <strong>{language === "VI" ? (<>Email: </>) : ("이메일 보내기:")}</strong> onepass.kr@gmail.com
            </div>
            <div className="emailRight-Contact-3" style={{ color: "#444" }}>
              {language === "VI" ? (<>*Giờ làm việc: 09:00 ~ 18:00 (Nghỉ trưa: 12:00~13:00,<br />  Thứ Bảy, Chủ Nhật và các ngày Lễ/Tết Hàn Quốc)</>) : ("*이용 시간: 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)")}
            </div>
          </div>

          {/* Nút submit */}
          <button className="emailRight-submit"
            type="submit"
            style={{
              width: "100%",
              background: "#d9c4a4",
              color: "#fff",
              padding: "16px",
              border: "none",
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            {language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}
          </button>
        </form>
      </div>
      <style>
        {
          `
              /* ----- Responsive dưới 600px ----- */
/* ----- Responsive dưới 600px ----- */
@media (max-width: 600px) {
  .emailRight {
    padding: 40px 30px !important;
  }
   
  /* Tất cả label */
  .emailRight-form1-label,
  .emailRight-form2-label1,
  .emailRight-form3-label,
  .emailRight-form4-label,
  .emailRight-form5-label {
    
    flex-shrink: 0 !important;
    font-size: clamp(13px, 2.4vw, 15px) !important;
  }

  /* Tất cả input, select */
  .emailRight-form1-1 input,
  .emailRight-form2-input,
  .emailRight-form3-input,
  .emailRight-form4-input,
  .emailRight-form4-select,
  .emailRight-form5-input {
    font-size: clamp(13px, 2.5vw, 15px) !important;
  }

  .emailRight-form1-list {
    left: 0 !important;
    width: 100% !important;
  }
          
  .emailRight-form1-selected,
  .emailRight-form2 div + div,
  .emailRight-form3 div + div,
  .emailRight-form4 div + div,
  .emailRight-form5 div + div {
    margin-left: 0 !important;
  }

  .emailRight-Contact {
    font-size: 16px !important;
  }

  .emailRight-submit {
    font-size: 16px !important;
    padding: 14px !important;
  }

  /* Form4 riêng */
  .emailRight-form4-main {
    flex-wrap: nowrap !important;
    align-items: center !important;
    gap: 6px !important;
  }

  .emailRight-form4-label {
    width: 100px !important;
  }

  .emailRight-form4-select {
    width: 65px !important;
    margin-right: 6px !important;
  }

  .emailRight-form4-input {
    flex: 1 !important;
  }
}

/* ----- Responsive dưới 400px ----- */
@media (max-width: 400px) {
  .emailRight {
    padding: 30px 20px !important;
  }

  .emailRight-h2 {
    font-size: 24px !important;
  }

  /* Tất cả label */
  .emailRight-form1-label,
  .emailRight-form2-label1,
  .emailRight-form3-label,
  .emailRight-form4-label,
  .emailRight-form5-label {
    font-size: clamp(12px, 3vw, 14px) !important;
    
  }
   
  /* Tất cả input, select */
  .emailRight-form1-1 input,
  .emailRight-form2-input,
  .emailRight-form3-input,
  .emailRight-form4-input,
  .emailRight-form4-select,
  .emailRight-form5-input {
    font-size: clamp(12px, 3vw, 14px) !important;
  }

  .emailRight-form4-main {
    flex-wrap: nowrap !important;
    gap: 4px !important;
  }

  .emailRight-form4-select {
    width: 60px !important;
    margin-bottom: 6px !important;
  }

  .emailRight-Contact {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .emailRight-submit {
    font-size: 15px !important;
    padding: 12px !important;
  }
}

`
        }
      </style>
    </div>
  );

  const visitForm = (
    <div
      style={{
        maxWidth: 1200,
        margin: "60px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 40,
      }}
    >
      {/* Left */}
      <div style={{ flex: 1, minWidth: 340, maxWidth: 460 }}>
        <h3
          style={{
            color: "#1d4ed8",
            fontWeight: 700,
            fontSize: 24,
            marginBottom: 14,
          }}
        >
          {language === "VI" ? (<>Trực tiếp</>) : (" 방문 상담")}
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 700,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >
          {language === "VI" ? (<>Tìm kiếm giải pháp chính xác một cách tiện lợi, mọi lúc mọi nơi</>) : ("언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.")}

        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >
          {language === "VI" ? (<>Đặt lịch hẹn và đến văn phòng của chúng tôi. Các chuyên gia sẽ tư vấn và đưa ra giải pháp trực tiếp cho bạn.</>) : (" 예약 후 직접 방문하시면 담당자가 서류를 함께 검토하며 가장 정확한 해결책을 제시해 드립니다.")}

        </p>
      </div>

      {/* Right */}

      <div className="visitRight"
        style={{
          maxWidth: 640,
          width: "100%",
          background: "#f4f4f4",
          borderRadius: 8,
          padding: "60px 80px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 className="visitRight-h2" style={{ fontSize: 32, fontWeight: 700, }}>{language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}</h2>
        <div style={{ height: 1, background: "#000000ff", marginBottom: 30 }}></div>

        <form className="visitRight-form" onSubmit={handleSubmit2}>
          {/* 서비스 선택 */}
          <div className="visitRight-form1" style={{ marginBottom: 20, position: "relative" }}>
            <div
              onClick={() => setOpen(!open)}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              <label className="visitRight-form1" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Dịch vụ</>) : ("서비스 선택")} <span style={{ color: "red" }}>*</span>

              </label>
              <div className="visitRight-form1-1" style={{ flex: 1, padding: "12px 0", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: selected ? "#000" : "#999" }}>
                  {selected || (language === "VI" ? "Chọn dịch vụ" : "서비스 선택")}
                </span>
                <i
                  className="fa-solid fa-chevron-down"
                  style={{
                    transition: ".2s",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </div>

            {open && (
              <div className="visitRight-form1-list"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 120,
                  right: 0,
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: 4,
                  zIndex: 10,
                }}
              >
                {list.map((v) => (
                  <div
                    key={v}
                    onClick={() => {
                      setSelected(v);
                      setService(v)
                      setOpen(false);
                    }}
                    style={{
                      padding: "10px 12px",
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
                    onMouseLeave={(e) => (e.target.style.background = "#fff")}
                  >
                    {language === "VI" ? (
                      v === "인증 센터" ? "Chứng thực" :
                        v === "결혼 이민" ? "Kết hôn" :
                          v === "출생신고 대행" ? "Khai sinh, khai tử" :
                            v === "출입국 행정 대행" ? "Xuất nhập cảnh" :
                              v === "신분증명 서류 대행" ? "Giấy tờ tuỳ thân" :
                                v === "입양 절차 대행" ? "Nhận nuôi " :
                                  v === "비자 대행" ? "Thị thực" :
                                    v === "법률 컨설팅" ? "Tư vấn pháp lý" :
                                      v === "B2B 서비스" ? "Dịch vụ B2B" :
                                        v === "기타" ? "Khác " :
                                          v
                    ) : (
                      v
                    )}
                  </div>
                ))}
              </div>
            )}

            {!selected && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 이름 */}
          <div className="visitRight-form2" style={{ marginBottom: 20, fontSize: 18 }}>
            <div className="visitRight-form2-main"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label className="visitRight-form2-label" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Họ tên</>) : ("이름")}<span style={{ color: "red" }}>*</span>
              </label>
              <input className="visitRight-form2-input"
                type="text"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  setName(value);
                  if (value.trim() === "") {
                    setNameError(true);
                  } else {
                    setNameError(false);
                  }
                }}
                placeholder={language === "VI" ? "Vui lòng nhập họ và tên" : "이름을 입력해주세요"}

                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                title="이름은 최소 2자 이상이어야 합니다."
              />
            </div>
            {nameError && submittedVisit && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div className="visitRight-form3" style={{ marginBottom: 20, fontSize: 18 }}>
            <div className="visitRight-form3-main"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label className="visitRight-form3-label" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Email</>) : ("이메일")}
                <span style={{ color: "red" }}>*</span></label>
              <input className="visitRight-form3-input"
                type="email"
                value={email}
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  if (value.trim() === "") {
                    setEmailError(true);
                  } else {
                    setEmailError(false);
                  }
                }}
                placeholder={language === "VI" ? "Vui lòng nhập Email" : "이메일을 입력해주세요"}
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="유효한 이메일 주소를 입력해 주세요"
              />
            </div>
            {emailError && submittedVisit && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 전화번호 */}
          <div className="visitRight-form4" style={{ marginBottom: 20, fontSize: 18 }}>
            <div className="visitRight-form4-main"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label className="visitRight-form4-label" style={{ width: 120, fontWeight: 600 }}>
                {language === "VI" ? (<>Điện thoại</>) : ("전화번호")} <span style={{ color: "red" }}>*</span>

              </label>
              <select className="visitRight-form4-select"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  width: 65,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                  marginRight: 10,
                }}
              >
                <option value="선택">{language === "VI" ? (<>Chọn</>) : ("선택")}</option>
                <option value="+82">+82</option>
                <option value="+84">+84</option>
              </select>
              <input className="visitRight-form4-input"
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value;
                  setPhone(value);
                  if (value.trim() === "") {
                    setPhoneError(true);
                  } else {
                    setPhoneError(false);
                  }
                }}
                placeholder={language === "VI" ? "Số điện thoại" : "전화번호"}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                }}
                pattern={
                  countryCode === "+82"
                    ? "[0-9]{9,11}"
                    : countryCode === "+84"
                      ? "[0-9]{9,10}"
                      : ".*"
                }
                title={
                  language === "VI"
                    ? (
                      countryCode === "+82"
                        ? "Số điện thoại Hàn Quốc phải có 9~11 chữ số."
                        : countryCode === "+84"
                          ? "Số điện thoại Việt Nam phải có 9~10 chữ số."
                          : "Vui lòng chọn mã quốc gia trước."
                    )
                    : (
                      countryCode === "+82"
                        ? "한국 전화번호는 9~11자리여야 합니다."
                        : countryCode === "+84"
                          ? "베트남 전화번호는 9~10자리여야 합니다."
                          : "국가 코드를 먼저 선택하세요."
                    )
                }
              />

            </div>
            {phoneError && submittedVisit && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}
          </div>

          {/* 제목 */}
          <div className="visitRight-form5" style={{ marginBottom: 20, fontSize: 18 }}>
            <div className="visitRight-form5-main"
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                paddingBottom: 6,
              }}
            >
              {/* 날짜 선택 */}
              <label className="visitRight-form5-label" style={{ fontWeight: 700, marginRight: 8 }}>
                {language === "VI" ? (<>Chọn ngày</>) : ("날짜 선택")} <span style={{ color: "red" }}>*</span>
              </label>

              {/* input chọn ngày */}
              <input className="visitRight-form5-input"
                type="date"
                value={date}
                onChange={(e) => {
                  const value = e.target.value;
                  setDate(value);
                  if (value.trim() === "") {
                    setDateError(true);
                  } else {
                    setDateError(false);
                  }
                }}

                placeholder="yyyy/mm/dd"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: 16,
                  marginRight: 6,
                  marginLeft: 30,
                  position: "relative",
                  colorScheme: "light",
                }}
                onFocus={(e) => e.target.showPicker?.()} // mở picker khi click
              />

              {/* 시간 */}
              <label className="visitRight-form5-label1" style={{ fontWeight: 700, marginRight: 8 }}>
                {language === "VI" ? (<>Giờ</>) : ("시간")}
              </label>

              {/* input chọn giờ */}
              <input className="visitRight-form5-input1"
                type="time"
                value={time}
                onChange={handleTimeChange}
                min="09:00"
                max="18:00"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: 18,
                  marginRight: 6,
                }}
              />

              {/* icon lịch (chỉ 1 cái cuối) */}
              <i className="" style={{ fontSize: 18 }}></i>
            </div>

            {dateError && submittedVisit && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                {language === "VI" ? (<>*Đây là mục bắt buộc</>) : ("*필수입력입니다")}
              </div>
            )}

          </div>

          {/* 개인정보 동의 */}
          <div className="visitRight-form6" style={{ marginBottom: 22, fontSize: 18 }}>
            <label className=" visitRight-form6-checkbox" style={{ fontSize: 18, display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                name="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{
                  marginRight: 6,
                  width: 16,
                  height: 16,
                  accentColor: "#000",
                }}
              />
              {language === "VI" ? (<>Đồng ý xử lý thông tin cá nhân</>) : ("개인정보 수집 및 이용 동의")}

            </label>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "28px 0",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
            <span style={{ margin: "0 18px", color: "#000000ff", fontSize: 18 }}>or</span>
            <div style={{ flex: 1, height: 1, background: "#000000ff" }}></div>
          </div>

          {/* Info liên hệ */}
          <div className="visitRight-Contact"
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 26,
              textAlign: "center",
            }}
          >
            <div className="visitRight-Contact-1">
              <strong>{language === "VI" ? (<>Liên hệ:</>) : ("전화 걸기:")}</strong> (+82) 51-715-0607
            </div>
            <div className="visitRight-Contact-2">
              <strong>{language === "VI" ? (<>Email: </>) : ("이메일 보내기:")}</strong> onepass.kr@gmail.com
            </div>
            <div className="visitRight-Contact-3" style={{ color: "#444" }}>
              {language === "VI" ? (<>*Giờ làm việc: 09:00 ~ 18:00 (Nghỉ trưa: 12:00~13:00,<br />  Thứ Bảy, Chủ Nhật và các ngày Lễ/Tết Hàn Quốc)</>) : ("*이용 시간: 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)")}
            </div>
          </div>

          {/* Nút submit */}
          <button className="visitRight-submit"
            type="submit"
            style={{
              width: "100%",
              background: "#d9c4a4",
              color: "#fff",
              padding: "16px",
              border: "none",
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            {language === "VI" ? (<>Yêu cầu tư vấn</>) : ("상담 신청")}
          </button>
        </form>
      </div>
      <style>
        {
          `
                /* ✅ Reponsive cho màn hình <= 600px */
                                .visitRight-form6 label {
                  display: flex !important;
                  align-items: center !important;
                  gap: 8px !important;
                  line-height: 1.6 !important;
                  font-size: 17px !important;
                  flex-wrap: nowrap !important;
                  width: 100% !important;
                }

.visitRight-form6 input[type="radio"] {
  width: 18px !important;
  height: 18px !important;
  accent-color: #000 !important;
  transform: translateY(1px);
}
@media (max-width: 600px) {
  .visitRight {
    padding: 40px 30px !important;
  }

  .visitRight-h2 {
    font-size: 26px !important;
    
  }

  .visitRight-form label {
    font-size: 16px !important;
    flex-shrink: 0 !important;
  }

  .visitRight-form input,
  .visitRight-form select {
    font-size: 16px !important;
  }

  .visitRight-form1-list {
    left: 0 !important;
  }

  .visitRight-form5-input {
    margin-left: 0 !important;
  }

  .visitRight-submit {
    font-size: 17px !important;
    padding: 14px !important;
  }

  .visitRight-Contact {
    font-size: 16px !important;
  }
}

/* ✅ Reponsive cho màn hình <= 400px */
@media (max-width: 400px) {
  .visitRight {
    padding: 30px 20px !important;
  }

  .visitRight-h2 {
    font-size: 22px !important;
  }

  .visitRight-form label {
   
    font-size: 15px !important;
  }

  .visitRight-form input,
  .visitRight-form select {
    font-size: 15px !important;
  }

  .visitRight-form5-main {
    gap: 8px !important;
  }

  .visitRight-form5-input,
  .visitRight-form5-input1 {
    margin: 0 !important;
  }

  .visitRight-submit {
    font-size: 16px !important;
  }

  .visitRight-Contact {
    font-size: 15px !important;
    line-height: 1.6 !important;
  }
}

/* ✅ Optimization for 390px screen width */
@media (max-width: 390px) {
  .visitRight {
    padding: 25px 15px !important;
  }

  .visitRight-h2 {
    font-size: 20px !important;
  }

  .visitRight-form label {
    width: 120px !important;
    font-size: 14px !important;
  }

  .visitRight-form input,
  .visitRight-form select {
    font-size: 14px !important;
  }

  /* Keep date/time in single row */
  .visitRight-form5-main {
    flex-direction: row !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
  }

  .visitRight-form5-input,
  .visitRight-form5-input1 {
    flex: 1 !important;
    min-width: 120px !important;
    margin: 0 !important;
  }

  .visitRight-submit {
    font-size: 15px !important;
    padding: 12px !important;
  }

  .visitRight-Contact {
    font-size: 14px !important;
    line-height: 1.5 !important;
  }
}

/* ✅ Responsive for 380px screen width */
@media (max-width: 380px) {
  .visitRight {
    padding: 20px 12px !important;
  }

  .visitRight-h2 {
    font-size: 18px !important;
  }

  .visitRight-form label {
    width: 120px !important;
    font-size: 13px !important;
  }

  .visitRight-form input,
  .visitRight-form select {
    font-size: 13px !important;
  }

  /* Keep date/time in single row */
  .visitRight-form5-main {
    flex-direction: row !important;
    align-items: center !important;
    flex-wrap: wrap !important;
    gap: 6px !important;
  }

  .visitRight-form5-input,
  .visitRight-form5-input1 {
    flex: 1 !important;
    min-width: 100px !important;
    margin: 0 !important;
  }

  .visitRight-submit {
    font-size: 14px !important;
    padding: 10px !important;
  }

  .visitRight-Contact {
    font-size: 13px !important;
    line-height: 1.4 !important;
  }
}
`
        }
      </style>
    </div>
  );
  const tabs = [
    { id: "sns", label: "SNS 채팅 상담" },
    { id: "phone", label: "전화 상담" },
    { id: "email", label: "이메일 상담" },
    { id: "visit", label: "방문 상담" },
  ];
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
            CONSULT
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
            onClick={loading ? undefined : handleSubmitConsult1}
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

      <section style={{ background: "#fff", minHeight: 400, width: "100vw", padding: "40px 0" }}>
        <div style={{ maxWidth: 1250, margin: "0 auto", padding: "0 20px" }}>
          {/* Tabs */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1px solid #d1d5db",
              marginBottom: 40,
            }}
          >
            <div
              className="menuCosult"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: 1250,
                position: "relative",
              }}
            >
              {tabs.map((tab) => (
                <button className="menuCosult-button"
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  style={{
                    background: "none",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: activeTab === tab.id ? 600 : 400,
                    color: activeTab === tab.id ? "#000" : "#9ca3af",
                    padding: "10px 30px",
                    position: "relative",
                    transition: "color 0.2s ease",
                  }}
                >

                  {language === "VI" ? (
                    tab.label === "SNS 채팅 상담" ? "Nhắn Tin"
                      : tab.label === "전화 상담" ? "Gọi điện"
                        : tab.label === "이메일 상담" ? <>Email</>
                          : tab.label === "방문 상담" ? <>Trực tiếp</>
                            : tab.label
                  ) : (
                    tab.label
                  )}
                  {activeTab === tab.id && (
                    <div className="menuCosult-button-id"
                      style={{
                        position: "absolute",
                        bottom: -2,
                        left: 0,
                        width: "100%",
                        height: 3,
                        backgroundColor: "#111827",
                        borderRadius: 1.5,
                        transition: "all 0.2s ease",
                      }}
                    />
                  )}
                </button>
              ))}

            </div>
          </div>
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


      /* ⚡ Desktop giữ nguyên */
.menuCosult {
  overflow: visible;
}

/* ⚡ Cho phép cuộn ngang từ 900px trở xuống */
@media (max-width: 900px) {
  .menuCosult {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    justify-content: flex-start !important;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .menuCosult::-webkit-scrollbar {
    display: none;
  }

  .menuCosult-button {
    flex: 0 0 auto;
    display: inline-block;
  }
}

/* ⚡ Khi màn hình nhỏ hơn 400px */
@media (max-width: 400px) {
  .menuCosult {
    gap: 0 !important;
    padding: 0 5px; /* tạo chút khoảng đệm hai bên */
  }

  .menuCosult-button {
    padding: 8px 16px !important;
    font-size: 12.5px !important;
    flex: 0 0 auto;
  }

  .menuCosult-button-id {
    height: 2px !important;
  }
}

    `}
            </style>
            {showPopup && (
              <div
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "20px",
                  background: popupMessage.isError ? "#f44336" : "#4CAF50", // đỏ nếu lỗi, xanh nếu thành công
                  color: "white",
                  padding: "16px 30px",
                  borderRadius: "8px",
                  fontSize: "20px",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  zIndex: 9999,
                  animation: "pushDown 0.5s ease-out",
                }}
              >
                {popupMessage.text} {/* Hiển thị nội dung popup động */}
              </div>
            )}


            {showTimePopup && (
              <div
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "20px",
                  background: "#f87171", // đỏ nhẹ
                  color: "white",
                  padding: "16px 28px",
                  borderRadius: "8px",
                  fontSize: "18px",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  animation: "pushDown 0.4s ease-out",
                  zIndex: 9999,
                }}
              >
                근무 시간은 09:00~18:00 입니다 (점심시간 12:00~13:00 제외)
              </div>
            )}
          </>




          {/* Content */}
          {activeTab === "sns" && snsForm}
          {activeTab === "phone" && phoneForm}
          {activeTab === "email" && emailForm}
          {activeTab === "visit" && visitForm}
        </div>
      </section>

    </>
  );
}

