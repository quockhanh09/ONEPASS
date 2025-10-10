


import { useState } from "react";
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

function Introduction() {
  const [selected, setSelected] = useState(0);
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
        minHeight: "40vh",
        width: "100vw",
        paddingTop: "120px",
      }}>
        {/* Header title center */}
        <div style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            NEWSROOM
          </h1>
        </div>
        {/* Main content row */}

      </section>

      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 30
          }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#384D8D" }}>전체 뉴스</h2>
            <a href="/news/전체 뉴스" style={{ fontSize: 15, color: "#384D8D", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              더보기 →
            </a>
          </div>

          {/* News Cards */}
          <div style={{
            display: "flex",
            gap: 30,
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}>
            {/* Card 1 */}
            <div style={{ flex: "1 1 30%", minWidth: 300 }}>
              <img src={n1} alt="추석 연휴 안내"
                style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>2025년 09월 30일 | 오전 09:00</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>추석 연휴 휴무 안내</h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                안녕하세요. 고객 여러분께 저희 원패스는 추석 연휴를 맞아 아래와 같이 휴무를 시행함을 알려드립니다...
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ flex: "1 1 30%", minWidth: 300 }}>
              <img src={n2} alt="베트남 총영사관 개소"
                style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>2025년 09월 27일 | 오전 09:00</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>주부산 베트남 총영사관 공식 개소</h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며...
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ flex: "1 1 30%", minWidth: 300 }}>
              <img src={n3} alt="원패스 업무 개시 안내"
                style={{ width: "100%", borderRadius: 8, marginBottom: 12 }} />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>2025년 09월 25일 | 오전 09:00</p>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#111827", marginBottom: 8 }}>원패스(One Pass) 공식 업무 개시 안내</h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                2025년 10월 1일, 원패스가 고객 여러분을 찾아갑니다...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#384D8D" }}>
              대사관•총영사관 소식
            </h2>
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
              더보기 →
            </a>
          </div>

          {/* News Cards */}
          <div
            style={{
              display: "flex",
              gap: 30,
              flexWrap: "wrap",

            }}
          >
            {/* Card 1 */}
            <div
              style={{
                width: 380,
                flexShrink: 0,
              }}
            >
              <img
                src={n1}
                alt="추석 연휴 안내"
                style={{
                  width: 380,
                  height: 216,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>
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
                안녕하세요. 고객 여러분께 저희 원패스는 추석 연휴를 맞아 아래와 같이
                휴무를 시행함을 알려드립니다...
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                width: 380,
                flexShrink: 0,
              }}
            >
              <img
                src={n2}
                alt="베트남 총영사관 개소"
                style={{
                  width: 380,
                  height: 216,
                  objectFit: "cover",
                  borderRadius: 8,
                  marginBottom: 12,
                }}
              />
              <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0" }}>
                2025년 09월 27일 | 오전 09:00
              </p>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#384D8D",
                  marginBottom: 8,
                }}
              >
                주부산 베트남 총영사관 공식 개소
              </h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며...
              </p>
            </div>
          </div>
        </div>
      </section>


      <section style={{ background: "#fff", padding: "60px 0", width: "100vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between" }}>

          {/* LEFT: Calendar */}
          <div style={{ flex: "0 0 45%" }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1e3a8a", marginBottom: 20 }}>
              업무 일정 (휴일 일정)
            </h2>
            <div style={{
              width: 260,
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              padding: 16,
              textAlign: "center"
            }}>
              {/* Giả lập Calendar */}
              <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>10 ▾ | 2025</div>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "#111827" }}>
                <thead>
                  <tr>
                    {["일", "월", "화", "수", "목", "금", "토"].map((d, i) => (
                      <th key={i} style={{ padding: 4, color: i === 0 ? "#dc2626" : "#374151" }}>{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, row) => (
                    <tr key={row}>
                      {[...Array(7)].map((_, col) => {
                        const day = row * 7 + col - 1;
                        return (
                          <td key={col} style={{
                            padding: "6px 4px",
                            color: (col === 0 || col === 6) ? "#dc2626" : "#111827"
                          }}>
                            {day > 0 && day <= 31 ? day : ""}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT: News */}
          <div style={{ flex: "0 0 50%" }}>
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Introduction;
