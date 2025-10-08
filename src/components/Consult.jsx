import React, { useState } from "react";
import axios from "axios";
import heroBg from "../assets/img/herobanner-1.png";
import iconMess from "../assets/img/iconmess.png";
import iconZalo from "../assets/img/iconzalo.png";
import iconKakao from "../assets/img/iconTalk.png";
import iconNaver from "../assets/img/iconna.png";

export default function Consult() {
  const [activeTab, setActiveTab] = useState("sns");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://your-backend.com/api/contact", {
        type: activeTab,
        ...formData,
      });
      alert("✅ Gửi thành công!");
      console.log(res.data);
      setFormData({ name: "", email: "", phone: "", message: "", visitDate: "" });
    } catch (error) {
      console.error("❌ Lỗi gửi form:", error);
      alert("Gửi thất bại. Vui lòng thử lại.");
    }
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
        <h3 style={{ fontSize: 32, fontWeight: 700, marginBottom: 14 }}>
          상담 신청
        </h3>
        <div style={{ height: 1, background: "#d1d5db", marginBottom: 24 }}></div>

        {[
          { text: "메신저를 이용하여 실시간 채팅 상담", img: iconMess },
          { text: "카카오톡을 이용하여 실시간 채팅 상담", img: iconKakao },
          { text: "Zalo를 이용하여 실시간 채팅 상담", img: iconZalo },
          { text: "네이버톡을 이용하여 실시간 채팅 상담", img: iconNaver },
        ].map((item, i) => (
          <button
            key={i}
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
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#f3f4f6";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#fff";
            }}
          >
            <span>{item.text}</span>
            <img
              src={item.img}
              alt=""
              style={{ width: 30, height: 30, objectFit: "contain" }}
            />
          </button>
        ))}

        <div
          onClick={() => setChecked(!checked)}
          style={{
            fontSize: 18, color: "#111827", marginTop: 18,marginLeft:10, display: "flex", alignItems: "center", fontWeight: 500, cursor: "pointer", userSelect: "none",
          }}
        >
          <span
            style={{  display: "inline-block", width: 16,  height: 16,  border: "2px solid #111827", borderRadius: "50%", marginRight: 8, position: "relative", transition: "all 0.2s ease",
            }}
          >
            {checked && (
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 6,
                  height: 6,
                  backgroundColor: "#111827",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></span>
            )}
          </span>
          개인정보 수집 및 이용 동의
        </div>

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
      <div style={{ fontSize: 18, color: "#111827", lineHeight: 1.8 ,textAlign:"center"}}>
          <p>
            <strong>전화 걸기:</strong> (+82) 51-715-0607
          </p>
          <p>
            <strong>이메일 보내기:</strong> Onepass.kr@gmail.com
          </p>
          <p style={{ color: "#6b7280", fontSize: 16 }}>
            *이용 시간: 평일 09:00 ~ 18:00 (점심 12:00~13:00, 주말 공휴일 휴무)
          </p>
        </div>
      </div>
    </div>
  );


  const phoneForm = (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>전화 상담</h2>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>
        전화번호를 입력하고 상담 신청을 해주세요.
      </p>

      <input name="name" value={formData.name} onChange={handleChange} placeholder="이름" style={inputStyle} />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="전화번호" style={inputStyle} />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="상담 내용"
        style={{ ...inputStyle, height: 100 }}
      ></textarea>

      <button type="submit" style={buttonStyle}>
        <i className="fa-solid fa-phone" style={{ marginRight: 6 }}></i> 상담 신청
      </button>
    </form>
  );

  const emailForm = (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>이메일 상담</h2>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>이메일로 문의를 보내주세요.</p>

      <input name="name" value={formData.name} onChange={handleChange} placeholder="이름" style={inputStyle} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" style={inputStyle} />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="문의 내용"
        style={{ ...inputStyle, height: 100 }}
      ></textarea>

      <button type="submit" style={buttonStyle}>
        <i className="fa-solid fa-paper-plane" style={{ marginRight: 6 }}></i> 보내기
      </button>
    </form>
  );

  const visitForm = (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>방문 상담</h2>
      <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>
        방문 예약을 원하시면 아래 양식을 작성해주세요.
      </p>

      <input name="name" value={formData.name} onChange={handleChange} placeholder="이름" style={inputStyle} />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="전화번호" style={inputStyle} />
      <input type="date" name="visitDate" value={formData.visitDate} onChange={handleChange} style={inputStyle} />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="상담 목적"
        style={{ ...inputStyle, height: 100 }}
      ></textarea>

      <button type="submit" style={buttonStyle}>
        <i className="fa-solid fa-calendar-check" style={{ marginRight: 6 }}></i> 예약하기
      </button>
    </form>
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
        minHeight: "50vh",
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
                  onClick={() => setActiveTab(tab.id)}
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
