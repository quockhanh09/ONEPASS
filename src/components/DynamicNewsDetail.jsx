import MainIconBar from "./MainIconBar";
import certIcon from "../assets/img/s1icon.png";
import certActive from "../assets/img/s1-1icon.png";
import certHover from "../assets/img/s1-1icon.png";
import marriageIcon from "../assets/img/s2icon.png";
import marriageActive from "../assets/img/s2-2icon.png";
import marriageHover from "../assets/img/s2-2icon.png";
import birthIcon from "../assets/img/s3icon.png";
import birthActive from "../assets/img/s3-3icon.png";
import birthHover from "../assets/img/s3-3icon.png";
import travelHover from "../assets/img/s4-4icon.png";
import travelIcon from "../assets/img/s4icon.png";
import travelActive from "../assets/img/s4-4icon.png";
import idHover from "../assets/img/s5-5icon.png";
import idIcon from "../assets/img/s5icon.png";
import idActive from "../assets/img/s5-5icon.png";
import adoptionHover from "../assets/img/s6-6icon.png";
import adoptionIcon from "../assets/img/s6icon.png";
import adoptionActive from "../assets/img/s6-6icon.png";
import visaHover from "../assets/img/s7-7icon.png";
import visaIcon from "../assets/img/s7icon.png";
import visaActive from "../assets/img/s7-7icon.png";
import lawIcon from "../assets/img/s8icon.png";
import lawActive from "../assets/img/s8-8icon.png";
import lawHover from "../assets/img/s8-8icon.png";
import etcHover from "../assets/img/s9-9icon.png";
import etcIcon from "../assets/img/s9icon.png";
import etcActive from "../assets/img/s9-9icon.png";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useLanguage } from "../LanguageContext.jsx";
import heroBg from "../assets/img/herobanner-1.png";
import placeholder from "../assets/img/n19.png";
import n8 from "../assets/img/n19.png";
import { io } from "socket.io-client";
import zaloicon from "../assets/img/icons8-zalo-50.png"
import kakaotalk from "../assets/img/icons8-kakaotalk-48.png"
import messenger from "../assets/img/icons8-messenger-64.png"
import navertalk from "../assets/img/icon-navertalk.png"
export default function DynamicNewsDetail() {
  const { slug } = useParams();
  // Hàm chuyển tiêu đề thành slug
  const toSlug = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036F]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allNews, setAllNews] = useState([]);

  const fetchOne = useCallback(async () => {
    try {
      setLoading(true);
      // Lấy tất cả tin tức, bỏ giới hạn 20 tin mặc định
      const res = await axiosClient.get("/api/tintuc?limit=1000");
      let list = res?.data?.data || [];
      setAllNews(list);
      // Tìm theo slug
      const found = list.find((n) => toSlug(n.TieuDeVN || "") === slug);
      setItem(found || null);
    } catch (err) {
      console.error("❌ Lỗi lấy tin chi tiết:", err);
      setItem(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchOne();
  }, [fetchOne]);

  // useEffect(() => {
  //   const API_URL = import.meta.env.VITE_API_URL || "https://onepasscms-backend-tvdy.onrender.com";
  //   const socket = io(API_URL, { transports: ["websocket"] });
  //   socket.on("news-changed", (payload) => {
  //     // Nếu xóa tin có slug trùng
  //     if (payload?.action === "delete" && allNews.some(n => toSlug(n.TieuDeVN || "") === slug && String(n.ID) === String(payload.id))) {
  //       setItem(null);
  //     }
  //     fetchOne();
  //   });
  //   return () => socket.disconnect();
  // }, [fetchOne, slug, allNews]);

  const blocks = useMemo(() => {
    if (!item) return [];
    try {
      const parsed = JSON.parse(item.NoiDungVN || "[]");
      if (Array.isArray(parsed) && parsed.length) return parsed;
    } catch (e) {
      // ignore
    }
    // fallback single text block
    return [
      {
        id: 1,
        type: "text",
        contentVN: item.NoiDungVN || "",
        contentKR: item.NoiDungKR || "",
      },
    ];
  }, [item]);

  const heroImage = useMemo(() => {
    if (!item) return null;
    const imgBlock = blocks.find((b) => b.type === "image" && b.imageUrl);
    return imgBlock?.imageUrl || item.UrlHinhAnh || placeholder;
  }, [item, blocks]);

  const renderBlock = (block) => {
    switch (block.type) {
      case "image":
        return (
          <figure key={block.id} className="news-detail-block image" style={{ display: "flex", justifyContent: "center" }}>
            <img src={block.imageUrl || placeholder} alt={item?.TieuDeVN || "news"} style={{ maxWidth: "70%", height: "auto" }} />
          </figure>
        );
      case "quote":
        return (
          <blockquote key={block.id} className="news-detail-block quote">
            <div dangerouslySetInnerHTML={{ __html: language === "VI" ? block.contentVN : block.contentKR || block.contentVN }} />
            {block.quoteAuthor && <cite>{block.quoteAuthor}</cite>}
          </blockquote>
        );
      case "video":
        return (
          <div key={block.id} className="news-detail-block video">
            {block.videoUrl && (
              <iframe
                title={`video-${block.id}`}
                src={block.videoUrl.replace("watch?v=", "embed/")}
                allowFullScreen
              />
            )}
            {(block.contentVN || block.contentKR) && (
              <div className="caption" dangerouslySetInnerHTML={{ __html: language === "VI" ? block.contentVN : block.contentKR || block.contentVN }} />
            )}
          </div>
        );
      default:
        return (
          <div key={block.id} className="news-detail-block text" dangerouslySetInnerHTML={{ __html: language === "VI" ? block.contentVN : block.contentKR || block.contentVN }} />
        );
    }
  };

  const related = useMemo(() => {
    if (!item || !Array.isArray(allNews)) return [];
    return allNews.filter((n) => n.ID !== item.ID).slice(0, 3);
  }, [item, allNews]);

  if (loading) {
    return (
      <section className="news-detail" style={{ padding: "100px 16px", textAlign: "center" }}>
        {language === "VI" ? "Đang tải..." : "불러오는 중..."}
        {/* Share button */}
        <div style={{ marginTop: 32, textAlign: "right" }}>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              const msg = document.createElement("div");
              msg.innerText = language === "VI" ? "Đã sao chép link bài viết!" : "링크가 복사되었습니다!";
              msg.style.position = "fixed";
              msg.style.bottom = "40px";
              msg.style.right = "40px";
              msg.style.background = "#222";
              msg.style.color = "#fff";
              msg.style.padding = "12px 24px";
              msg.style.borderRadius = "8px";
              msg.style.fontSize = "16px";
              msg.style.zIndex = 9999;
              msg.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
              document.body.appendChild(msg);
              setTimeout(() => { msg.remove(); }, 1800);
            }}
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "10px 22px",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "background 0.2s"
            }}
          >
            {language === "VI" ? "Chia sẻ bài viết" : "공유하기"}
          </button>
        </div>
      </section>
    );
  }

  if (!item) {
    return (
      <section className="news-detail" style={{ padding: "100px 16px", textAlign: "center" }}>
        <p>{language === "VI" ? "Không tìm thấy bài viết." : "기사를 찾을 수 없습니다."}</p>
        <button
          style={{ marginTop: 12 }}
          onClick={() => navigate(-1)}
          className="news-detail-back"
        >
          {language === "VI" ? "Quay lại" : "뒤로"}
        </button>
      </section>
    );
  }

  return (
    <div className="news-detail-page" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header image section - added above hero section */}
      <table style={{ width: '100%', marginBottom: 0 }}>
        
      </table>
      {/* Hero section */}
      <section
        className="news-detail-hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "120px 0 80px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
          <h1 style={{ margin: 0, fontFamily: 'TrajanPro3, "Times New Roman", serif', color: "#fff", fontWeight: 700, fontSize: 64, letterSpacing: 1 }}>
            {language === "VI" ? "TIN TỨC" : "NEWSROOM"}
          </h1>
        </div>
      </section>

      {/* MainIconBar sát dưới hero */}
      <div style={{ maxWidth: 1200, margin: '0 auto', marginTop: 0, marginBottom: 30 }}>
        <MainIconBar
          language={language}
          services={[
            { icon: certIcon, hoverIcon: certHover, activeIcon: certActive, title: "영사확인, 공증" },
            { icon: marriageIcon, hoverIcon: marriageHover, activeIcon: marriageActive, title: "결혼 이민" },
            { icon: birthIcon, hoverIcon: birthHover, activeIcon: birthActive, title: "출생신고" },
            { icon: travelIcon, hoverIcon: travelHover, activeIcon: travelActive, title: "국적" },
            { icon: idIcon, hoverIcon: idHover, activeIcon: idActive, title: "여권 • 호적" },
            { icon: adoptionIcon, hoverIcon: adoptionHover, activeIcon: adoptionActive, title: "입양 • 자녀 인지" },
            { icon: visaIcon, hoverIcon: visaHover, activeIcon: visaActive, title: "비자 대행" },
            { icon: lawIcon, hoverIcon: lawHover, activeIcon: lawActive, title: "법률 컨설팅" },
            { icon: etcIcon, hoverIcon: etcHover, activeIcon: etcActive, title: "B2B 서비스" },
          ]}
        />
      </div>

      {/* Main 3-column layout */}
      {/* Responsive styles for main layout */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .news-detail-left-menu {
              margin-top: 32px;
            }
            @media (max-width: 900px) {
              .news-detail-main-layout {
                flex-direction: column !important;
                padding: 0 0 40px !important;
              }
              .news-detail-left, .news-detail-right {
                max-width: 100% !important;
                border: none !important;
                padding: 0 8px !important;
                min-height: unset !important;
              }
              .news-detail-left {
                margin-bottom: 24px !important;
              }
              .news-detail-hero-image img {
                width: 100% !important;
                max-width: 100vw !important;
              }
              .news-detail-right {
                margin-top: 32px !important;
              }
            }
            @media (max-width: 600px) {
              .news-detail-left-menu {
                margin-top: 18px !important;
              }
              .news-detail-hero {
                padding: 60px 0 40px !important;
              }
              .news-detail-main-layout {
                padding: 0 0 24px !important;
              }
              .news-detail-content {
                font-size: 15px !important;
              }
              .news-detail-hero-image img {
                width: 100% !important;
                border-radius: 8px !important;
              }
              .news-detail-hero h1 {
                font-size: 32px !important;
              }
              .news-detail-related h3 {
                font-size: 16px !important;
              }
              .news-detail-block.text {
                font-size: 15px !important;
              }
              .news-detail-left, .news-detail-right {
                padding: 0 2px !important;
              }
              .news-detail-left > div {
                width: 100% !important;
                min-width: 0 !important;
              }
              .news-detail-right {
                margin-top: 24px !important;
                max-width: 100% !important;
                border: none !important;
                padding: 0 2px !important;
              }
              .news-detail-related {
                padding-left: 24px !important;
                padding-right: 24px !important;
              }
              .news-detail-related > div {
                flex-direction: column !important;
                gap: 22px !important;
              }
              .news-detail-related > div > div {
                width: 100% !important;
                min-width: 0 !important;
                margin-bottom: 22px !important;
                padding: 0 !important;
                background: #fff !important;
                border-radius: 10px !important;
                box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
                overflow: hidden !important;
              }
              .news-detail-related img {
                width: 100% !important;
                max-width: 100% !important;
                height: 210px !important;
                max-height: 250px !important;
                object-fit: cover !important;
                border-radius: 0 !important;
                margin-bottom: 0 !important;
                display: block !important;
              }
              .news-detail-related h4 {
                margin: 10px 0 0 0 !important;
                font-size: 15px !important;
                line-height: 1.3 !important;
                font-weight: 700 !important;
              }
              .news-detail-related p {
                margin: 8px 0 0 0 !important;
                font-size: 13px !important;
                color: #444 !important;
              }
            }
          `
        }}
      />
      <div className="news-detail-main-layout" style={{ display: "flex", flex: 1, maxWidth: 1400, margin: "0 auto", width: "100%", padding: "32px 0 80px" }}>
        {/* Left: Menu */}
        <aside className="news-detail-left" style={{ flex: "0 0 220px", maxWidth: 240, padding: "0 16px", borderRight: "1px solid #eee", minHeight: 400 }}>
          <div style={{ position: "sticky", top: 40, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="news-detail-left-menu" style={{ width: "100%", display: "flex", flexDirection: "column", gap: 22, alignItems: "center" }}>
              <div style={{
                width: 200,
                background: 'linear-gradient(135deg, #e0f2fe 60%, #bae6fd 100%)',
                borderRadius: 20,
                boxShadow: '0 4px 16px rgba(34,197,246,0.10)',
                padding: '22px 0 18px 0',
                marginBottom: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Segoe UI, Arial, sans-serif',
              }}>
                <button
                  style={{
                    width: 180,
                    padding: '12px 5px',
                    background: '#fff',
                    color: '#2563eb',
                    border: 'none',
                    borderRadius: 14,
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 14,
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                    textTransform: 'uppercase',
                    textAlign: 'left',
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#2563eb'; }}
                  onClick={() => navigate('/news/전체 뉴스')}
                >
                  <span style={{fontSize:20,display:'flex',alignItems:'center'}}>📰</span> TẤT CẢ TIN TỨC
                </button>
                <button
                  style={{
                    width: 180,
                    padding: '12px 5px',
                    background: '#fff',
                    color: '#0ea5e9',
                    border: 'none',
                    borderRadius: 14,
                    fontWeight: 700,
                    fontSize: 16,
                    marginBottom: 14,
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                    boxShadow: '0 2px 8px rgba(14,165,233,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                    textTransform: 'uppercase',
                    textAlign: 'left',
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = '#0ea5e9'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0ea5e9'; }}
                  onClick={() => navigate('/news/기타')}
                >
                  <span style={{fontSize:20,display:'flex',alignItems:'center'}}>✍️</span> BÀI VIẾT
                </button>
                <button
                  style={{
                    width: 180,
                    padding: '12px 2px',
                    background: '#fff',
                    color: '#0891b2',
                    border: 'none',
                    borderRadius: 14,
                    fontWeight: 700,
                    fontSize: 16,
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                    boxShadow: '0 2px 8px rgba(8,145,178,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: 8,
                    textTransform: 'uppercase',
                    textAlign: 'left',
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = '#0891b2'; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0891b2'; }}
                  onClick={() => navigate('/news/대사관•총영사관 소식')}
                >
                  <span style={{fontSize:20,display:'flex',alignItems:'center'}}>🏛️</span> TIN TỨC LÃNH SỰ
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Center: Main content */}
        <main className="news-detail-center" style={{ flex: 1, minWidth: 0, padding: "0 32px" }}>
          {/* Header image section - moved to top of news detail */}
          
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#111827", margin: "0 0 18px" }}>
            {language === "VI" ? item.TieuDeVN : item.TieuDeKR || item.TieuDeVN}
          </h2>
          {item.NgayXuatBan && (
            <p style={{ fontSize: 15, color: "#6b7280", margin: "0 0 18px" }}>
              {new Date(item.NgayXuatBan).toLocaleDateString(language === "VI" ? "vi-VN" : "ko-KR")}
            </p>
          )}
          {/* Render text blocks before hero image */}
          {(() => {
            const firstImgIdx = blocks.findIndex((b) => b.type === "image" && b.imageUrl);
            const before = firstImgIdx >= 0 ? blocks.slice(0, firstImgIdx).filter((b) => b.type !== "image") : blocks.filter((b) => b.type !== "image");
            const after = firstImgIdx >= 0 ? blocks.slice(firstImgIdx + 1) : [];
            return (
              <>
                <div className="news-detail-content">
                  {before.map(renderBlock)}
                </div>
                {heroImage && (
                  <div className="news-detail-hero-image" style={{ margin: "24px 0", display: "flex", justifyContent: "center" }}>
                    <img
                      src={heroImage}
                      alt={item.TieuDeVN}
                      style={{ width: "60%", borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                    />
                  </div>
                )}
                <div className="news-detail-content">
                  {(firstImgIdx >= 0 ? after : []).map(renderBlock)}
                </div>
                {/* Contact & Social block - added at the end of news detail */}
                <div style={{ margin: '48px 0 0 0', background: 'linear-gradient(90deg, #5EA7C6 0%, #3D80A9 50%, #C4D39B 100%)', padding: '30px 20px 35px', textAlign: 'center', color: '#fff', borderRadius: 18 }}>
                  <img src="https://res.cloudinary.com/dldxuqann/image/upload/v1762789031/logo_uyzqbi.png" width="260" style={{ marginBottom: 20 }} alt="Logo" />
                  
                  {/* SOCIAL ICONS */}
                  <table cellSpacing="0" cellPadding="0" border="0" align="center" style={{ marginBottom: 35, marginLeft: 'auto', marginRight: 'auto' }}>
                    <tbody>
                      <tr>
                          <td style={{ padding: '0 12px' }}>
                          <a href="https://zalo.me/84395944818"><img src={zaloicon} width="42" style={{ display: 'block' }} alt="Facebook" /></a>
                        </td>
                        <td style={{ padding: '0 12px' }}>
                          <a href="https://www.messenger.com/t/803644846172440"><img src={messenger}width="32" style={{ display: 'block' }} alt="Facebook" /></a>
                        </td>
                        <td style={{ padding: '0 12px' }}>
                          <a href="https://pf.kakao.com/_BHALn"><img src={kakaotalk} width="32" style={{ display: 'block' }} alt="TikTok" /></a>
                        </td>
                        <td style={{ padding: '0 0px' }}>
                          <a href="talk.naver.com/W3OU8NH"><img src={navertalk} width="52" style={{ display: 'block' }} alt="YouTube" /></a>
                        </td>
                        <td style={{ padding: '0 12px' }}>
                          <a href="https://blog.naver.com/onepass_kr"><img src="https://res.cloudinary.com/da1olnwuu/image/upload/v1763360941/Nav_urbctg.png" width="32" style={{ display: 'block' }} alt="Naver" /></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ fontSize: 14, letterSpacing: 1 }}>ONE PASS INC. © all right reserve</p>
                  {/* CONSULTATION BUTTON */}
                  <table align="center" cellSpacing="0" cellPadding="0" border="0" style={{ marginTop: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                    <tbody>
                      <tr>
                        <td align="center" bgcolor="#ffffff" style={{ borderRadius: 999 }}>
                          <a href="http://pf.kakao.com/_BHALn/chat"
                            style={{ background: '#fff', color: '#A6CFBB', padding: '14px 38px', fontSize: 18, fontWeight: 700, borderRadius: 999, display: 'inline-block', textDecoration: 'underline', border: 'none', fontFamily: 'Arial, sans-serif' }}>
                            Liên hệ tư vấn
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            );
          })()}
          {/* Share button */}
          <div style={{ margin: "32px 0 0 0", textAlign: "right" }}>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                const msg = document.createElement("div");
                msg.innerText = language === "VI" ? "Đã sao chép link bài viết!" : "링크가 복사되었습니다!";
                msg.style.position = "fixed";
                msg.style.bottom = "40px";
                msg.style.right = "40px";
                msg.style.background = "#222";
                msg.style.color = "#fff";
                msg.style.padding = "12px 24px";
                msg.style.borderRadius = "8px";
                msg.style.fontSize = "16px";
                msg.style.zIndex = 9999;
                msg.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
                document.body.appendChild(msg);
                setTimeout(() => { msg.remove(); }, 1800);
              }}
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "10px 22px",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "background 0.2s"
              }}
            >
              {language === "VI" ? "Chia sẻ bài viết" : "공유하기"}
            </button>
          </div>
        </main>

        {/* Right: Related news */}
        <aside className="news-detail-right" style={{ flex: "0 0 320px", maxWidth: 340, padding: "0 16px", borderLeft: "1px solid #eee", minHeight: 400 }}>
          {related.length > 0 && (
            <div className="news-detail-related" style={{ marginTop: 0 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16, color: "#222" }}>
                {language === "VI" ? "Tin tức liên quan" : "관련 소식"}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {related.map((r) => {
                  let thumb = r.UrlHinhAnh || n8;
                  try {
                    const blocks = JSON.parse(r.NoiDungVN || "[]");
                    const imgBlock = Array.isArray(blocks) && blocks.find((b) => b.type === "image" && b.imageUrl);
                    if (imgBlock) thumb = imgBlock.imageUrl;
                  } catch {}
                  return (
                    <div key={r.ID} style={{ cursor: "pointer", marginBottom: 8 }} onClick={() => navigate(`/news/${toSlug(r.TieuDeVN || "")}`)}>
                      <img src={thumb} alt={r.TieuDeVN} style={{ width: "100%", borderRadius: 8, marginBottom: 8, height: 90, objectFit: "cover" }} />
                      <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
                        {r.NgayXuatBan ? new Date(r.NgayXuatBan).toLocaleDateString(language === "VI" ? "vi-VN" : "ko-KR") : ""}
                      </p>
                      <h4 style={{ fontSize: 14, fontWeight: 700, margin: "4px 0" }}>
                        {language === "VI" ? r.TieuDeVN : r.TieuDeKR || r.TieuDeVN}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
