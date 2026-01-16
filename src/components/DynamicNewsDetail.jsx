import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useLanguage } from "../LanguageContext.jsx";
import heroBg from "../assets/img/herobanner-1.png";
import placeholder from "../assets/img/n19.png";
import n8 from "../assets/img/n19.png";
import { io } from "socket.io-client";

export default function DynamicNewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allNews, setAllNews] = useState([]);

  const fetchOne = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosClient.get("/api/tintuc");
      const list = res?.data?.data || [];
      setAllNews(list);
      const found = list.find((n) => String(n.ID) === String(id));
      setItem(found || null);
    } catch (err) {
      console.error("❌ Lỗi lấy tin chi tiết:", err);
      setItem(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOne();
  }, [fetchOne]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "https://onepasscms-backend-tvdy.onrender.com";
    const socket = io(API_URL, { transports: ["websocket"] });
    socket.on("news-changed", (payload) => {
      if (payload?.action === "delete" && String(payload.id) === String(id)) {
        setItem(null);
      }
      fetchOne();
    });
    return () => socket.disconnect();
  }, [fetchOne, id]);

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
    <div className="news-detail-page">
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

      <section className="news-detail-body" style={{ maxWidth: 1250, margin: "0 auto", padding: "32px 16px 80px" }}>
        {/* Title below hero */}
        <h2 style={{ fontSize: 32, fontWeight: 700, color: "#111827", margin: "0 0 18px" }}>
          {language === "VI" ? item.TieuDeVN : item.TieuDeKR || item.TieuDeVN}
        </h2>
        {/* Optional date */}
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
            </>
          );
        })()}

        {related.length > 0 && (
          <div className="news-detail-related" style={{ marginTop: 40 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>
              {language === "VI" ? "Tin tức liên quan" : "관련 소식"}
            </h3>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {related.map((r) => {
                let thumb = r.UrlHinhAnh || n8;
                try {
                  const blocks = JSON.parse(r.NoiDungVN || "[]");
                  const imgBlock = Array.isArray(blocks) && blocks.find((b) => b.type === "image" && b.imageUrl);
                  if (imgBlock) thumb = imgBlock.imageUrl;
                } catch {}
                return (
                  <div key={r.ID} style={{ flex: "1 1 30%", minWidth: 240, cursor: "pointer" }} onClick={() => navigate(`/news/${r.ID}`)}>
                    <img src={thumb} alt={r.TieuDeVN} style={{ width: "100%", borderRadius: 8, marginBottom: 8, height: 140, objectFit: "cover" }} />
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
      </section>
    </div>
  );
}
