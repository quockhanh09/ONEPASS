import React from "react";
import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n4 from "../assets/img/N4.png";
import n5 from "../assets/img/n5.png";
import n7 from "../assets/img/n7.png";
import heroBg from "../assets/img/herobanner-1.png";
import consulate from "../assets/img/n3.png"; // ✅ ảnh chính trong bài

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

export default function NewsDetail4() {
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
                        원패스(One Pass), 주부산 총영사관으로부터 감사패 수여
                    </h1>

                    <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                        2025년 9월 2일, (주)원패스가 주부산 베트남 총영사관이 주최한 베트남 80주년 국경일 기념행사에서 총영사관의 성공적인 설립과 초기 사무실 운영 기반 마련에 기여한 공로를 인정받아 감사패를 수여받는 영예를 안았습니다.
                    </p>


                    <div style={{ textAlign: "center", margin: "30px 0" }}>
                        <img
                            src={n4}
                            alt="추석 안내"
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                            }}
                        />
                    </div>

                    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                        원패스에 수여된 감사패는 총영사관이 복잡한 설립 초기의 행정적, 물류적 어려움을 극복하고 조기에 안정적인 업무 환경을 구축할 수 있도록 헌신적인 지원을 제공한 데 대한 공식적인 인정입니다.
                        <br />
                        원패스는 특히 업무의 안정적인 수행, 행정 기반 구축 등 영사관의 성공적인 업무 개시에 필수적인 물적·행정적 초석 마련에 적극적으로 협력했습니다. 이러한 지원은 총영사관이 지역 교민들에게 서비스를 제공할 수 있는 튼튼한 기반을 다지는 데 결정적인 역할을 수행했습니다.
                    </p>
                    <div style={{ textAlign: "center", margin: "30px 0" }}>
                        <img
                            src={n7}
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
                            감사패를 수상한 원패스 대표는 "이번 수상은 총영사관의 원활한 업무 수행을 위한 저희의 헌신적인 노력을 인정받은 소중한 결실입니다. 저희는 앞으로도 주부산 베트남 총영사관의 신뢰할 수 있는 파트너로서 긴밀한 협력 관계를 유지하고, 영사 업무 효율 증진을 위해 지속적으로 노력하겠습니다."라고 소감을 밝혔습니다.
                        </p>
                        <p>
                            이번 수상은 원패스가 총영사관의 행정 역량을 강화하고 교민 사회를 간접적으로 지원하는 책임감 있는 기업임을 대외적으로 공표하는 중요한 의미를 가집니다.
                        </p>
                       
                        <p style={{ color: "#000000ff", fontSize: "14px", marginTop: "20px" }}>
                            2025년 09월  25일 | 오전 09:00 게시
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
