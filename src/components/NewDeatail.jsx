import React from "react";
import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import heroBg from "../assets/img/herobanner-1.png";
import consulate from "../assets/img/n1.png"; // ✅ ảnh chính trong bài

const relatedNews = [
    {
        id: 1,
        img: n1,
        title: "영사과 휴무 일정 안내",
        desc: "2023년 9월 추석 연휴 기간 동안...",
    },
    {
        id: 2,
        img: n2,
        title: "베트남 총영사관 개소식",
        desc: "호찌민시 외교부는 새로운 총영사관 개소를...",
    },
    {
        id: 3,
        img: n3,
        title: "비자 신청 접수 안내",
        desc: "비자 관련 업무는 10월 1일부터 재개됩니다.",
    },
];

export default function NewsDetail() {
    return (
        <>
            <section
                style={{
                    margin: 0,
                    padding: 0,
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                    minHeight: "50vh",
                    width: "100vw",
                    paddingTop: "120px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: 60,
                        marginBottom: 30,
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "SVN-Gilroy",
                            color: "#fff",
                            fontWeight: 900,
                            fontSize: 60,
                            lineHeight: 1.5,
                            margin: 0,
                            letterSpacing: 1,
                        }}
                    >
                        NEWSROOM
                    </h1>
                </div>
            </section>

            <section>
                <div
                    style={{
                        maxWidth: "1250px",
                        margin: "0 auto",
                        padding: "40px 20px",
                        fontFamily: "Arial, sans-serif",
                        color: "#222",
                        lineHeight: "1.8",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "28px",
                            fontWeight: "bold",
                            marginBottom: "20px",
                        }}
                    >
                        추석 연휴 휴무 안내
                    </h1>

                    <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                        안녕하세요, 고객 여러분!
                    </p>
                    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                        저희 총영사관은 추석 연휴를 맞이하여 아래와 같이 휴무 일정을 시행하고자
                        합니다. 일정을 꼭 확인하시어 업무에 차질이 없으시길 바랍니다.
                    </p>

                    <div style={{ textAlign: "center", margin: "30px 0" }}>
                        <img
                            src={consulate}
                            alt="추석 안내"
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                            }}
                        />
                    </div>

                    <div style={{ fontSize: "16px", marginBottom: "40px" }}>
                        <p>
                            📅 <strong>휴무 기간:</strong> 2025년 9월 28일(일) ~ 2025년 10월 5일(일)
                        </p>
                        <p>
                            🕒 <strong>업무 재개:</strong> 2025년 10월 6일(월)
                        </p>
                        <p>
                            휴무 기간 동안 영사 업무 및 민원 접수는 중단됩니다. 긴급한 사안이 있는
                            경우, 총영사관 대표 이메일을 통해 문의해 주시기 바랍니다.
                        </p>
                        <p>항상 성원해 주시는 모든 분들께 감사드립니다.</p>
                        <p style={{ color: "#666", fontSize: "14px", marginTop: "20px" }}>
                            2025년 9월 30일 | 주한 베트남 총영사관 드림
                        </p>
                    </div>

                    <h2
                        style={{
                            fontSize: "22px",
                            fontWeight: "600",
                         
                            paddingBottom: "10px",
                            marginBottom: "25px",
                        }}
                    >
                        관련 뉴스
                    </h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                            gap: 32,
                        }}
                    >
                        {/* 1 */}
                        <div
                            onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail")}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={n1}
                                alt="추석 연휴 휴무 안내"
                                style={{
                                    width: "100%",
                                    borderRadius: 8,
                                    marginBottom: 12,
                                    objectFit: "cover",
                                }}
                            />
                            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                2025년 09월 30일 | 오전 09:00
                            </p>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: 8,
                                }}
                            >
                                추석 연휴 휴무 안내
                            </h3>
                            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                안녕하세요. 고객 여러분께 저희 원패스는 추석 연휴를 맞아 아래와 같이 휴무를 시행함을 알려드립니다...
                            </p>
                            <a
                                href="/news전체 뉴스/NewsDetail"
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


                        {/* 2 */}
                        <div>
                            <img
                                src={n2}
                                alt="베트남 총영사관 개소"
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

                        {/* 3 */}
                        <div>
                            <img
                                src={n3}
                                alt="원패스(One Pass) 업무 개시"
                                style={{
                                    width: "100%",
                                    borderRadius: 8,
                                    marginBottom: 12,
                                    objectFit: "cover",
                                }}
                            />
                            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                2025년 09월 25일 | 오전 09:00
                            </p>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: 8,
                                }}
                            >
                                원패스(One Pass) 공식 업무 개시 안내
                            </h3>
                            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                2025년 10월 1일, 원패스가 고객 여러분을 찾아갑니다. 베트남 행정 절차 대행 및 솔루션 전문 회사 원패스...
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
                </div>
            </section>
        </>
    );
}
