import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n4 from "../assets/img/N4.png";
import n5 from "../assets/img/n5.png";
import heroBg from "../assets/img/herobanner-1.png";
import { useNavigate, useLocation } from "react-router-dom";
export default function ConsulateNews() {


    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;
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
                    <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
                        NEWSROOM
                    </h1>
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
                                전체 뉴스
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
                                대사관·총영사관 소식
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
                                placeholder="검색어를 입력하세요"
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
                        대사관•총영사관 소식
                    </h2>

                    {/* News Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                            gap: 32,
                        }}
                    >
                        {/* 1 */}


                        {/* 4 */}
                        <div>
                            <img
                                src={n4}
                                alt="국경일 행사"
                                style={{
                                    width: "100%",
                                    borderRadius: 8,
                                    marginBottom: 12,
                                    objectFit: "cover",
                                }}
                            />
                            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                2025년 09월 27일 | 오전 09:00
                            </p>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: 8,
                                }}
                            >
                                주부산 베트남 총영사관 공식 개소: 한-베트남 관계 강화
                            </h3>
                            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며, 한-베트남 관계, 동남아 협력 등...
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

                        {/* 5 */}
                        <div>
                            <img
                                src={n5}
                                alt="문화 행사"
                                style={{
                                    width: "100%",
                                    borderRadius: 8,
                                    marginBottom: 12,
                                    objectFit: "cover",
                                }}
                            />
                            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                2025년 09월 27일 | 오전 09:00
                            </p>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: 8,
                                }}
                            >
                                “쑥쑥안(안녕하세요)”…주부산 베트남총영사관 문화 행사
                            </h3>
                            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                부산에 주베트남 총영사관이 들어섰다. 지난 8월 13일 부산 롯데호텔에서 주부산 베트남 총...
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

                    {/* Pagination */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 40,
                            gap: 10,
                        }}
                    >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                            <button
                                key={n}
                                style={{
                                    border: "none",
                                    background: n === 2 ? "#111827" : "transparent",
                                    color: n === 2 ? "#fff" : "#6b7280",
                                    borderRadius: 4,
                                    padding: "4px 8px",
                                    cursor: "pointer",
                                }}
                            >
                                {n}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
