import React from "react";
import n1 from "../assets/img/n1.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n4 from "../assets/img/N4.png";
import n5 from "../assets/img/n5.png";
import n6 from "../assets/img/n6.png";
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

export default function NewsDetail5() {
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
                        “씬짜오(안녕하세요)”…‘주부산 베트남 총영사관’ 9월 개관
                    </h1>

                    <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                        출처: https://www.busan.go.kr/news/totalnews01/view?dataNo=71719&gugun=Next
                    </p>

                    <p style={{ fontSize: "16px", marginBottom: "20px" }}>
                        부산에 주베트남 총영사관이 들어선다. 부산광역시는 지난 8월 13일 부산 롯데호텔에서 주부산 베트남 총영사관 출범식과 부산-호찌민 자매도시 결연 30주년 기념식을 열었다.
                        <br />
                        이날 행사에는 부산지역 주요 인사와 국빈 방한 중인 또 럼 베트남 공산당 서기장, 도안 프엉 란 신임 주부산 베트남 총영사 등이 함께했다.
                    </p>
                    <div style={{ textAlign: "center", margin: "30px 0" }}>
                        <img
                            src={n5}
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
                            △부산시는 지난 8월 13일 부산 롯데호텔에서 주부산 베트남 총영사관 출범식과 부산-호찌민 자매도시 결연 30주년 기념식을 열었다(사진은 주부산 베트남 총영사관 출범식 축하 공연)                        </p>
                        <p>
                            총영사관은 재외국민 보호와 비자 발급 같은 기본적인 영사 업무와 경제·문화 교류 등 외교적 기능과 역할까지 폭넓게 수행한다. 주부산 베트남 총영사관은 서울에 있는 주한 베트남 대사관에 이어 국내에 설치되는 2번째 공식 외교 공관이다. 9월 중 해운대구 센텀시티 벽산e센텀클래스원에서 정식 개관할 예정이다.                        </p>
                        <p>
                            베트남 총영사관 개관으로 글로벌 허브도시 부산 위상은 더 높아질 전망이다. 현재 부산에는 미국, 일본, 중국, 러시아, 몽골, 카자흐스탄, 파나마, 포르투갈, 뉴질랜드 등 9개 국가 총영사관이 있다. 베트남은 10번째 총영사관이다.                        </p>
                        <p>부산에 베트남 총영사관이 들어선 것은 부산지역 외국인 거주자 중 베트남 교민이 가장 많은 1만4천여 명이 거주하고 있기 때문이다. 특히 항만·물류·조선업 등 부산지역 핵심 산업에 종사하는 이들이 많다. 총영사관 개설로 여권 업무, 법률 지원 등 민원 처리를 위해 서울의 대사관까지 가야 했던 불편은 덜어주고 편리와 도움은 늘어날 것으로 예상한다. 양국 교류와 협력도 한층 강화될 전망이다.</p>


                        <p>
                            부산시는 베트남과 활발한 도시 외교를 펼쳐왔다. 1992년 우리나라와 베트남이 수교한 뒤 3년 만인 1995년 호찌민시와 자매결연을 체결했다. 호찌민은 베트남의 경제수도로 불리며 수도인 하노이 못지않은 도시 위상을 지녔다.
                        </p>
                        <p>
                            부산시는 자매결연에 이어 2008년 호찌민시에 무역사무소를 개설해 지역기업의 베트남 진출을 적극 지원하고 있다. 공무원 초청 연수, 한글학교 지원 사업 등 다양한 교류를 활발히 추진했다.
                        </p>
                        <p>
                            베트남 총영사관 개관으로 글로벌 허브도시 부산 위상은 더 높아질 전망이다. 현재 부산에는 미국, 일본, 중국, 러시아, 몽골, 카자흐스탄, 파나마, 포르투갈, 뉴질랜드 등 9개 국가 총영사관이 있다. 베트남은 10번째 총영사관이다.                        </p>
                        <p>
                            베트남 국가 서열 1위인 또 럼 서기장은 이날 행사에서 “지난 30년 동안 부산과 호찌민은 좋은 관계를 유지했고, 앞으로도 경제와 무역, 특히 항만 등과 같은 인프라 분야에서 사업을 함께 추진하면 좋겠다”라고 말했다.

                        </p>
                        

                        <div style={{ textAlign: "center", margin: "30px 0" }}>
                            <img
                                src={n6}
                                alt="추석 안내"
                                style={{
                                    width: "100%",
                                    borderRadius: "12px",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                                }}
                            />
                        </div>
                        <p style={{ color: "#000000ff", fontSize: "14px", marginTop: "20px",fontWeight:"600" }}>
                            ∎ 베트남 호찌민은?
                        </p>
                        <p>
                            베트남 남부에 자리한 호찌민은 베트남의 최대 도시이자 경제·문화의 중심지이다. 1975년에 패망한 베트남 공화국(남베트남)의 수도였다. 옛 명칭인 ‘사이공(Sài Gòn)’으로도 잘 알려져 있다.
                        </p>

                        <p>
                            △베트남 호찌민 인민 청사 모습.<br />
                            호찌민은 베트남에서 우리나라 교민이 가장 많이 살고 있다. 도시 남쪽 외곽에 자리한 푸미흥(Phú My Hưng)에는 코리아타운이 형성돼 있다. 부산과 호찌민은 1995년 11
                            <br />
                            월 3일 자매도시 결연을 맺었다.   
                        </p>
                        
                        <p style={{ color: "#363636ff", fontSize: "14px", marginTop: "20px" }}>
                            2025년 09월  01일 | 오전 09:00 게시
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
