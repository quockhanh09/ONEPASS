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
  const [addresses] = useState([
    {
      ko: "서울: (03150) 서울특별시 종로구 삼봉로 81 두산위브 파빌리온, 1238호",
      vi: "Seoul: Toà nhà Doosan We've Pavilion, Phòng 1238, 81,Sambong-ro Jongno-gu, Seoul, Hàn Quốc (03150)",
      map: "81 Sambong-ro, Jongno-gu, Seoul",
    },
    {
      ko: "부산: (48059) 부산광역시 해운대구 센텀동로 99, 915 - 916호 (재송동, 벽산이센텀클래스원)",
      vi: "Busan: Tòa nhà Byucksan e-Centum Classone, Phòng 915 - 916, 99 Centumdong-ro, Haeundae-gu, Busan, Hàn Quốc (48059)",
      map: "99 Centumdong-ro, Haeundae-gu, Busan",
    },
  ]);

  // ✅ Map hiện tại
  const [selectedMap, setSelectedMap] = useState(addresses[1].map); // mặc định Busan
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(selectedMap)}&output=embed`;


  return (
    <section
      id="contact-location"
      style={{ background: "#ffffff", padding: "40px 0 60px 0" }}
    >
      <div style={{ maxWidth: 1350, margin: "0 auto", padding: "0 16px" }}>
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
          <div
            className="Map"
            style={{
              flex: "1 1 520px",
              minWidth: 360,
              maxWidth: 640,
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(10,20,40,0.06)",
              marginLeft: 20,
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
                fontWeight: 700,
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
              {language === "VI" ? (<>Nếu cần tư vấn, hãy tìm đến One Pass</>) : ("상담이 필요하시면 원패스를 찾아주세요")}
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
                <div style={{ fontWeight: 800, marginBottom: 6 }}>
                  {language === "VI" ? (
                    <>Địa chỉ Văn phòng (Trụ sở chính)</>
                  ) : (
                    "주소"
                  )}
                </div>

                <div style={{ color: "#334155", lineHeight: 2 }}>
                  {addresses.map((addr, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedMap(addr.map)} // ✅ chuyển map khi nhấn
                      className="addresses-text"
                      style={{
                        cursor: "pointer",
                        transition: "0.2s",
                        fontWeight: selectedMap === addr.map ? 700 : 400,
                        color: selectedMap === addr.map ? "#1e40af" : "#334155",
                      }}
                    >
                      * {language === "VI" ? addr.vi : addr.ko}
                    </div>
                  ))}
                </div>
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
                  {language === "VI" ? (<>Seoul: Ga Jonggak (Line 1), Ga Gwanghwamun (Line 5) / Xe buýt: 109, 606, 151, 162, 172, 401, 406, 704, 7022, 1020</>) : ("서울: 종각역 (1호선), 광화문역 (5호선) / 109, 606, 151, 162, 172, 401, 406, 704, 7022, 1020번")}
                </div>
                <div style={{ color: "#334155" }}>
                  {language === "VI" ? (<>Busan: Ga Centum City (Line 2) / Xe buýt: 100-1, 155, 200, 31, 5-1</>) : ("부산: 센텀시티역(2호선) /100-1, 155, 200, 31, 5-1번")}
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
          .addresses-text{
            font-size: 14px;!important;
            line-height: 1.7 !important;
          }
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
