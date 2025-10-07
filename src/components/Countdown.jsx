import { useState } from "react";
import "../style/App.css";

function Countdown() {
  // Địa chỉ để nhúng map
  const [address] = useState("(48059) 부산광역시 해운대구 센텀동로 99, 915 - 916호 (재송동, 벡산이센텀클래스원)");

  const mapQuery = encodeURIComponent("Centumdong-ro 99, Haeundae-gu, Busan");
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="contact-location" style={{ background: "#ffffff", padding: "40px 0 60px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 36,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Map trái */}
          <div
            style={{
              flex: "1 1 520px",
              minWidth: 360,
              maxWidth: 640,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(10,20,40,0.06)",
            }}
          >
            <iframe
              title="Địa chỉ ONE PASS"
              src={mapSrc}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Khối thông tin phải */}
          <div style={{ flex: "1 1 420px", minWidth: 360, maxWidth: 560, color: "#0B2447" }}>
            <div style={{ color: "#2F4D90", fontWeight: 800, fontSize: 18, marginBottom: 10 }}>찾아오시는 길</div>
            <h3 style={{ fontWeight: 900, fontSize: 32, lineHeight: 1.35, margin: "0 0 18px 0" }}>
              고객과 함께 걸어온 발자취,
              <br />끝까지 함께 하겠습니다.
            </h3>
            <div style={{ borderTop: "1px solid #DDE3EB", margin: "12px 0 18px 0" }} />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "26px 1fr",
                columnGap: 12,
                rowGap: 18,
                alignItems: "start",
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              {/* 주소 */}
              <div style={{ fontSize: 18 }}>📍</div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>주소</div>
                <div style={{ color: "#334155" }}>{address}</div>
              </div>

              {/* 전화 */}
              <div style={{ fontSize: 18 }}>📞</div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>전화</div>
                <div style={{ color: "#334155" }}>(+82) 51-715-0607</div>
              </div>

              {/* 근무시간 */}
              <div style={{ fontSize: 18 }}>⏰</div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>근무시간</div>
                <div style={{ color: "#334155" }}>
                  평일 09:00 ~ 18:00 <br />(점심 12:00~13:00, 주말 공휴일 휴무)
                </div>
              </div>

              {/* 대중교통 */}
              <div style={{ fontSize: 18 }}>🚌</div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>대중교통</div>
                <div style={{ color: "#334155" }}>센텀시티역(2호선) / 100-1, 155, 200, 31, 5-1번</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
