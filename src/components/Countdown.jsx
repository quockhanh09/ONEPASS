import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../style/App.css";
import { useLanguage } from "../LanguageContext.jsx";
function Countdown() {
  const { language } = useLanguage();
  const location = useLocation();

  // Nếu đang ở /support thì không hiển thị component
  if (location.pathname === "/Support") {
    return null;
  }

  // Địa chỉ để nhúng map
  const [address] = useState(
    "(48059) Byucksan e-Centum Classone, 915 - 916, 99 Centumdong-ro, Haeundae-gu, Busan, Korena"
  );

  const mapQuery = encodeURIComponent("Centumdong-ro 99, Haeundae-gu, Busan");
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section
      id="contact-location"
      style={{ background: "#ffffff", padding: "40px 0 60px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <div
          className="contact-flex"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 36,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          {/* Map trái */}
          <div className="Map"
            style={{
              flex: "1 1 520px",
              minWidth: 360,
              maxWidth: 640,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(10,20,40,0.06)",
              marginLeft: 20
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
            <style>{`
            
            `}</style>
          </div>

          {/* Khối thông tin phải */}
          <div className="main-left"
            style={{
              flex: "1 1 520px",
              minWidth: 460,
              maxWidth: 660,
              color: "#0B2447",
            }}
          >
            <div className="main-left-title"
              style={{
                color: "#2F4D90",
                fontWeight: 600,
                fontSize: 24,
                marginBottom: 10,
              }}
            >
              CONTACT
            </div>
            <h3 className="main-left-h3"
              style={{
                fontWeight: 700,
                fontSize: 32,
                lineHeight: 1.35,
                margin: "0 0 18px 0",
              }}
            >
              {language === "VI" ? (<>Nếu cần tư vấn, hãy tìm đến One Pass chúng tôi</>) : ("상담이 필요하시면 원패스를 찾아주세요")}
            </h3>
            <div
              style={{
                borderTop: "1px solid #DDE3EB",
                margin: "12px 0 18px 0",
              }}
            />

            <div className="main-left-info"
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
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{language === "VI" ? (<>Địa chỉ Văn phòng (Trụ sở chính)</>) : ("주소")}</div>
                <div style={{ color: "#334155" }}>{address}</div>
              </div>

              {/* 전화 */}
              <div style={{ fontSize: 18 }}>📞</div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{language === "VI" ? (<>Điện thoại</>) : ("전화")}</div>
                <div style={{ color: "#334155" }}>(+82) 51-715-0607</div>
              </div>

              {/* 근무시간 */}
              <div style={{ fontSize: 18 }}>⏰</div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{language === "VI" ? (<>Giờ làm việc</>) : ("근무시간")}</div>
                <div style={{ color: "#334155" }}>

                  {language === "VI" ? (<>Giờ hoạt động: 09:00 ~ 18:00 <br />
                    (Nghỉ trưa: 12:00~13:00, Thứ Bảy, Chủ Nhật và các ngày Lễ/Tết Hàn Quốc)</>) 
                    : (<>평일 09:00 ~ 18:00 <br />(점심 12:00~13:00, 주말 공휴일 휴무)</>)}
                </div>
              </div>

              {/* 대중교통 */}
              <div style={{ fontSize: 18 }}>🚌</div>
              <div>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{language === "VI" ? (<>Phương tiện giao thông</>) : ("대중교통")}</div>
                <div style={{ color: "#334155" }}>
                    {language === "VI" ? (<>Ga Centum City (Line 2) / Xe buýt: 100-1, 155, 200, 31, 5-1</>) : ("센텀시티역(2호선) / 100-1, 155, 200, 31, 5-1번")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {
          `
          @media (max-width: 450px) {
 .main-left {
   flex: 1 1 100% !important;
   min-width: auto !important;
   max-width: 100% !important;
   padding: 0 16px;
 }

 .main-left-title {
   font-size: 18px !important;
   margin-bottom: 6px !important;
 }

 .main-left-h3 {
   font-size: 22px !important;
   line-height: 1.4 !important;
 }

 .main-left-info {
   grid-template-columns: 22px 1fr !important;
   font-size: 14px !important;
   row-gap: 12px !important;
 }

 .main-left-info div {
   word-break: keep-all;
 }
}

.contact-flex {
  justify-content: center;
}

@media (max-width: 400px) {
  .Map {
    flex: none;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  }
}

@media (max-width: 390px) {
  .Map {
    flex: none;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  }
}

@media (max-width: 380px) {
  .Map {
    flex: none;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
  }
}
         `
        }
      </style>
    </section>
  );
}

export default Countdown;
