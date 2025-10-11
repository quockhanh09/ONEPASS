import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import heroBg from "../assets/img/herobanner-1.png";
import iconMess from "../assets/img/iconmess.png";
import iconZalo from "../assets/img/iconzalo.png";
import iconKakao from "../assets/img/iconTalk.png";
import iconNaver from "../assets/img/iconna.png";
import { em } from "framer-motion/client";

export default function Consult() {
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
  // submitted flags control when to show the red "*필수입력입니다" messages
  const [submittedPhone, setSubmittedPhone] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [submittedVisit, setSubmittedVisit] = useState(false);
  const handleTabClick = (tabId) => {

    if (name.trim() === "") setNameError(true);
    if (email.trim() === "") setEmailError(true);
    if (phone.trim() === "") setPhoneError(true);

    // Sau đó mới chuyển tab
    setActiveTab(tabId);
  };
  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };
  const handleSubmit = async (e) => {  // Gọi Điện
    e.preventDefault();

    // mark that user attempted to submit the phone form so errors will render
    setSubmittedPhone(true);

    const lang = localStorage.getItem("lang") || "ko"; // Lấy ngôn ngữ
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

    // Kiểm tra dữ liệu trống
    if (!name || !phone || !email || !agree) {
      if (!name) setNameError(true);
      if (!phone) setPhoneError(true);
      if (!email) setEmailError(true);
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

      console.log("✅ Server response:", data);

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setAgree(false);

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
    // mark that user attempted to submit the email form so errors will render
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
          SNS 채팅 상담
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >
          언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >
          실시간 채팅으로 상담사와 빠르게 연결하여 언제든 어디서든 간편하게
          무료상담을 받을 수 있습니다.
        </p>
      </div>

      {/* Right */}
      <div
        style={{
          height: " 800px",
          flex: 1,
          maxWidth: 650,
          background: "#f9fafb",
          borderRadius: 8,
          padding: "75px 80px",
          border: "1px solid #e5e7eb",

        }}
      >
        <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 20 }}>
          상담 신청
        </h3>
        <div style={{ height: 1, background: "#d1d5db", marginBottom: 24 }}></div>

        {[
          { text: "메신저를 이용하여 실시간 채팅 상담", img: iconMess, link: "https://www.messenger.com/t/803644846172440/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0" },
          { text: "카카오톡을 이용하여 실시간 채팅 상담", img: iconKakao, link: "https://pf.kakao.com/_BHALn/chat" },
          { text: "Zalo를 이용하여 실시간 채팅 상담", img: iconZalo, link: "" },
          { text: "네이버톡을 이용하여 실시간 채팅 상담", img: iconNaver, link: "" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
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
              <span>{item.text}</span>
              <img
                src={item.img}
                alt=""
                style={{ width: 30, height: 30, objectFit: "contain" }}
              />
            </button>
          </a>
        ))}

        {/* Divider */}
        <div
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
        <div style={{ fontSize: 18, color: "#111827", lineHeight: 1.8, textAlign: "center" }}>
          <p>
            <strong>전화 걸기:</strong> (+82) 51-715-0607
          </p>
          <p>
            <strong>이메일 보내기:</strong> onepass.kr@gmail.com
          </p>
          <p style={{ color: "#6b7280", fontSize: 16 }}>
            *이용 시간: 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)
          </p>
        </div>
      </div>
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
          전화 상담
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >
          언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >
          전화를 통해서 급한 문제를 빠르게 해결할 수 있습니다.
          전문 상담사와 바로 연결하여 상담 받을 수 있습니다.
        </p>
      </div>

      {/* Right */}

      <div
        style={{
          maxWidth: 640,
          width: "100%",
          background: "#f4f4f4",
          borderRadius: 8,
          padding: "60px 80px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 10, }}>
          상담 신청
        </h2>
        <div style={{ height: 1, background: "#000000ff", marginBottom: 30 }}></div>
        <form onSubmit={handleSubmit}>
          {/* 서비스 선택 */}
          <div style={{ marginBottom: 20, position: "relative" }}>
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
              <label style={{ width: 120, fontWeight: 600 }}>
                서비스 선택 <span style={{ color: "red" }}>*</span>
              </label>
              <div style={{ flex: 1, padding: "12px 0", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: selected ? "#000" : "#999" }}>
                  {selected || "서비스 선택"}
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
              <div
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
                    {v}
                  </div>
                ))}
              </div>
            )}

            {!selected && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
              </div>
            )}
          </div>

          {/* 이름 */}
          <div style={{ marginBottom: 20, fontSize: 18, }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                이름 <span style={{ color: "red" }}>*</span>
              </label>
              <input
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
                placeholder="이름을 입력해주세요"
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                required
                pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                title="Họ tên phải có ít nhất 2 ký tự, chỉ bao gồm chữ cái hoặc tiếng Hàn."
              />
            </div>
            {nameError && submittedPhone && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div style={{ marginBottom: 20, fontSize: 18, }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>이메일</label>
              <input
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
                placeholder="이메일을 입력해주세요"
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title=" Vui lòng nhập địa chỉ email hợp lệ"
              />
            </div>
            {emailError && submittedPhone && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
              </div>
            )}
          </div>

          {/* 전화번호 */}
          <div style={{ marginBottom: 20, fontSize: 18, }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                전화번호 <span style={{ color: "red" }}>*</span>
              </label>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  width: 90,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                }}
              >
                <option value="선택">선택</option>
                <option value="+82">+82</option>
                <option value="+84">+84</option>
              </select>
              <input
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
                placeholder="전화번호"
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
                  countryCode === "+82"
                    ? "Số điện thoại Hàn Quốc phải có 9–11 chữ số."
                    : countryCode === "+84"
                      ? "Số điện thoại Việt Nam phải có 9–10 chữ số."
                      : "Vui lòng chọn mã quốc gia trước khi nhập số điện thoại."
                }
              />
            </div>
            {phoneError && submittedPhone && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입입니다
              </div>
            )}
          </div>

          {/* 개인정보 동의 */}
          <div style={{ marginBottom: 22, fontSize: 18, }}>
            <label
              style={{ fontSize: 18, display: "flex", alignItems: "center" }}
            >
              <input
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
              개인정보 수집 및 이용 동의
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
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 26,
              textAlign: "center",
            }}
          >
            <div>
              <strong>전화 걸기:</strong> (+82) 51-715-0607
            </div>
            <div>
              <strong>이메일 보내기:</strong> onepass.kr@gmail.com
            </div>
            <div style={{ color: "#444" }}>
              <strong>*이용 시간:</strong> 평일 09:00 ~ 18:00 (점심 12:00~13:00,
              주말 공휴일 휴무)
            </div>
          </div>

          {/* Nút submit */}
          <button
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
            상담 신청
          </button>
        </form>
      </div>

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
          전화 상담
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >
          언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >
          전화를 통해서 급한 문제를 빠르게 해결할 수 있습니다.
          전문 상담사와 바로 연결하여 상담 받을 수 있습니다.
        </p>
      </div>

      {/* Right */}

      <div
        style={{
          maxWidth: 640,
          width: "100%",
          background: "#f4f4f4",
          borderRadius: 8,
          padding: "60px 80px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, }}>상담 신청</h2>
        <div style={{ height: 1, background: "#000000ff", marginBottom: 30 }}></div>

        <form onSubmit={handleSubmit1}>
          {/* 서비스 선택 */}
          <div style={{ marginBottom: 20, position: "relative" }}>
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
              <label style={{ width: 120, fontWeight: 600 }}>
                서비스 선택 <span style={{ color: "red" }}>*</span>
              </label>
              <div style={{ flex: 1, padding: "12px 0", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: selected ? "#000" : "#999" }}>
                  {selected || "서비스 선택"}
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
              <div
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
                    {v}
                  </div>
                ))}
              </div>
            )}

            {!selected && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
              </div>
            )}
          </div>

          {/* 이름 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                이름 <span style={{ color: "red" }}>*</span>
              </label>
              <input
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
                placeholder="이름을 입력해주세요"
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                required
                pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                title="Họ tên phải có ít nhất 2 ký tự, chỉ bao gồm chữ cái hoặc tiếng Hàn."
              />
            </div>
            {nameError && submittedEmail && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>이메일<span style={{ color: "red" }}>*</span></label>
              <input
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
                placeholder="이메일을 입력해주세요"
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title=" Vui lòng nhập địa chỉ email hợp lệ"
              />
            </div>
            {emailError && submittedEmail && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입입니다
              </div>
            )}
          </div>

          {/* 전화번호 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                전화번호 <span style={{ color: "red" }}>*</span>
              </label>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  width: 90,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                }}
              >
                <option value="선택">선택</option>
                <option value="+82">+82</option>
                <option value="+84">+84</option>
              </select>
              <input
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
                placeholder="전화번호"
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
                  countryCode === "+82"
                    ? "Số điện thoại Hàn Quốc phải có 9–11 chữ số."
                    : countryCode === "+84"
                      ? "Số điện thoại Việt Nam phải có 9–10 chữ số."
                      : "Vui lòng chọn mã quốc gia trước khi nhập số điện thoại."
                }
              />
            </div>
            {phoneError && submittedEmail && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입입니다
              </div>
            )}
          </div>

          {/* 제목 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                padding: "4px 0",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                내용<span style={{ color: "red" }}>*</span>
              </label>
              <textarea
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
                placeholder="상담 내용을 입력해주세요"
                rows={2} // 👈 Giảm chiều cao
                style={{
                  flex: "none", // 👈 Ngăn flex tự giãn full chiều ngang
                  width: "400px", // 👈 Đặt chiều rộng cố định
                  height: "40px", // 👈 Đặt chiều cao
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  resize: "none",
                  fontSize: 16,
                  padding: "6px 0",
                }}
              />
            </div>

            {contentError && (
              <div 
              
              style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
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
          <div style={{ marginBottom: 22, fontSize: 18 }}>
            <label style={{ fontSize: 18, display: "flex", alignItems: "center" }}>
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
              개인정보 수집 및 이용 동의
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
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 26,
              textAlign: "center",
            }}
          >
            <div>
              <strong>전화 걸기:</strong> (+82) 51-715-0607
            </div>
            <div>
              <strong>이메일 보내기:</strong> onepass.kr@gmail.com
            </div>
            <div style={{ color: "#444" }}>
              <strong>*이용 시간:</strong> 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)
            </div>
          </div>

          {/* Nút submit */}
          <button
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
            상담 신청
          </button>
        </form>
      </div>

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
          방문 상담
        </h3>
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            lineHeight: 1.5,
            marginBottom: 18,
            color: "#111827",
          }}
        >
          언제 어디서나, 가장 편한 방법으로 정확한 해결책을 만나보세요.
        </h2>
        <p
          style={{
            color: "#6b7280",
            fontSize: 18,
            lineHeight: 1.8,
            letterSpacing: "-0.2px",
          }}
        >
          예약 후 직접 방문하시면 담당자가 서류를 함께 검토하며 가장 정확한 해결책을 제시해 드립니다.

        </p>
        <p style={{ color: "#384D8D" }}>찾아오시는 길 보기 <i class="bi bi-arrow-right"></i></p>
      </div>

      {/* Right */}

      <div
        style={{
          maxWidth: 640,
          width: "100%",
          background: "#f4f4f4",
          borderRadius: 8,
          padding: "60px 80px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, }}>상담 신청</h2>
        <div style={{ height: 1, background: "#000000ff", marginBottom: 30 }}></div>

        <form onSubmit={handleSubmit2}>
          {/* 서비스 선택 */}
          <div style={{ marginBottom: 20, position: "relative" }}>
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
              <label style={{ width: 120, fontWeight: 600 }}>
                서비스 선택 <span style={{ color: "red" }}>*</span>
              </label>
              <div style={{ flex: 1, padding: "12px 0", display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: selected ? "#000" : "#999" }}>
                  {selected || "서비스 선택"}
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
              <div
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
                    {v}
                  </div>
                ))}
              </div>
            )}

            {!selected && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입력입니다
              </div>
            )}
          </div>

          {/* 이름 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                이름 <span style={{ color: "red" }}>*</span>
              </label>
              <input
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
                placeholder="이름을 입력해주세요"
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                required
                pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
                title="Họ tên phải có ít nhất 2 ký tự, chỉ bao gồm chữ cái hoặc tiếng Hàn."
              />
            </div>
            {nameError && submittedVisit && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입입니다
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>이메일<span style={{ color: "red" }}>*</span></label>
              <input
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
                placeholder="이메일을 입력해주세요"
                style={{
                  flex: 1,
                  border: "none",
                  padding: "12px 0",
                  outline: "none",
                  background: "transparent",
                }}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title=" Vui lòng nhập địa chỉ email hợp lệ"
              />
            </div>
            {emailError && submittedVisit && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입입니다
              </div>
            )}
          </div>

          {/* 전화번호 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000000ff",
              }}
            >
              <label style={{ width: 120, fontWeight: 600 }}>
                전화번호 <span style={{ color: "red" }}>*</span>
              </label>
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{
                  width: 90,
                  border: "none",
                  outline: "none",
                  padding: "12px 0",
                  background: "transparent",
                }}
              >
                <option value="선택">선택</option>
                <option value="+82">+82</option>
                <option value="+84">+84</option>
              </select>
              <input
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
                placeholder="전화번호"
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
                  countryCode === "+82"
                    ? "Số điện thoại Hàn Quốc phải có 9–11 chữ số."
                    : countryCode === "+84"
                      ? "Số điện thoại Việt Nam phải có 9–10 chữ số."
                      : "Vui lòng chọn mã quốc gia trước khi nhập số điện thoại."
                }
              />

            </div>
            {phoneError && submittedVisit && (
              <div style={{ fontSize: 12, color: "red", marginTop: 4, marginLeft: 120 }}>
                *필수입입니다
              </div>
            )}
          </div>

          {/* 제목 */}
          <div style={{ marginBottom: 20, fontSize: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #000",
                paddingBottom: 6,
              }}
            >
              {/* 날짜 선택 */}
              <label style={{ fontWeight: 700, marginRight: 8 }}>
                날짜 선택 <span style={{ color: "red" }}>*</span>
              </label>

              {/* input chọn ngày */}
              <input
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
              <label style={{ fontWeight: 700, marginRight: 8 }}>시간</label>

              {/* input chọn giờ */}
              <input
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
                *필수입입니다
              </div>
            )}

          </div>



          {/* 개인정보 동의 */}
          <div style={{ marginBottom: 22, fontSize: 18 }}>
            <label style={{ fontSize: 18, display: "flex", alignItems: "center" }}>
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
              개인정보 수집 및 이용 동의
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
          <div
            style={{
              fontSize: 18,
              lineHeight: 1.8,
              marginBottom: 26,
              textAlign: "center",
            }}
          >
            <div>
              <strong>전화 걸기:</strong> (+82) 51-715-0607
            </div>
            <div>
              <strong>이메일 보내기:</strong> onepass.kr@gmail.com
            </div>
            <div style={{ color: "#444" }}>
              <strong>*이용 시간:</strong> 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)
            </div>
          </div>

          {/* Nút submit */}
          <button
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
            상담 신청
          </button>
        </form>
      </div>

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
        <div style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            CONSULT
          </h1>
        </div>
        {/* Main content row */}

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
                <button
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
                  {tab.label}
                  {activeTab === tab.id && (
                    <div
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
