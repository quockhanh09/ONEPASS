import axiosClient from "../axiosClient";
import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n4 from "../assets/img/N4.png"
import n5 from "../assets/img/n5.png"
import n8 from "../assets/img/n19.png";
import heroBg from "../assets/img/herobanner-1.png";
import fbIcon from "../assets/img/image20.png";
import kakaotalkIcon from "../assets/img/image17.png";
import zaloIcon from "../assets/img/image18.png";
import naverIcon from "../assets/img/image19.png";

import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import { useState, useEffect, useMemo } from "react";
import { io } from "socket.io-client";
export default function AllNewsPage() {
    const [activeId, setActiveId] = useState(null);
    const [hoverId, setHoverId] = useState(null);
    const effectiveId = hoverId ?? activeId;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
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

    // News from API
    const [newsItems, setNewsItems] = useState([]);
    const [newsLoading, setNewsLoading] = useState(false);

    const fetchNews = async () => {
        try {
            setNewsLoading(true);
            const res = await axiosClient.get("/api/tintuc");
            const data = res?.data?.data;
            if (Array.isArray(data)) {
                setNewsItems(data);
            } else {
                setNewsItems([]);
            }
        } catch (err) {
            console.error("❌ Lỗi lấy tin tức:", err);
            setNewsItems([]);
        } finally {
            setNewsLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
        const API_URL = import.meta.env.VITE_API_URL || "https://onepasscms-backend-tvdy.onrender.com";
        const socket = io(API_URL, { transports: ["websocket"] });
        socket.on("news-changed", () => fetchNews());
        return () => socket.disconnect();
    }, []);

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

    const getImage = (item) => {
        if (!item) return null;
        try {
            const blocks = JSON.parse(item.NoiDungVN || "[]");
            if (Array.isArray(blocks)) {
                const imgBlock = blocks.find((b) => b.type === "image" && b.imageUrl);
                if (imgBlock) return imgBlock.imageUrl;
            }
        } catch (e) {
            // ignore
        }
        return item.UrlHinhAnh || null;
    };

    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

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

    const filteredNews = useMemo(() => {
        if (currentPath === "/news/대사관•총영사관 소식") {
            return newsItems.filter((item) => item.DanhMuc === "대사관•총영사관 소식");
        }
        if (currentPath === "/news/기타") {
            return newsItems.filter((item) => item.DanhMuc === "기타");
        }
        return newsItems;
    }, [currentPath, newsItems]);

    // Pagination calculation
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = filteredNews.slice(startIndex, endIndex);

    // Reset to page 1 when switching categories
    useEffect(() => {
        setCurrentPage(1);
    }, [currentPath]);

    const headingText = useMemo(() => {
        if (currentPath === "/news/대사관•총영사관 소식") {
            return language === "VI" ? "Tin tức Đại sứ / Lãnh sự quán" : "대사관•총영사관 소식";
        }
        if (currentPath === "/news/기타") {
            return language === "VI" ? "Bài viết" : "기타";
        }
        return language === "VI" ? "Tất cả tin tức" : "전체 뉴스";
    }, [currentPath, language]);

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
              TenHinhThuc: null, 
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
                    <h1 style={{ fontFamily: 'TrajanPro3, "Times New Roman", serif', color: "#ffffffff", fontWeight: 700, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
                        {language === "VI" ? "TIN TỨC" : "NEWSROOM"}
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

                        <div style={{ display: "flex", gap: 24 }}>
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

                            {/* Bài viết */}
                            <span
                                onClick={() => navigate("/news/기타")}
                                style={{
                                    fontWeight:
                                        currentPath === "/news/기타" ? 700 : 400,
                                    color:
                                        currentPath === "/news/기타"
                                            ? "#111827"
                                            : "#6b7280",
                                    borderBottom:
                                        currentPath === "/news/기타"
                                            ? "2px solid #111827"
                                            : "none",
                                    paddingBottom:
                                        currentPath === "/news/기타" ? 4 : 0,
                                    cursor: "pointer",
                                }}
                            >
                                {language === "VI" ? "Bài viết" : "기타"}
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
                                placeholder={language === "VI" ? "Nhập từ khóa tìm kiếm" : "Search keywords"}
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
                        {headingText}
                    </h2>

                    {/* News Grid */}
                    <div
                        style={{
                            display: "grid",
                                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                                gap: 24,
                        }}
                    >
                        {newsLoading && (
                            <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "#6b7280", padding: "40px 0" }}>
                                {language === "VI" ? "Đang tải tin tức..." : "뉴스를 불러오는 중입니다..."}
                            </div>
                        )}
                        {!newsLoading && currentNews.map((item) => {
                            const imgSrc = getImage(item) || n8;
                            return (
                                <div
                                    key={item.ID}
                                    onClick={() => navigate(`/news/${item.ID}`)}
                                    style={{
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
                                                    borderRadius: 16,
                                                }}
                                            />
                                        </div>
                                        <div style={{ padding: "12px 14px", borderTop: "none", flex: 1, display: "flex", flexDirection: "column" }}>
                                            <p style={{ fontSize: 11, color: "#666", marginBottom: 4, marginLeft: "0px", letterSpacing: "0.08em", textTransform: "capitalize" }}>
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
                        {!newsLoading && filteredNews.length === 0 && (
                            <div style={{ gridColumn: "1 / -1", textAlign: "center", color: "#6b7280", padding: "40px 0" }}>
                                {language === "VI" ? "Chưa có tin tức." : "등록된 뉴스가 없습니다."}
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 0 && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 40,
                                gap: 10,
                            }}
                        >
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    style={{
                                        border: "none",
                                        background: pageNum === currentPage ? "#111827" : "transparent",
                                        color: pageNum === currentPage ? "#fff" : "#6b7280",
                                        borderRadius: 4,
                                        padding: "4px 8px",
                                        cursor: "pointer",
                                        minWidth: 32,
                                        fontSize: 14,
                                    }}
                                >
                                    {pageNum}
                                </button>
                            ))}
                        </div>
                    )}
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
