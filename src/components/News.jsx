import { useLanguage } from "../LanguageContext.jsx";

import { useState, useEffect, useRef } from "react";
import axiosClient from "../axiosClient";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
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
import n8 from "../assets/img/n19.png"
import fbIcon from "../assets/img/image20.png";
import iconMess from "../assets/img/iconmess.png";
import kakaotalkIcon from "../assets/img/image17.png";
import zaloIcon from "../assets/img/image18.png";
import naverIcon from "../assets/img/image19.png";
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

function toSlug(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036F]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function Introduction() {
  const [activeId, setActiveId] = useState(null);
    const [hoverId, setHoverId] = useState(null);
    const effectiveId = hoverId ?? activeId;
    const items = [
      { id: 0, name: "Messenger", icon: iconMess, link: "http://m.me/803644846172440" },
      { id: 1, name: "페이스북", icon: fbIcon, link: "https://www.facebook.com/profile.php?id=61581863960708" },
      { id: 2, name: "카카오톡", icon: kakaotalkIcon, link: "https://pf.kakao.com/_BHALn" },
      { id: 3, name: "Zalo", icon: zaloIcon, link: "https://zalo.me/0395944818" },
      { id: 4, name: "네이버", icon: naverIcon, link: "https://blog.naver.com/onepass_kr" },
    ];
  
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });

  // News from OnePassCMS backend
  const [newsItems, setNewsItems] = useState([]);
  const [newsLoading, setNewsLoading] = useState(false);

  // Sau khi lấy dữ liệu tin tức từ backend, thêm slug cho từng item
const fetchNews = async () => {
  try {
    setNewsLoading(true);
    const res = await axiosClient.get("/api/tintuc");
    const data = res?.data?.data || [];
    // Thêm slug cho từng item
    const withSlug = data.map(item => ({
      ...item,
      slug: toSlug(item.TieuDeVN || "")
    }));
    setNewsItems(withSlug);
  } catch (err) {
    setNewsItems([]);
  } finally {
    setNewsLoading(false);
  }
};

  useEffect(() => {
    fetchNews();
  }, []);

  // Filtered consulate news
  const consulateNewsItems = newsItems.filter(item => item.DanhMuc === "대사관•총영사관 소식").slice(0, 6);
  const articleNewsItems = newsItems.filter(item => item.DanhMuc === "기타").slice(0, 6);

  const getTitle = (item) => {
    if (language === "VI") return item?.TieuDeVN || "";
    return item?.TieuDeKR || item?.TieuDeVN || "";
  };

