import React, { useState } from "react";
import axios from "axios";

import heroBg from "../assets/img/herobanner-1.png";

export default function Consult() {
    const [activeTab, setActiveTab] = useState("sns");
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
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 60,
      gap: 60,
    }}
  >
    {/* Left */}
    <div style={{ flex: 1, minWidth: 320, maxWidth: 420 }}>
      <h3 style={{ color: "#1d4ed8", fontWeight: 600, fontSize: 15, marginBottom: 12 }}>
        SNS 채팅 상담
      </h3>
      <h2 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.5, marginBottom: 12 }}>
        언제 어디서나, 가장 편한 방법으로<br />정확한 해결책을 만나보세요.
      </h2>
      <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8 }}>
        실시간 채팅으로 상담사와 빠르게 연결하여 언제든 어디서든 간편하게<br />
        무료상담을 받을 수 있습니다.
      </p>
    </div>

    {/* Right */}
    <div
      style={{
        flex: 1,
        minWidth: 340,
        maxWidth: 400,
        background: "#f9fafb",
        padding: "36px 32px",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>상담 신청</h3>
      <div style={{ height: 1, background: "#e5e7eb", marginBottom: 20 }}></div>

      {[
        {
          text: "메신저를 이용하여 실시간 채팅 상담",
          img: "https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Messenger_4_Logo.svg",
        },
        {
          text: "카카오톡을 이용하여 실시간 채팅 상담",
          img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/KakaoTalk_logo.svg",
        },
        {
          text: "Zalo를 이용하여 실시간 채팅 상담",
          img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg",
        },
        {
          text: "네이버톡을 이용하여 실시간 채팅 상담",
          img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Naver_Line_icon.svg",
        },
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
            borderRadius: 40,
            padding: "10px 18px",
            marginBottom: 12,
            cursor: "pointer",
            fontSize: 14,
            color: "#374151",
            fontWeight: 500,
          }}
        >
          <span>{item.text}</span>
          <img
            src={item.img}
            alt=""
            style={{ width: 22, height: 22, objectFit: "contain" }}
          />
        </button>
      ))}

      <div
        style={{
          fontSize: 13,
          color: "#374151",
          marginTop: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        <i
          className="fa-solid fa-circle"
          style={{ fontSize: 8, marginRight: 8, color: "#111827" }}
        ></i>
        개인정보 수집 및 이용 동의
      </div>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "24px 0",
        }}
      >
        <div style={{ flex: 1, height: 1, background: "#e5e7eb" }}></div>
        <span style={{ margin: "0 10px", color: "#9ca3af", fontSize: 13 }}>or</span>
        <div style={{ flex: 1, height: 1, background: "#e5e7eb" }}></div>
      </div>

      {/* Contact info */}
      <div style={{ fontSize: 14, color: "#111827", lineHeight: 1.8 }}>
        <p>
          <strong>전화 걸기:</strong> (+82) 51-715-0607
        </p>
        <p>
          <strong>이메일 보내기:</strong> Onepass.kr@gmail.com
        </p>
        <p style={{ color: "#6b7280", fontSize: 12, marginTop: 6 }}>
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
