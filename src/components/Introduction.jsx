


import { useState } from "react";
import vcpcLogo from "../assets/img/vcpc-header.png";
import meetingImg from "../assets/img/image8.png";
import heroBg from "../assets/img/herobanner-1.png";
import imgProfessional from "../assets/img/8.png";
import imgTrust from "../assets/img/7.png";
import imgEfficiency from "../assets/img/6.png";
import imgCustomer from "../assets/img/5.png";


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
        minHeight: "50vh",
        width: "100vw",
        paddingTop: "120px",
      }}>
        {/* Header title center */}
        <div style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#ffffffff", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
            ABOUT US
          </h1>
        </div>
        {/* Main content row */}

      </section>

      <section style={{ background: "#fff", minHeight: 400, width: "100vw", padding: "40px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 40 }}>
          {/* Left: Image */}
          <div style={{ flex: 1 }}>
            <img
              src={meetingImg}
              alt="meeting"
              style={{ width: "100%", height: "auto", borderRadius: 8 }}
            />
          </div>

          {/* Right: Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: "SVN-Gilroy", fontWeight: 700, fontSize: 28, color: "#111", marginBottom: 20 }}>
              한 번에 끝나는 행정 업무
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#222", textAlign: "justify", marginBottom: 40 }}>
              2025년, 대한민국 부산에서 원패스(One Pass)가 힘찬 첫걸음을 시작했습니다.
              원패스는 베트남 관련 행정 절차에 대한 가장 정확한 지원과 해결책을
              제공하기 위해 탄생한 행정 대행 및 솔루션 기업입니다. 여권, 비자, 결혼 서류,
              영사 확인 및 공증 등 모든 행정 업무에 대해 정확한 컨설팅 및 지원 서비스를
              베트남인과 한국인 모두에게 제공하며, 고객의 시간과 노력을 절약하는 가장
              효율적인 길을 열어 드립니다.
            </p>

            {/* Contact Box */}
            <div style={{
              display: "flex",
              alignItems: "center",
              background: "#dcc38f",   // màu nền vàng nhạt
              borderRadius: 10,
              padding: "16px 20px",
              maxWidth: 420
            }}>
              {/* Icon box */}
              <div style={{
                width: 60,
                height: 60,
                background: "#fff",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 16
              }}>
                <span style={{ fontSize: 30 }}>👨‍💼</span>
                {/* thay bằng icon svg nếu có */}
              </div>

              {/* Text */}
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 4, color: "#ffffffff" }}>상담 신청</div>
                <div style={{ fontSize: 15, color: "#ffffffff" }}>
                  전화번호: <span style={{ color: "#2B3A67", fontWeight: 700 }}>    (+82) 51-715-0607</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          width: "100%",
          backgroundColor: "#23366f",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "32px",
            }}
          >
            원패스의 이야기
          </h2>

          {/* Content */}
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              opacity: 0.95,
              whiteSpace: "pre-line",
              textAlign: "justify",
            }}
          >
            “원패스의 여정은 한 가지 깊은 깨달음에서 시작되었습니다. 설립자는 해외에서 생활하며 복잡하고 예측 불가능한 베트남 행정 절차들로 인해 수많은 어려움을 직접 경험했습니다. 언어의 장벽, 규정의 잦은 변경, 그리고 끝없이 이어지는 서류 작업은 많은 사람들에게 좌절감을 안겨주었습니다. 이는 단지 한 개인의 문제가 아니라, 전 세계에 흩어져 있는 수많은 베트남 교민과 베트남과 관계를 맺고 있는 외국인들이 공통으로 겪는 어려움이라는 것을 깨달았습니다.

            {"\n\n"}
            이러한 문제들을 해결하기 위해, 원패스는 '복잡한 과정을 한 번에 해결하는 통로'라는 의미를 담아 탄생했습니다. 저희의 목표는 단순한 서류 대행을 넘어, 고객의 소중한 시간과 에너지를 지켜드리는 것입니다. 원패스는 행정 절차를 간소화하고 투명성을 높여, 고객들이 삶의 중요한 순간에 온전히 집중할 수 있도록 돕는 든든한 파트너가 될 것입니다.”
          </p>
        </div>
      </section>


      <section>
        {/* Phần giữa: nền trắng */}
        <div style={{ background: "#fff", padding: "60px 20px" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Bên trái */}
            <div>
              <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px" }}>
                고객과 함께 걸어온 발자취, <br />
                끝까지 함께 하겠습니다.
              </h3>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  marginTop: "100px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "45px", fontWeight: "700", color: "#23366f" }}>90</p>
                  <p style={{ fontSize: "18px", color: "#333" }}>만족 고객 수</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "45px", fontWeight: "700", color: "#23366f" }}>67</p>
                  <p style={{ fontSize: "18px", color: "#333" }}>접수 사례건 수</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "45px", fontWeight: "700", color: "#23366f" }}>23</p>
                  <p style={{ fontSize: "18px", color: "#333" }}>누적 상담건 수</p>
                </div>
              </div>
            </div>

            {/* Bên phải */}
            <div>
              <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}>
                고객께 드리는 원패스의 약속
              </h4>
              <ul style={{ lineHeight: 1.8, fontSize: "18px", color: "#333" }}>
                <li>
                  <strong>마음의 평화:</strong> 복잡하고 어려운 서류 절차를 전문가에게 맡겨, 고객님은 더 이상 고민하거나
                  불안해하지 않으셔도 됩니다.
                </li>
                <li>
                  <strong>시간과 비용의 절약:</strong> 불필요한 절차와 시행착오를 줄여 시간을 최소화하고 효율적인 업무
                  처리로 비용 부담까지 덜어 드립니다.
                </li>
                <li>
                  <strong>완벽한 투명성:</strong> 모든 절차의 진행 상황을 고객에게 명확하게 보고하여 언제든 안심하고
                  맡기실 수 있도록 합니다.
                </li>
                <li>
                  <strong>맞춤형 솔루션:</strong> 고객 한 분 한 분의 고유한 상황을 이해하고 최적의 해결책을 제시합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer: OUR MISSION */}
        <div
          style={{
            background: "#d9c084",
            textAlign: "center",
            padding: "20px 0",
            fontWeight: "700",
            fontSize: "32px",
            color: "#fff",
            letterSpacing: "1px",
          }}
        >
          OUR MISSION
        </div>
      </section>



      <section style={{ background: "#fff", width: "100vw", padding: "60px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          {/* Grid 2x2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            {CARDS.map((card, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  background: "#eeeeeeff ",
                  borderRadius: 10,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  alignItems: "stretch",
                }}
              >
                {/* Text left */}
                <div style={{ flex: 1, padding: "20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: 24, marginBottom: 10 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 18, lineHeight: 1.6, color: "#333" }}>
                    {card.desc}
                  </p>
                </div>

                {/* Image right */}
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "40%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>

          {/* Paragraphs below */}
          <div style={{ marginTop: 50 }}>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: "#111" }}>
              복잡함을 넘어, 쉬운 길을 열다
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333", marginBottom: 30 }}>
              원패스(OnePass)는 복잡하고 까다로운 행정 절차로 인해 어려움을 겪는 모든 분들을 위해 존재합니다. 결혼 관련 서류부터 여권, 비자, 영사 확인에 이르기까지, 모든 서류 업무를 가장 빠르고 정확하게 처리하여 고객의 소중한 시간과 노력을 지켜드리는 것이 우리의 사명입니다. 저희는 단순한 서류 대행을 넘어, 행정 절차를 간소화하고 투명성을 높여, 고객들이 삶의 중요한 순간에 온전히 집중할 수 있도록 돕는 든든한 파트너가 될 것입니다.
            </p>

            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12, color: "#111" }}>
              가장 신뢰받는 행정 전문가 파트너
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#333" }}>
              원패스는 고객의 삶에 긍정적인 변화를 가져오는 신뢰의 파트너가 되고자 합니다. 투명하고 전문적인 서비스, 그리고 고객 한 분 한 분의 상황에 맞는 맞춤형 솔루션을 통해 행정 서비스 분야의 새로운 기준을 만들어 갈 것입니다. 우리는 모든 사람이 서류 문제로 인해 좌절하지 않고, 원하는 바를 이룰 수 있는 세상을 만드는 것을 목표로 삼고 있습니다. 이를 위해 지속적인 혁신과 서비스 개선을 약속드립니다.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}

export default Introduction;