const stripHtmlTags = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };

    const getSummary = (item) => {
        if (!item) return "";
        try {
            const blocks = JSON.parse(item.NoiDungVN || "[]");
            if (Array.isArray(blocks) && blocks.length > 0) {
                const textBlocks = blocks.filter((b) => ["text", "quote", "video"].includes(b.type));
                const summaryVN = textBlocks.map((b) => stripHtmlTags(b.contentVN || "")).join(" ");
                const summaryKR = textBlocks.map((b) => stripHtmlTags(b.contentKR || "")).join(" ");
                const text = language === "VI" ? summaryVN : summaryKR || summaryVN;
                return text?.substring(0, 140) + (text?.length > 140 ? "..." : "");
            }
        } catch (e) {
            // fall back below
        }
        const fallback = language === "VI" ? item.NoiDungVN : item.NoiDungKR || item.NoiDungVN;
        return fallback ? stripHtmlTags(fallback).substring(0, 140) + (stripHtmlTags(fallback).length > 140 ? "..." : "") : "";
  };

  // Luôn ưu tiên lấy ảnh đại diện (UrlHinhAnh) nếu có
  const getImage = (item) => {
    if (!item) return null;
    if (item.UrlHinhAnh) return item.UrlHinhAnh;
    try {
      const blocks = JSON.parse(item.NoiDungVN || "[]");
      if (Array.isArray(blocks)) {
        const imgBlock = blocks.find((b) => b.type === "image" && b.imageUrl);
        if (imgBlock) return imgBlock.imageUrl;
      }
    } catch (e) {
      // ignore
    }
    return null;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    return d.toLocaleDateString(language === "VI" ? "vi-VN" : "ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const formatDateTimeRich = (dateString) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    const hours = d.getHours();
    const hh = String(hours).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    if (language === "VI") {
      const period = hours < 12 ? "Sáng" : "Chiều";
      return `${hh}:00 ${period} | Ngày ${day} tháng ${month} năm ${year}`;
    }
    const period = hours < 12 ? "오전" : "오후";
    return `${period} ${hh}:00 | ${year}년 ${month}월 ${day}일`;
  };

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


  const [selected, setSelected] = useState(0);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "https://onepasscms-backend-tvdy.onrender.com";
    const socket = io(API_URL, { transports: ["websocket"] });
    socket.on("news-changed", () => {
      fetchNews();
    });
    return () => socket.disconnect();
  }, []);
  return (
    <>
      {/* PHẦN GIỚI THIỆU */}
      <section className=""
       style={{
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
          <h1 style={{ fontFamily: 'TrajanPro3, "Times New Roman", serif', color: "#ffffffff", fontWeight: 700, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            {language === "VI" ? (<>TIN TỨC</>) : ("NEWSROOM")}
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
          transform: translateY(35%);
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
        </div>
        {/* Main content row */}
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

      <section className="news-top" style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div className="news-top-header" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30
          }}>
            <h2><a href="/news/전체 뉴스" style={{ fontSize: 24, fontWeight: 700, color: "#384D8D", textDecoration: "none" }} >
            {language === "VI" ? (<>Tất cả tin tức</>) : ("전체 뉴스")}</a>
            </h2>
            <a href="/news/전체 뉴스" style={{ fontSize: 15, color: "#384D8D", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
             {language === "VI" ? (<>Xem thêm →</>) : (" 더보기 →")}
            </a>
          </div>

          {/* News Cards */}
          <div className="news-top-card" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 24
          }}>
            {newsLoading && (
              <div style={{ flex: "1 1 100%", textAlign: "center", color: "#6b7280" }}>
                {language === "VI" ? "Đang tải tin tức..." : "뉴스를 불러오는 중입니다..."}
              </div>
            )}
            {!newsLoading && newsItems.slice(0, 6).map((item) => {
              const imgSrc = getImage(item) || n8;
              return (
                <div
                  key={item.ID}
                  onClick={() => item.slug && navigate(`/news/${item.slug}`)}
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    background: "#fff",
                    borderRadius: 16,
                    overflow: "hidden",
                    gap: 0,
                  }}
                >
                  <div style={{ height: 180, width: "100%", overflow: "hidden", flexShrink: 0 }}>
                    <img
                      src={imgSrc}
                      alt={getTitle(item)}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 16 }}
                    />
                  </div>
                  <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
                    <p style={{ fontSize: 11, color: "#6b7280", margin: 0, letterSpacing: "0.02em" }}>
                      {formatDateTimeRich(item.NgayXuatBan)}
                    </p>
                    <h3
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#111827",
                        margin: 0,
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {getTitle(item)}
                    </h3>
                    <p
                      style={{
                        fontSize: 12,
                        color: "#374151",
                        lineHeight: 1.5,
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {getSummary(item)}
                    </p>
                  </div>
                </div>
              );
            })}
            {!newsLoading && newsItems.length === 0 && (
              <div style={{ flex: "1 1 100%", textAlign: "center", color: "#6b7280" }}>
                {language === "VI" ? "Chưa có tin tức." : "등록된 뉴스가 없습니다."}
              </div>
            )}
          </div>
        </div>
        <style>
          {`
            @media (max-width: 768px) {
  .news-top {
    padding: 40px 16px !important;
  }

  .news-top-header {
    margin-bottom: 20px !important;
  }

  .news-top-card {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    gap: 16px !important;
    scroll-snap-type: x mandatory !important;
    -webkit-overflow-scrolling: touch !important;
    padding-bottom: 10px !important;
  }

  /* Ẩn thanh cuộn ngang */
  .news-top-card::-webkit-scrollbar {
    display: none;
  }

  /* Mỗi card chiếm ~85% chiều rộng màn hình */
  .news-top-card > div {
    flex: 0 0 85% !important;
    scroll-snap-align: start !important;
    background: #fff;
    border-radius: 8px;
  }

  .news-top-card img {
    width: 100% !important;
    height: 160px !important;
    object-fit: cover !important;
    border-radius: 8px !important;
    margin-bottom: 10px !important;
  }

  .news-top-card h3 {
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #111827 !important;
    margin-bottom: 6px !important;
  }

  .news-top-card p {
    font-size: 13px !important;
    line-height: 1.6 !important;
  }

  .news-top-card p:first-of-type {
    font-size: 12px !important;
    color: #6b7280 !important;
  }
}
          
          `}
        </style>
      </section>
<section className="news-top" style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="news-top-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <h2>
              <a
                href="/news/기타"
                style={{ fontSize: 24, fontWeight: 700, color: "#384D8D", textDecoration: "none" }}
              >
                {language === "VI" ? "Bài viết" : "게시물"}
              </a>
            </h2>
            <a
              href="/news/기타"
              style={{
                fontSize: 15,
                color: "#384D8D",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              {language === "VI" ? "Xem thêm →" : " 더보기 →"}
            </a>
          </div>

          <div
            className="news-top-card"
            style={{
              display: "flex",
              gap: 30,
              flexWrap: "wrap",
            }}
          >
            {newsLoading && (
              <div style={{ flex: "1 1 100%", textAlign: "center", color: "#6b7280" }}>
                {language === "VI" ? "Đang tải tin tức..." : "뉴스를 불러오는 중입니다..."}
              </div>
            )}
            {!newsLoading && articleNewsItems.map((item) => {
              const imgSrc = getImage(item) || n1;
              return (
                <div
                  key={item.ID}
                  onClick={() => item.slug && navigate(`/news/${item.slug}`)}
                  style={{
                    width: 380,
                    flexShrink: 0,
                    cursor: "pointer",
                    borderRadius: "16px",
                    padding: "0",
                    background: "#fff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ background: "#fff", borderRadius: "0", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ height: 180, width: "100%", overflow: "hidden", display: "block", flexShrink: 0 }}>
                      <img
                        src={imgSrc}
                        alt={getTitle(item)}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                    <div style={{ padding: "12px 14px", borderTop: "none", flex: 1, display: "flex", flexDirection: "column" }}>
                      <p style={{ fontSize: 11, color: "#666", margin: "4px 0", marginLeft: "0px", letterSpacing: "0.08em", textTransform: "capitalize" }}>
                        {formatDateTimeRich(item.NgayXuatBan)}
                      </p>
                      <h3
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#000",
                          marginBottom: 6,
                          marginLeft: "0px",
                          textTransform: "none",
                          lineHeight: 1.4,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {getTitle(item)}
                      </h3>
                      <p style={{ fontSize: 12, color: "#666", lineHeight: 1.5, marginLeft: "0px", marginBottom: "8px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {getSummary(item)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {!newsLoading && articleNewsItems.length === 0 && (
              <div style={{ flex: "1 1 100%", textAlign: "center", color: "#6b7280" }}>
                {language === "VI" ? "Chưa có bài viết." : "기타 카테고리 게시글이 없습니다."}
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="news-top" style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div className="news-top-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <h2><a href="/news/대사관•총영사관 소식" style={{ fontSize: 24, fontWeight: 700, color: "#384D8D", textDecoration: "none" }} >{language === "VI" ? (<>Tin tức Đại sứ / Lãnh sự quán</>) : ("대사관•총영사관 소식")}</a></h2>
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
               {language === "VI" ? (<>Xem thêm →</>) : (" 더보기 →")}
            </a>
          </div>

          {/* News Cards */}
          <div className="news-top-card"
            style={{
              display: "flex",
              gap: 30,
              flexWrap: "wrap",

            }}
          >
            {newsLoading && (
              <div style={{ flex: "1 1 100%", textAlign: "center", color: "#6b7280" }}>
                {language === "VI" ? "Đang tải tin tức..." : "뉴스를 불러오는 중입니다..."}
              </div>
            )}
            {!newsLoading && consulateNewsItems.map((item) => {
              const imgSrc = getImage(item) || n4;
              return (
                <div
                  key={item.ID}
                  onClick={() => item.slug && navigate(`/news/${item.slug}`)}
                  style={{
                    width: 380,
                    flexShrink: 0,
                    cursor: "pointer",
                    borderRadius: "16px",
                    padding: "0",
                    background: "#fff",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ background: "#fff", borderRadius: "0", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ height: 180, width: "100%", overflow: "hidden", display: "block", flexShrink: 0 }}>
                      <img
                        src={imgSrc}
                        alt={getTitle(item)}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                    <div style={{ padding: "12px 14px", borderTop: "none", flex: 1, display: "flex", flexDirection: "column" }}>
                      <p style={{ fontSize: 11, color: "#666", margin: "4px 0", marginLeft: "0px", letterSpacing: "0.08em", textTransform: "capitalize" }}>
                        {formatDateTimeRich(item.NgayXuatBan)}
                      </p>
                      <h3
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#000",
                          marginBottom: 6,
                          marginLeft: "0px",
                          textTransform: "none",
                          lineHeight: 1.4,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {getTitle(item)}
                      </h3>
                      <p style={{ fontSize: 12, color: "#666", lineHeight: 1.5, marginLeft: "0px", marginBottom: "8px", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {getSummary(item)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {!newsLoading && consulateNewsItems.length === 0 && (
              <div style={{ flex: "1 1 100%", textAlign: "center", color: "#6b7280" }}>
                {language === "VI" ? "Chưa có tin tức Đại sứ / Lãnh sự quán." : "대사관•총영사관 소식이 없습니다."}
              </div>
            )}
          </div>
        </div>
      </section>

      

      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div className="Calendar-main" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>

          {/* LEFT: Calendar */}
          <div className="Calendar-title" style={{ flex: "0 0 45%" }}>
            <h2 className="Calendar-title-h2" style={{ fontSize: 22, fontWeight: 700, color: "#1e3a8a", marginBottom: 20 }}>
               {language === "VI" ? (<>Lịch làm việc</>) : ("업무 일정 (휴일 일정)")}
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
              <div className="Calendar-title-Styled" style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-start', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#0b1220', lineHeight: 1 }}>{calendarDate.getMonth() + 1}</div>
                  <div style={{ fontSize: 16, color: '#6b7280', fontWeight: 600, lineHeight: 1, transform: 'translateY(1px)' }}>▾</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#0b1220', lineHeight: 1 }}>{calendarDate.getFullYear()}</div>
                  <div style={{ fontSize: 16, color: '#6b7280', fontWeight: 600, lineHeight: 1, transform: 'translateY(1px)' }}>▾</div>
                </div>
              </div>

              <div className="Calendar-title-date"  style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 56px)', gap: 6, justifyContent: 'center', marginBottom: 12 }}>
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
        <style>
                 {`
                  
                  /* ----- Responsive cho mobile (không ảnh hưởng web chính) ----- */
  @media (max-width: 768px) {
    .Calendar-main {
      flex-direction: column !important;
      align-items: center !important;
      gap: 40px !important;
      padding: 0 16px !important;
    }

    .Calendar-title {
      flex: none !important;
      width: 100% !important;
    }

    .Calendar-title-h2 {
      font-size: 20px !important;
      text-align: center !important;
      margin-bottom: 16px !important;
    }

    .Calendar-title-Styled {
      justify-content: center !important;
    }

    .Calendar-title-date {
      grid-template-columns: repeat(7, 1fr) !important;
      gap: 4px !important;
    }

    /* Các ô ngày trong lịch */
    .Calendar-title-date div {
      font-size: 12px !important;
    }

    /* Ô ngày (grid chính) */
    .Calendar-title + div > div {
      width: 44px !important;
      height: 44px !important;
      font-size: 14px !important;
    }

    section {
      padding: 40px 0 !important;
    }
  }
@media (max-width: 400px) {
  .Calendar-title {
    width: 100% !important;
  }

  .Calendar-title-h2 {
    font-size: 18px !important;
  }

  /* Khối lịch chính */
  .Calendar-title > div {
    padding: 12px !important;
  }

  /* Tên ngày (일, 월, 화...) */
  .Calendar-title-date div {
    font-size: 11px !important;
  }

  /* Grid ngày */
  .Calendar-title + div {
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 4px !important;
    justify-content: space-between !important;
  }

  /* Ô ngày */
  .Calendar-title + div > div {
    width: 38px !important;
    height: 38px !important;
    font-size: 13px !important;
    border-radius: 8px !important;
  }
}

/* ----- Responsive cho màn hình 370px ----- */
@media (max-width: 370px) {
  .Calendar-title-h2 {
    font-size: 16px !important;
  }

  .Calendar-title-date div {
    font-size: 10px !important;
  }

  .Calendar-title + div {
    gap: 3px !important;
  }

  .Calendar-title + div > div {
    width: 34px !important;
    height: 34px !important;
    font-size: 12px !important;
    border-radius: 6px !important;
  }

  .Calendar-title > div {
    padding: 10px !important;
  }
}
@media (max-width: 400px) {
  .Calendar-title {
    width: 100% !important;
    box-sizing: border-box !important;
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .Calendar-title-h2 {
    font-size: 18px !important;
    text-align: center !important;
    margin-bottom: 12px !important;
  }

  /* khung chứa lịch (hộp trắng) */
  .Calendar-title > div {
    width: 100% !important;
    max-width: 100% !important;
    padding: 10px 12px !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;
    border-radius: 14px !important;
  }

  /* hàng tiêu đề ngày (일, 월...) */
  .Calendar-title-date {
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 4px !important;
    justify-items: center !important;
    margin-bottom: 8px !important;
  }
  .Calendar-title-date div {
    font-size: 11px !important;
    width: 100% !important;
    text-align: center !important;
  }

  /* grid chứa các ô ngày: chọn phần tử con cuối cùng trong khung lịch */
  .Calendar-title > div > div:last-child {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    gap: 6px !important;
    justify-content: center !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* từng ô ngày */
  .Calendar-title > div > div:last-child > div {
    width: 100% !important;       /* cho co giãn theo 1fr */
    max-width: 44px !important;   /* giới hạn chiều ngang ô */
    height: 44px !important;
    box-sizing: border-box !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 13px !important;
    border-radius: 8px !important;
    margin: 0 auto !important;
  }

  /* nền và chữ cho ngày hôm nay / ngày chọn (giữ nguyên màu hiện tại bằng inline styles) */
  .Calendar-title > div > div:last-child > div[style*="background"] {
    /* đảm bảo ô ngày hôm nay không bị co kéo bất thường */
    min-width: 36px !important;
    min-height: 36px !important;
    display: inline-flex !important;
  }

  /* tránh overflow dọc */
  .Calendar-title > div, .Calendar-title > div > div:last-child {
    overflow: hidden !important;
  }
}

/* thêm một bước co nhỏ nữa cho <=370px */
@media (max-width: 370px) {
  .Calendar-title-h2 {
    font-size: 16px !important;
  }

  .Calendar-title > div {
    padding: 8px 10px !important;
    border-radius: 12px !important;
  }

  .Calendar-title-date div {
    font-size: 10px !important;
  }

  .Calendar-title > div > div:last-child {
    gap: 4px !important;
  }

  .Calendar-title > div > div:last-child > div {
    max-width: 40px !important;
    height: 40px !important;
    font-size: 12px !important;
    border-radius: 6px !important;
  }
}

/* tiny helper: khi box trắng quá rộng, giữ max-width để không chạm sát mép màn */
@media (max-width: 420px) {
  .Calendar-title > div {
    max-width: 420px !important;
  }
}
Những điểm chính mình
  
                 `}

                </style>
      </section>
    </>
  );
}

export default Introduction;
