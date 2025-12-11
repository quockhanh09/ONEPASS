import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext.jsx";
import vcpcLogo from "../assets/img/vcpc-header.png";
import meetingImg from "../assets/img/image8.png";
import heroBg from "../assets/img/herobanner-1.png";
import imgProfessional from "../assets/img/8.png";
import imgTrust from "../assets/img/7.png";
import imgEfficiency from "../assets/img/6.png";
import imgCustomer from "../assets/img/5.png";
import fbIcon from "../assets/img/image20.png";
import kakaotalkIcon from "../assets/img/image17.png";
import zaloIcon from "../assets/img/image18.png";
import naverIcon from "../assets/img/image19.png";
function Support() {
  const [activeId, setActiveId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const effectiveId = hoverId ?? activeId;
  const items = [
    { id: 1, name: "페이스북", icon: fbIcon, link: "https://www.facebook.com/profile.php?id=61581863960708" },
    { id: 2, name: "카카오톡", icon: kakaotalkIcon, link: "https://pf.kakao.com/_BHALn" },
    { id: 3, name: "Zalo", icon: zaloIcon, link: "https://zalo.me/0395944818" },
    { id: 4, name: "네이버", icon: naverIcon, link: "https://blog.naver.com/onepass_kr" },
  ];

  const { language } = useLanguage();
  const [service, setService] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState({ text: "", isError: false });

  const showTemporaryPopup = (message, isError = false) => {
    setPopupMessage({ text: message, isError });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

 const handleSubmit = async () => {
  const lang = localStorage.getItem("lang") || "ko";

  const messages = {
    ko: {
      empty: "모든 항목을 입력하고 동의해 주세요.",
      success: "상담 신청 완료되었습니다!",
      fail: "서버 연결 실패 (Server connection failed)",
      serverError: "서버 오류가 발생했습니다.",
    },
    vi: {
      empty: "Vui lòng điền đầy đủ thông tin và đồng ý.",
      success: "Đăng ký tư vấn thành công!",
      fail: "Kết nối máy chủ thất bại.",
      serverError: "Đã xảy ra lỗi máy chủ.",
    },
  };

  if (!service || !name || !phone || !agree) {
    showTemporaryPopup(messages[lang].empty, true);
    return;
  }

  setLoading(true);

  try {
    const response = await fetch("https://onepasscms-backend.onrender.com/api/tuvan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        TenDichVu: service,
        TenHinhThuc: "Tư Vấn Nhanh", 
        HoTen: name,
        MaVung: countryCode,
        SoDienThoai: phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      showTemporaryPopup(`${messages[lang].serverError}`, true);
      console.error("Server Error:", data);
      return;
    }

    showTemporaryPopup(messages[lang].success);
    setService("");
    setName("");
    setPhone("");
    setAgree(false);
  } catch (err) {
    console.error("Lỗi khi kết nối server:", err);
    showTemporaryPopup(messages[lang].fail, true);
  } finally {
    setLoading(false);
  }
};

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


  const [activeTab, setActiveTab] = useState("profile-search");

  const location = useLocation();

  useEffect(() => {
    if (location && location.state && location.state.tab) {
      const tab = location.state.tab;
      const allowed = ["profile-search", "contact", "Terms-of-Use", "personal-information"];
      if (allowed.includes(tab)) setActiveTab(tab);
    }
  }, [location]);

  // --- DANH SÁCH CÁC TAB ---
  const tabs = [
    { id: "Terms-of-Use", label: "이용약관" },
    { id: "personal-information", label: "개인 정보 처리 방침" },
    { id: "contact", label: "Contact" },
    { id: "profile-search", label: "진행 현황 조회" },

  ];

  // --- HÀM XỬ LÝ CLICK TAB ---
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // --- HÀM HIỂN THỊ NỘI DUNG TỪNG TAB ---
  const renderTabContent = () => {
    switch (activeTab) {
      case "profile-search":
        return (
          <div className="s1" style={{ marginTop: 20 }}>
            <div
              style={{
                backgroundColor: "rgb(243, 246, 248)",
                padding: "150px",
                textAlign: "center",
                borderRadius: "4px",
                color: "rgb(17, 24, 39)",
                fontWeight: 500,
              }}
            >
              {language === "VI" ? (<>Đang chuẩn bị dịch vụ</>) : ("서비스 준비중")}
            </div>
            <style>
              {
                ` 
                @media (max-width: 380px){
                      .s1{
                        padding : 100px
                      }
                }
                `
              }
            </style>
          </div>
        );

      case "contact":
        return (
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
              <div
                style={{
                  flex: "1 1 420px",
                  minWidth: 360,
                  maxWidth: 560,
                  color: "#0B2447",
                }}
              >

                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: 1.35,
                    margin: "0 0 18px 0",
                  }}
                >
                  {language === "VI" ? (<>Liên Hệ</>) : (" CONTACT")}
                </h3>
                <div
                  style={{
                    borderTop: "1px solid #DDE3EB",
                    margin: "12px 0 18px 0",
                  }}
                />

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
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>{language === "VI" ? (<>Điện thoại</>) : ("전화")} </div>
                                    <div style={{ color: "#334155" }}>{language === "VI" ? (<>Seoul: (+82) 02-737-0607 <br/>Busan: (+82) 51-715-0607 </>) : (<>서울: (+82) 02-737-0607 <br/>부산: (+82) 51-715-0607 </>)}</div>

                  </div>

                  {/* 근무시간 */}
                  <div style={{ fontSize: 18 }}>⏰</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>{language === "VI" ? (<>Giờ làm việc</>) : ("근무시간")}</div>
                    <div style={{ color: "#334155" }}>
                      {language === "VI" ? (<>Giờ hoạt động: 09:00 ~ 18:00
                        (Nghỉ trưa: 12:00~13:00, Thứ Bảy,<br /> Chủ Nhật và các ngày Lễ/Tết Hàn Quốc)</>)
                        : (<>평일 09:00 ~ 18:00 <br />(점심 12:00~13:00, 주말 공휴일 휴무)</>)}
                    </div>
                  </div>

                  {/* 대중교통 */}
                  <div style={{ fontSize: 18 }}>🚌</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 6 }}>{language === "VI" ? (<>Phương tiện giao thông</>) : ("대중교통")}</div>
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
        );

      case "Terms-of-Use":
        return (
          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: "'Roboto', sans-serif", maxWidth: 900, margin: "60px auto", padding: 20, lineHeight: 1.8, color: "#111827", fontSize: 15, textAlign: "justify" }}>
              <h1 style={{ textAlign: "center", fontWeight: 700, fontSize: 28, marginBottom: 40 }}>
                {language === "VI" ? (<>ĐIỀU KHOẢN SỬ DỤNG</>) : ("이용 약관 (利用約款)")}
              </h1>

              <p style={{ marginBottom: 30, fontSize: 14 }}>
                {language === "VI" ? (<>Các Điều khoản sử dụng này nhằm mục đích quy định các điều kiện và thủ tục sử dụng cũng như các vấn đề cần thiết khác liên quan đến việc sử dụng dịch vụ trang web do ONE PASS INC. (sau đây gọi là "Công ty") cung cấp. </>) : ("본 이용약관은 ONE PASS INC. (이하 '회사'라 한다)가 제공하는 웹사이트 서비스 이용과 관련하여 이용 조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.")}
              </p>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều khoản của ONE PASS INC. </>) : ("ONE PASS INC. 약관 ")}</h3>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 1 (Mục đích)</>) : ("제1조 (목적) ")}</h3>
              <p style={{ marginTop: 10, fontSize: 14 }}>
                {language === "VI" ? (<>Các điều khoản sử dụng này (sau đây gọi là 'Điều khoản') nhằm mục đích quy định cụ thể các điều kiện đăng ký và sử dụng dịch vụ khách hàng do Công ty (ONE PASS INC.) cung cấp, cũng như các vấn đề cần thiết khác giữa ONE PASS INC. (sau đây gọi là Công ty) và khách hàng sử dụng (sau đây gọi là 'Khách hàng').</>) :
                  ("본 이용약관 (이하 '약관'이라 한다)은 회사 (ONE PASS INC.)가 제공하는 고객 서비스의 등록 및 이용 조건과 ONE PASS INC. (이하 회사라 한다)와 이용 고객 (이하 '고객'이라 한다) 간의 기타 필요한 사항을 구체적으로 규정함을 목적으로 합니다.")}
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>
                {language === "VI" ? (<>Điều 2 (Hiệu lực và thay đổi của điều khoản)</>) : ("제2조 (약관의 효력 및 변경)")}
              </h3>
              <p style={{ fontSize: 14 }}>
                {language === "VI" ? (<>01 Các Điều khoản này có hiệu lực bằng cách được công bố trực tuyến trên trang web của ONE PASS INC., và có thể được sửa đổi trong phạm vi không vi phạm pháp luật liên quan khi có lý do hợp lý phát sinh. Các điều khoản đã sửa đổi có hiệu lực bằng cách được thông báo trực tuyến, và việc sửa đổi các quy định quan trọng như quyền hoặc nghĩa vụ của khách hàng sẽ được thông báo trước.
                </>) : ("01 본 약관은 ONE PASS INC. 웹사이트에 온라인으로 공시됨으로써 효력이 발생하며, 합리적인 사유 발생 시 관련 법령을 위배하지 않는 범위 내에서 개정될 수 있습니다. 개정된 약관은 온라인으로 공지됨으로써 효력이 발생하며, 고객의 권리나 의무 등 중요한 규정 변경은 사전에 고지됩니다.")}
              </p>
              <p style={{ fontSize: 14 }}>{language === "VI" ? (<>02 Công ty có thể thay đổi các Điều khoản này khi có lý do hợp lý phát sinh, và khi thay đổi các điều khoản, Công ty sẽ công bố trước mà không chậm trễ. </>) :
                ("02 회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 약관을 변경하는 경우 회사는 지체 없이 이를 사전에 공시합니다.")}</p>
              <p style={{ fontSize: 14 }}>{language === "VI" ? (<>03 Việc đồng ý với các Điều khoản này có nghĩa là đồng ý thường xuyên truy cập trang web để kiểm tra các thay đổi của Điều khoản. Công ty không chịu trách nhiệm đối với những thiệt hại của khách hàng phát sinh do không biết thông tin về các Điều khoản đã thay đổi.
              </>) : ("03 본 약관에 동의하는 것은 약관의 변경 사항을 확인하기 위해 정기적으로 웹사이트를 방문하는 것에 동의하는 것을 의미합니다. 회사는 변경된 약관 정보를 알지 못하여 발생하는 고객의 손해에 대해 책임지지 않습니다.")}</p>
              <p style={{ fontSize: 14 }}>{language === "VI" ? (<>04 Nếu Khách hàng không đồng ý với các Điều khoản đã thay đổi, Khách hàng có thể yêu cầu rút khỏi tư cách khách hàng (chấm dứt hợp đồng); nếu Khách hàng tiếp tục sử dụng dịch vụ mà không bày tỏ ý kiến từ chối sau 07 ngày kể từ ngày các Điều khoản đã thay đổi có hiệu lực, Khách hàng được coi là đã đồng ý với các thay đổi của Điều khoản.

              </>) : ("04 고객이 개정된 약관에 동의하지 않을 경우, 고객 자격 철회 (계약 해지)를 요청할 수 있으며, 개정된 약관의 효력 발생일로부터 07일 이내에 거부 의사를 표시하지 않고 계속 서비스를 이용할 경우, 약관 변경에 동의한 것으로 간주됩니다.")}</p>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 3 (Quy tắc bổ sung ngoài Điều khoản) </>) :
                ("제3조 (약관 외 준칙)")}</h3>
              <p style={{ fontSize: 14 }}>01{language === "VI" ? (<> Các Điều khoản này được áp dụng cùng với hướng dẫn sử dụng liên quan đến từng dịch vụ riêng biệt do Công ty cung cấp (sau đây gọi là Hướng dẫn theo dịch vụ). </>) :
                ("본 약관은 회사가 제공하는 개별 서비스와 관련된 이용 안내 (이하 서비스별 안내라 한다)와 함께 적용됩니다.")} </p>
              <p style={{ fontSize: 14 }}>02{language === "VI" ? (<> Đối với những vấn đề không được quy định trong Điều khoản này, có thể áp dụng theo pháp luật liên quan và mục đích của Hướng dẫn theo dịch vụ.</>) :
                (" 본 약관에 명시되지 않은 사항에 대해서는 관련 법령 및 서비스별 안내의 취지에 따라 적용될 수 있습니다.")} </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 4 (Bảo vệ và Sử dụng Thông tin Cá nhân) </>) :
                ("제4조 (개인 정보 보호 및 이용)")}</h3>
              <p style={{ fontSize: 14 }}>
                {language === "VI" ? (<>Công ty nỗ lực bảo vệ thông tin cá nhân của khách hàng, bao gồm thông tin đăng ký khách hàng, theo quy định của pháp luật liên quan. Việc bảo vệ và sử dụng thông tin cá nhân của khách hàng được áp dụng theo pháp luật liên quan và Chính sách bảo vệ thông tin cá nhân của Công ty. Tuy nhiên, Chính sách bảo vệ thông tin cá nhân của Công ty không áp dụng cho các trang web được liên kết từ các trang web không phải là trang chính thức của Công ty. Ngoài ra, Công ty không chịu bất kỳ trách nhiệm nào đối với thông tin bị tiết lộ do lỗi của khách hàng.</>) :
                  ("회사는 관련 법령의 규정이 정하는 바에 따라 고객 등록 정보를 포함하여 고객의 개인 정보를 보호하기 위해 노력합니다. 고객의 개인 정보 보호 및 이용에 대해서는 관련 법령 및 회사의 개인정보 보호정책이 적용됩니다. 다만, 회사의 개인정보 보호정책은 회사의 공식 웹사이트가 아닌 링크된 웹사이트에는 적용되지 않습니다. 또한, 고객의 귀책 사유로 인해 정보가 노출된 경우 회사는 어떠한 책임도 지지 않습니다.")}
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 5 (Nghĩa vụ của Công ty) </>) : ("제5조 (회사의 의무)")}</h3>
              <p style={{ fontSize: 14 }}>01 {language === "VI" ? (<>Công ty phải đảm bảo khách hàng sử dụng có thể sử dụng dịch vụ vào ngày bắt đầu cung cấp dịch vụ theo mong muốn, trừ khi có các trường hợp đặc biệt. </>) : ("회사는 특별한 사정이 없는 한 고객이 희망하는 서비스 개시일에 서비스를 이용할 수 있도록 보장해야 합니다.")} </p>
              <p style={{ fontSize: 14 }}>02 {language === "VI" ? (<>Để cung cấp dịch vụ liên tục và ổn định, khi có sự cố hoặc mất mát thiết bị, Công ty sẽ sửa chữa hoặc khôi phục ngay lập tức trừ khi có lý do bất khả kháng. </>) : (" 계속적이고 안정적인 서비스 제공을 위해 장비의 장애나 손실이 발생하면, 회사는 불가항력적인 사유가 없는 한 즉시 이를 수리하거나 복구합니다.")}</p>
              <p style={{ fontSize: 14 }}>03  {language === "VI" ? (<>Công ty xây dựng hệ thống bảo mật để bảo vệ thông tin cá nhân, công bố và tuân thủ Chính sách bảo vệ thông tin cá nhân. </>) : ("회사는 개인 정보 보호를 위한 보안 시스템을 구축하고, 개인정보 보호정책을 공시하고 준수합니다.")}</p>
              <p style={{ fontSize: 14 }}>04  {language === "VI" ? (<>Công ty xây dựng hệ thống bảo mật để bảo vệ thông tin cá nhân, công bố và tuân thủ Chính sách bảo vệ thông tin cá nhân. </>) : ("회사는 이용 고객의 의견이나 불만이 객관적으로 정당하다고 인정될 경우 적절한 절차를 거쳐 즉시 처리해야 합니다. 다만, 즉시 처리가 어려운 경우에는 고객에게 그 사유와 처리 일정을 통보해야 합니다.")}</p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 6 (Nghĩa vụ của khách hàng)</>) : ("제6조 (고객의 의무)")}</h3>
              <p style={{ fontSize: 14 }}>01 {language === "VI" ? (<>Khách hàng phải điền tất cả các thông tin một cách trung thực bằng tên thật khi đăng ký khách hàng hoặc thay đổi thông tin khách hàng, và sẽ không thể yêu cầu bất kỳ quyền lợi nào nếu đăng ký thông tin sai sự thật hoặc thông tin của người khác.</>) :
                ("고객은 고객 등록 또는 고객 정보 변경 시 모든 정보를 실명으로 성실하게 기재해야 하며, 사실과 다르거나 타인의 정보를 등록한 경우 일체의 권리를 주장할 수 없습니다.")} </p>
              <p style={{ fontSize: 14 }}>02 {language === "VI" ? (<>Khách hàng phải tuân thủ các quy định trong Điều khoản này và các quy định chung khác do Công ty đặt ra, các thông báo do Công ty công bố, và pháp luật liên quan; không được thực hiện các hành vi gây cản trở công việc của Công ty hoặc làm tổn hại đến danh dự của Công ty. </>) :
                ("고객은 본 약관 및 회사가 정한 기타 일반 규정, 회사가 공시하는 공지사항, 관련 법령을 준수해야 하며, 회사의 업무를 방해하거나 회사의 명예를 훼손하는 행위를 해서는 안 됩니다.")}</p>
              <p style={{ fontSize: 14 }}>03 {language === "VI" ? (<>Khách hàng phải thông báo ngay cho Công ty khi có thay đổi trong các điều khoản hợp đồng sử dụng, như địa chỉ, thông tin liên hệ, địa chỉ email, bằng cách thực hiện các thủ tục liên quan. </>) :
                ("고객은 주소, 연락처, 이메일 주소 등 이용계약 사항이 변경된 경우 관련 절차를 거쳐 회사에 즉시 알려야 합니다.")}</p>
              <p style={{ fontSize: 14 }}>04 {language === "VI" ? (<>Khách hàng không được sử dụng dịch vụ để thực hiện hoạt động kinh doanh mà không có sự chấp thuận trước bằng văn bản của Công ty, và Công ty không chịu trách nhiệm về kết quả của hoạt động kinh doanh đó. Nếu Công ty bị thiệt hại do hoạt động kinh doanh đó, Khách hàng có nghĩa vụ bồi thường thiệt hại cho Công ty, và Công ty có thể hạn chế sử dụng dịch vụ và yêu cầu bồi thường thiệt hại đối với Khách hàng đó thông qua các thủ tục pháp lý thích hợp. </>) :
                ("고객은 회사의 사전 서면 승인 없이 서비스를 이용하여 영업 행위를 할 수 없으며, 회사는 그러한 영업 행위의 결과에 대해 책임지지 않습니다. 회사가 해당 영업 행위로 인해 손해를 입은 경우, 고객은 회사에 손해를 배상할 의무가 있으며, 회사는 해당 고객에 대해 서비스 이용 제한 및 적절한 법적 절차를 통해 손해배상을 청구할 수 있습니다.")}</p>
              <p style={{ fontSize: 14 }}>05 {language === "VI" ? (<>Khách hàng không được chuyển nhượng, tặng cho quyền sử dụng dịch vụ hoặc các vị trí khác trong hợp đồng sử dụng cho người khác, cũng như không được dùng chúng làm tài sản thế chấp mà không có sự đồng ý rõ ràng của Công ty. </>) :
                ("고객은 서비스 이용 권리 또는 이용계약상의 지위를 타인에게 양도, 증여할 수 없으며, 회사의 명시적인 동의 없이 이를 담보로 제공할 수 없습니다.")}</p>
              <p style={{ fontSize: 14 }}>06 {language === "VI" ? (<>Khách hàng không được xâm phạm quyền sở hữu trí tuệ của Công ty và bên thứ ba</>) :
                ("고객은 회사 및 제3자의 지적재산권을 침해해서는 안 됩니다.")}</p>
              <p style={{ fontSize: 14 }}>07 {language === "VI" ? (<>Khách hàng không được thực hiện các hành vi sau đây, và nếu thực hiện các hành vi đó, Công ty có thể áp dụng các biện pháp trừng phạt bao gồm hạn chế sử dụng dịch vụ và các biện pháp pháp lý thích hợp đối với Khách hàng:</>) :
                ("고객은 다음 행위를 해서는 안 되며, 그러한 행위를 할 경우 회사는 고객에 대해 서비스 이용 제한 및 적절한 법적 조치를 포함한 제재 조치를 취할 수 있습니다:")}</p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Hành vi đăng ký nội dung sai sự thật khi đăng ký khách hàng hoặc thay đổi thông tin khách hàng.</>) :
                  ("고객 등록 또는 고객 정보 변경 시 허위 내용을 등록하는 행위.")}</li>
                <li>{language === "VI" ? (<>Hành vi giả mạo ban điều hành, nhân viên hoặc người có liên quan của Công ty.</>) :
                  ("허위 정보를 등록하는 행위")}</li>
                <li>{language === "VI" ? (<>Hành vi gây hại hoặc cố ý cản trở dịch vụ.</>) :
                  ("서비스에 해를 가하거나 고의로 방해하는 행위")}</li>
                <li>{language === "VI" ? (<>Hành vi sao chép thông tin thu được thông qua dịch vụ này cho mục đích ngoài việc sử dụng dịch vụ, hoặc sử dụng thông tin đó để xuất bản, phát sóng, hoặc cung cấp cho bên thứ ba mà không có sự chấp thuận trước của Công ty.</>) :
                  ("본 서비스를 통해 얻은 정보를 서비스 이용 외의 목적으로 복제하거나, 회사의 사전 동의 없이 출판, 방송, 또는 제3자에게 제공하는 행위")}</li>
                <li>{language === "VI" ? (<>Hành vi truyền tải, đăng tải, gửi email hoặc phân phối cho người khác bằng các phương tiện khác các thông tin, văn bản, hình vẽ, âm thanh, video có nội dung thô tục, khiêu dâm, vi phạm trật tự công cộng và thuần phong mỹ tục.</>) :
                  ("음란하거나, 외설적이며, 공공 질서 및 미풍양속을 위반하는 내용의 정보, 문구, 그림, 음향, 영상 등을 타인에게 전송, 게시, 이메일로 보내거나 다른 수단으로 배포하는 행위.")}</li>
                <li>{language === "VI" ? (<>Hành vi truyền tải, đăng tải, gửi email hoặc phân phối cho người khác bằng các phương tiện khác các nội dung mang tính xúc phạm hoặc liên quan đến thông tin cá nhân, có thể xâm phạm danh dự hoặc quyền riêng tư của người khác.</>) :
                  ("타인의 명예나 사생활을 침해할 수 있는 비방하거나 개인 정보와 관련된 내용을 타인에게 전송, 게시, 이메일로 보내거나 다른 수단으로 배포하는 행위.")}</li>
                <li>{language === "VI" ? (<>Hành vi quấy rối hoặc đe dọa khách hàng khác, hoặc gây ra sự đau khổ hoặc bất tiện liên tục cho một khách hàng cụ thể.</>) :
                  ("다른 고객을 괴롭히거나 위협하는 행위, 또는 특정 고객에게 지속적인 고통이나 불편을 야기하는 행위.")}</li>
                <li>{language === "VI" ? (<>Hành vi thu thập hoặc lưu trữ thông tin cá nhân của khách hàng khác mà không có sự chấp thuận của Công ty.</>) :
                  ("회사의 승인 없이 다른 고객의 개인 정보를 수집하거나 저장하는 행위.")}</li>
                <li>{language === "VI" ? (<>Hành vi được đánh giá khách quan là có liên quan đến tội phạm.</>) :
                  ("객관적으로 범죄와 관련이 있다고 판단되는 행위.")}</li>
                <li>{language === "VI" ? (<>Hành vi vi phạm các quy định chung hoặc điều kiện sử dụng khác do Công ty đặt ra, bao gồm cả Điều khoản này.</>) :
                  ("회사가 정한 기타 일반 규정 또는 이용 조건을 위반하는 행위.")}</li>
                <li>{language === "VI" ? (<>Các hành vi khác vi phạm pháp luật liên quan.</>) :
                  ("기타 관련 법령을 위반하는 행위.")}</li>
              </ul>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 7 (Thời gian sử dụng Dịch vụ) </>) :
                ("제7조 (서비스 이용 시간)")}</h3>
              <p style={{ fontSize: 14 }}> 01
                {language === "VI" ? (<> Việc sử dụng dịch vụ về nguyên tắc hoạt động 24 giờ một ngày, quanh năm, trừ khi có trở ngại đặc biệt về mặt nghiệp vụ hoặc kỹ thuật của Công ty. </>) :
                  ("서비스 이용은 회사의 업무상 또는 기술상의 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.")}
              </p>

              <p style={{ fontSize: 14 }}> 02
                {language === "VI" ? (<> Công ty có thể tạm thời ngưng cung cấp dịch vụ mà không cần thông báo trước do các lý do bất khả kháng như kiểm tra hệ thống khẩn cấp, mở rộng và thay thế, v.v., và có thể ngừng hoàn toàn dịch vụ đang được cung cấp vì những lý do mà Công ty cho là phù hợp, chẳng hạn như thay thế bằng dịch vụ mới.  </>) :
                  ("회사는 긴급 시스템 점검, 확장 및 교체 등 불가피한 사유로 인해 사전에 통지 없이 일시적으로 서비스를 중단할 수 있으며, 새로운 서비스로의 교체 등 회사가 적절하다고 판단하는 이유로 현재 제공되는 서비스를 완전히 중단할 수 있습니다.")}
              </p>

              <p style={{ fontSize: 14 }}> 03
                {language === "VI" ? (<> Công ty có thể hạn chế hoặc tạm ngừng toàn bộ hoặc một phần dịch vụ nếu việc cung cấp dịch vụ bình thường trở nên bất khả thi do tình trạng khẩn cấp quốc gia, mất điện, sự cố thiết bị dịch vụ, hoặc quá tải sử dụng dịch vụ. Tuy nhiên, trong trường hợp này, Công ty sẽ thông báo trước hoặc sau cho khách hàng về lý do và thời gian. </>) :
                  ("회사는 국가 비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용 폭주 등으로 인해 서비스의 정상적인 제공이 불가능할 경우 서비스의 전부 또는 일부를 제한하거나 일시 중지할 수 있습니다. 다만, 이 경우 회사는 고객에게 그 사유와 시간을 사전 또는 사후에 통지합니다.")}
              </p>

              <p style={{ fontSize: 14 }}> 04
                {language === "VI" ? (<> Công ty không thể thông báo trước trong trường hợp dịch vụ bị gián đoạn do các lý do nằm ngoài tầm kiểm soát của Công ty (ví dụ: lỗi đĩa, sập hệ thống không phải do cố ý hoặc sơ suất của quản trị viên hệ thống) và sẽ không thông báo trong trường hợp hệ thống bị gián đoạn do cố ý hoặc sơ suất của bên thứ ba (ví dụ: công ty truyền thông PC, nhà cung cấp dịch vụ viễn thông đường trục). </>) :
                  ("회사는 통제 범위를 벗어난 사유 (예: 관리자의 고의나 과실이 아닌 디스크 장애, 시스템 다운)로 인해 서비스가 중단된 경우 사전 통지할 수 없으며, 제3자의 고의나 과실로 시스템이 중단된 경우 (예: PC 통신 회사, 기간 통신 사업자)에도 통지하지 않습니다.")}
              </p>

              <p style={{ fontSize: 14 }}> 05
                {language === "VI" ? (<> Công ty có thể phân chia dịch vụ thành các phạm vi cụ thể và chỉ định riêng thời gian sử dụng khả dụng cho từng phạm vi. Tuy nhiên, trong trường hợp này, Công ty sẽ thông báo nội dung đó.</>) :
                  ("회사는 서비스를 특정 범위로 나누어 각 범위에 대해 별도의 이용 가능 시간을 지정할 수 있습니다. 다만, 이 경우 회사는 그 내용을 공지합니다.")}
              </p>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 8 (Cung cấp Thông tin) </>) :
                ("제8조 (정보의 제공)")}</h3>
              <p style={{ fontSize: 14 }}>01 {language === "VI" ? (<>Công ty có thể cung cấp cho Khách hàng các thông tin khác nhau được coi là cần thiết cho việc sử dụng dịch vụ bằng phương pháp thư điện tử hoặc thư tín. </>) :
                ("회사는 고객에게 서비스 이용에 필요하다고 인정되는 다양한 정보를 전자우편이나 우편의 방법으로 제공할 수 있습니다.")}</p>
              <p style={{ fontSize: 14 }}>02 {language === "VI" ? (<>Công ty có thể yêu cầu thêm thông tin cá nhân dưới sự đồng ý của Khách hàng nhằm mục đích cải thiện dịch vụ và giới thiệu dịch vụ cho Khách hàng.</>) :
                ("회사는 서비스 개선 및 고객 대상 서비스 소개를 목적으로 고객의 동의 하에 추가적인 개인 정보를 요청할 수 있습니다.")}</p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 9 (Đăng tải Quảng cáo và Giao dịch với Nhà quảng cáo) </>) :
                ("제9조 (광고 게재 및 광고주와의 거래)")}</h3>
              <p style={{ fontSize: 14 }}>01 {language === "VI" ? (<>Một phần cơ sở đầu tư dịch vụ cho phép Công ty cung cấp dịch vụ cho Khách hàng đến từ lợi nhuận thông qua việc đăng tải quảng cáo. Khách hàng đồng ý với việc đăng tải quảng cáo được hiển thị khi sử dụng dịch vụ. </>) :
                ("회사가 고객에게 서비스를 제공할 수 있도록 하는 서비스 투자의 기반 중 일부는 광고 게재를 통한 수익에서 나옵니다. 고객은 서비스 이용 시 노출되는 광고 게재에 동의합니다.")}</p>
              <p style={{ fontSize: 14 }}>02 {language === "VI" ? (<>Công ty không chịu trách nhiệm về những tổn thất và thiệt hại phát sinh khi Khách hàng tham gia vào các hoạt động quảng bá, giao tiếp hoặc giao dịch với nhà quảng cáo được đăng trên dịch vụ hoặc thông qua dịch vụ này.</>) :
                ("회사는 고객이 서비스에 게재된 또는 본 서비스를 통한 광고주와의 판촉 활동, 교신 또는 거래에 참여하여 발생하는 손실 및 손해에 대해 책임지지 않습니다.")}</p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 10 (Hạn chế Sử dụng Dịch vụ) </>) :
                ("제10조 (서비스 이용 제한)")}</h3>
              <p style={{ fontSize: 14 }}>01 {language === "VI" ? (<>Công ty có thể hạn chế việc sử dụng dịch vụ nếu Khách hàng vi phạm nội dung Điều 11 của Điều khoản này trong việc sử dụng dịch vụ, hoặc thuộc một trong các trường hợp sau đây:</>) :
                ("회사가 고객에게 서비스를 제공할 수 있도록 하는 서비스 투자의 기반 중 일부는 광고 게재를 통한 수익에서 나옵니다. 고객은 서비스 이용 시 노출되는 광고 게재에 동의합니다.")}</p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Xúc phạm nghiêm trọng khách hàng khác, hoặc cản trở việc sử dụng dịch vụ.</>) :
                  ("다른 고객을 심하게 모욕하거나 서비스 이용을 방해하는 경우.")}</li>
                <li>{language === "VI" ? (<>Các trường hợp khác gây cản trở hoạt động bình thường của dịch vụ.</>) :
                  ("기타 서비스의 정상적인 운영을 방해하는 경우.")}</li>
                <li>{language === "VI" ? (<>Có yêu cầu sửa chữa từ các cơ quan công cộng liên quan như Ủy ban Đạo đức Thông tin và Truyền thông.</>) :
                  ("정보통신윤리위원회 등 관련 공공 기관으로부터 시정 요청이 있는 경우.")}</li>
              </ul>
              <p >02 {language === "VI" ? (<>Theo các quy định hạn chế sử dụng nêu trên, Công ty có thể áp dụng các biện pháp như tạm ngưng sử dụng dịch vụ, khởi tạo lại, hoặc chấm dứt hợp đồng sử dụng đối với Khách hàng sử dụng dịch vụ mà không cần thông báo riêng, theo Quy tắc xử lý khách hàng vi phạm</>) :
                ("상기 이용 제한 규정에 따라, 회사는 위반 고객에 대한 처리 규정에 의거하여 고객에게 별도의 통지 없이 서비스 이용의 정지, 초기화, 또는 이용계약 해지와 같은 조치를 취할 수 있습니다.")}
              </p>
              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 11 (Bồi thường Thiệt hại) </>) :
                ("제11조 (손해 배상) ")}</h3>
              <p style={{ fontSize: 14 }}>
                {language === "VI" ? (<>Công ty không chịu trách nhiệm đối với bất kỳ thiệt hại nào liên quan đến việc sử dụng các dịch vụ được cung cấp miễn phí, trừ những vấn đề được quy định trong Chính sách bảo vệ thông tin cá nhân.</>) :
                  ("회사는 개인정보 보호정책에서 정한 사항을 제외하고, 무료로 제공되는 서비스의 이용과 관련하여 발생하는 어떠한 손해에 대해서도 책임지지 않습니다.")}
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 12 (Điều khoản Miễn trừ Trách nhiệm)</>) :
                ("제12조 (면책 조항)")}</h3>
              <p style={{ fontSize: 14 }}>01
                {language === "VI" ? (<> Công ty được miễn trách nhiệm cung cấp dịch vụ trong trường hợp không thể cung cấp dịch vụ do thiên tai, chiến tranh và các trường hợp bất khả kháng tương đương khác.</>) :
                  ("회사는 천재지변, 전쟁 및 이에 준하는 불가항력적인 사유로 인해 서비스를 제공할 수 없는 경우 서비스 제공에 대한 책임이 면제됩니다.")}
              </p>
              <p style={{ fontSize: 14 }}>02
                {language === "VI" ? (<> Công ty được miễn trách nhiệm nếu thiệt hại phát sinh do nhà cung cấp dịch vụ viễn thông đường trục ngừng hoặc không cung cấp dịch vụ viễn thông một cách bình thường.</>) :
                  ("회사는 기간 통신 사업자가 통신 서비스를 정상적으로 중단하거나 제공하지 않아 손해가 발생한 경우 책임이 면제됩니다.")}
              </p>
              <p style={{ fontSize: 14 }}>03
                {language === "VI" ? (<> Công ty được miễn trách nhiệm đối với các thiệt hại phát sinh do các lý do bất khả kháng như bảo trì, thay thế, kiểm tra định kỳ hoặc thi công thiết bị phục vụ dịch vụ.</>) :
                  ("회사는 서비스 설비의 보수, 교체, 정기 점검 또는 공사 등 불가피한 사유로 인해 발생한 손해에 대해 책임이 면제됩니다.")}
              </p>
              <p style={{ fontSize: 14 }}>04
                {language === "VI" ? (<> Công ty không chịu trách nhiệm về các trở ngại hoặc thiệt hại trong việc sử dụng dịch vụ do lỗi của Khách hàng. </>) :
                  ("회사는 고객의 귀책 사유로 인한 서비스 이용의 장애나 손해에 대해 책임지지 않습니다.")}
              </p>
              <p style={{ fontSize: 14 }}>05
                {language === "VI" ? (<> Công ty không chịu trách nhiệm nếu thiệt hại phát sinh do lỗi máy tính của khách hàng, hoặc do Khách hàng khai báo thông tin cá nhân và địa chỉ email không đầy đủ hoặc sai sót. </>) :
                  ("회사는 고객의 컴퓨터 오류로 인해 발생한 손해, 또는 고객이 개인 정보 및 이메일 주소를 불완전하거나 부정확하게 기재하여 발생한 손해에 대해 책임지지 않습니다.")}
              </p >
              <p>06
                {language === "VI" ? (<> Công ty không chịu trách nhiệm đối với việc Khách hàng không đạt được hoặc bị mất đi lợi nhuận mong đợi khi sử dụng dịch vụ. </>) :
                  ("회사는 고객이 서비스를 이용함으로써 기대하는 이익을 얻지 못하거나 손실을 입은 것에 대해 책임지지 않습니다.")}
              </p>
              <p style={{ fontSize: 14 }}>07
                {language === "VI" ? (<> Công ty không chịu trách nhiệm đối với các thiệt hại do tài liệu mà Khách hàng có được trong quá trình sử dụng dịch vụ. Ngoài ra, Công ty không có trách nhiệm bồi thường cho những tổn thất tinh thần mà Khách hàng phải chịu do các khách hàng khác trong quá trình sử dụng dịch vụ. </>) :
                  ("회사는 고객이 서비스를 이용하는 과정에서 얻은 자료로 인해 발생한 손해에 대해 책임지지 않습니다. 또한, 회사는 고객이 서비스를 이용하는 동안 다른 고객들로부터 입은 정신적 손해에 대해 배상할 책임이 없습니다.")}
              </p>
              <p style={{ fontSize: 14 }}>08
                {language === "VI" ? (<> Công ty không chịu trách nhiệm đối với các thiệt hại do tài liệu mà Khách hàng có được trong quá trình sử dụng dịch vụ. Ngoài ra, Công ty không có trách nhiệm bồi thường cho những tổn thất tinh thần mà Khách hàng phải chịu do các khách hàng khác trong quá trình sử dụng dịch vụ. </>) :
                  ("회사는 고객이 서비스에 게재한 정보, 자료, 사실 등의 신뢰도, 정확성 및 기타 내용에 대해 책임지지 않습니다")}
              </p>
              <p style={{ fontSize: 14 }}>09
                {language === "VI" ? (<> Công ty không chịu trách nhiệm đối với các thiệt hại do tài liệu mà Khách hàng có được trong quá trình sử dụng dịch vụ. Ngoài ra, Công ty không có trách nhiệm bồi thường cho những tổn thất tinh thần mà Khách hàng phải chịu do các khách hàng khác trong quá trình sử dụng dịch vụ. </>) :
                  ("회사는 서비스를 통해 고객 간 또는 고객과 제3자 사이에 발생한 분쟁에 개입할 의무가 없으며, 이로 인해 발생한 손해를 배상할 책임이 없습니다.")}
              </p>
              <p style={{ fontSize: 14 }}>10
                {language === "VI" ? (<> Công ty không chịu trách nhiệm đối với các thiệt hại do tài liệu mà Khách hàng có được trong quá trình sử dụng dịch vụ. Ngoài ra, Công ty không có trách nhiệm bồi thường cho những tổn thất tinh thần mà Khách hàng phải chịu do các khách hàng khác trong quá trình sử dụng dịch vụ. </>) :
                  ("회사는 고객에게 무료로 제공하는 서비스의 이용과 관련하여 발생하는 어떠한 손해에 대해서도 책임지지 않습니다.")}
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>{language === "VI" ? (<>Điều 13 (Quyền Tài phán và Luật Áp dụng) </>) :
                ("제13조 (재판권 및 준거법)")}</h3>
              <p style={{ fontSize: 14 }}>01 {language === "VI" ? (<>Các vấn đề không được quy định rõ ràng trong Điều khoản này sẽ tuân theo pháp luật liên quan như Luật Doanh nghiệp Viễn thông và các tập quán thương mại. </>) :
                ("본 약관에 명시되지 않은 사항은 전기통신사업법 등 관련 법령 및 상관례에 따릅니다.")}</p>
              <p style={{ fontSize: 14 }}>02 {language === "VI" ? (<>Đối với Khách hàng sử dụng dịch vụ trả phí cố định và các dịch vụ trả phí khác của Công ty, sẽ tuân theo các điều khoản và chính sách riêng do Công ty đặt ra. </>) :
                ("회사의 정액제 유료 서비스 및 기타 유료 서비스를 이용하는 고객에 대해서는 회사가 별도로 정한 약관 및 정책에 따릅니다.")}</p>
              <p style={{ fontSize: 14 }}>03 {language === "VI" ? (<>Trong trường hợp có tranh chấp phát sinh do việc sử dụng dịch vụ và được đưa ra tòa án, tòa án có thẩm quyền sẽ là tòa án quản hạt nơi đặt trụ sở chính của Công ty.</>) :
                ("서비스 이용으로 인해 분쟁이 발생하여 소송이 제기될 경우, 관할 법원은 회사의 본사 소재지를 관할하는 법원으로 합니다.")}</p>
            </div>

          </div>
        );

      case "personal-information":
        return (
          <div style={{ marginTop: 20, textAlign: "justify" }}>
            <div
              style={{
                maxWidth: 900,
                margin: "60px auto",
                padding: 20,
                lineHeight: 1.8,
                color: "#111827",
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif"
              }}
            >
              <h1 style={{ textAlign: "center", fontWeight: 700, fontSize: 28, marginBottom: 40 }}>
                {language === "VI" ? (<>CHÍNH SÁCH XỬ LÝ THÔNG TIN CÁ NHÂN</>) :
                  ("개인정보 처리방침 (個人情報 處理方針)")}
              </h1>

              <p style={{ fontSize: 14 }}>
                {language === "VI" ? (<>1. <b>Các mục thông tin cá nhân được xử lý ONE PASS INC. </b> ONE PASS INC. (sau đây gọi là <b>"Công ty"</b>)đang xử lý các mục thông tin cá nhân sau:</>) :
                  (<>1. <b>처리하는 개인정보 항목 ONE PASS INC. </b>(이하 <b>"회사"</b>라 한다)는 다음의 개인정보 항목을 처리하고 있습니다.</>)}
              </p>
              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>a. <b>Đăng ký tư vấn </b></>) :
                  (<>a. <b>상담 신청</b></>)}
              </p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<><b>Yêu cầu nhập: </b>Tên, Email, Số điện thoại di động</>) :
                  (<><b>필수 입력 항목:</b> 성명, 이메일, 휴대전화 번호</>)}</li>
                <li>{language === "VI" ? (<><b>Tùy chọn nhập:  </b>(Không có thông tin được liệt kê)</>) :
                  (<><b>선택 입력 항목:</b> (기재된 정보 없음)</>)}</li>
              </ul>
              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>b. <b>Trong quá trình sử dụng dịch vụ internet, các mục thông tin cá nhân sau có thể được tự động tạo và thu thập:</b></>) :
                  (<><b>인터넷 서비스 이용 과정에서 다음과 같은 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다:</b></>)}
              </p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Địa chỉ IP, Cookie, Địa chỉ MAC, Lịch sử sử dụng dịch vụ, Lịch sử truy cập, Lịch sử sử dụng không đúng quy tắc, v.v.</>) :
                  (<>IP 주소, 쿠키, MAC 주소, 서비스 이용 기록, 접속 기록, 부정 이용 기록 등.</>)}</li>
              </ul>


              <p style={{ fontSize: 14 }}>
                {language === "VI" ? (<>2. <b>Mục đích xử lý thông tin cá nhân</b> <br />Công ty xử lý thông tin cá nhân vì các mục đích sau. Thông tin cá nhân đang được xử lý sẽ không được sử dụng cho các mục đích nào khác ngoài các mục đích sau, và nếu mục đích sử dụng thay đổi, Công ty sẽ thực hiện các biện pháp cần thiết, chẳng hạn như nhận được sự đồng ý riêng biệt theo Điều 18 của Luật Bảo vệ Thông tin Cá nhân.</>) :
                  (<>2. <b>개인정보의 처리 목적</b> <br />회사는 다음과 같은 목적으로 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 것입니다.</>)}
              </p>
              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>a. <b>Tư vấn khách hàng</b></>) :
                  (<>a. <b>고객 상담</b></>)}
              </p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Xử lý thông tin cá nhân nhằm mục đích xác nhận ý định đăng ký khách hàng, nhận dạng/xác thực danh tính theo dịch vụ khách hàng, duy trì/quản lý tư cách khách hàng, xác nhận danh tính theo hệ thống xác minh danh tính hạn chế, ngăn chặn sử dụng dịch vụ bất chính, các loại thông báo, xử lý khiếu nại, v.v.</>) :
                  (<>고객 상담 신청 의사 확인, 고객 서비스에 따른 신원 확인/인증, 고객 자격 유지/관리, 제한적 본인확인제에 따른 본인확인, 부정 이용 방지, 각종 고지 및 통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.</>)}</li>
              </ul>


              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>b. <b>Cung cấp Dịch vụ</b></>) :
                  (<><b>서비스 제공:</b></>)}
              </p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Xử lý thông tin cá nhân nhằm mục đích cung cấp dịch vụ, cung cấp nội dung, cung cấp dịch vụ tùy chỉnh, xác thực danh tính, v.v.</>) :
                  (<>서비스 제공, 콘텐츠 제공, 맞춤형 서비스 제공, 본인 인증 등을 목적으로 개인정보를 처리합니다.</>)}</li>
              </ul>


              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>c. <b>Xử lý Khiếu nại</b> </>) :
                  (<>고충 처리</>)}
              </p>

              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Xử lý thông tin cá nhân nhằm mục đích xác nhận danh tính của người khiếu nại, xác nhận nội dung khiếu nại, liên hệ/thông báo để điều tra sự thật, thông báo kết quả xử lý, v.v.</>) :
                  (<>민원인의 신원 확인, 민원 사항 확인, 사실 조사를 위한 연락/통지, 처리 결과 통보 등을 목적으로 개인정보를 처리합니다.</>)}</li>

              </ul>

              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>d. <b>Sử dụng cho Tiếp thị và Quảng cáo:</b></>) :
                  (<><b>마케팅 및 광고에 활용:</b></>)}
              </p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Xử lý thông tin cá nhân nhằm mục đích cung cấp cơ hội tham gia sự kiện và thông tin quảng cáo, và thống kê về việc sử dụng dịch vụ của khách hàng.</>) :
                  (<>IP 주소, 쿠키, MAC 주소, 서비스 이용 기록, 접속 기록, 부정 이용 기록 등.</>)}</li>
              </ul>


              <p style={{ fontSize: 14 }}>
                {language === "VI" ? (<>3. <b>Xử lý và Thời gian lưu giữ Thông tin Cá nhân </b><br />Công ty xử lý và lưu giữ thông tin cá nhân trong phạm vi thời gian lưu giữ/sử dụng thông tin cá nhân theo luật định hoặc thời gian lưu giữ/sử dụng thông tin cá nhân đã được chủ thể thông tin đồng ý tại thời điểm thu thập.Thời gian xử lý và lưu giữ thông tin cá nhân cụ thể như sau:</>) :
                  (<>3. <b>개인정보의 처리 및 보유 기간</b><br />회사는 법령에 따른 개인정보 보유/이용 기간 또는 정보 주체로부터 개인정보 수집 시 동의 받은 개인정보 보유/이용 기간 내에서 개인정보를 처리/보유합니다. 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다:</>)}
              </p>
              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>a. <b>Tư vấn khách hàng: </b>trong thời gian tư vấn và khách hàng sử dụng dịch vụ</>) :
                  (<>a. <b>고객 상담</b>상담 기간 및 고객의 서비스 이용 기간 동안</>)}
              </p>
              <ul style={{ marginLeft: 20, fontSize: 14 }}>
                <li>{language === "VI" ? (<>Tuy nhiên, nếu thuộc các lý do sau, sẽ lưu giữ đến khi lý do đó kết thúc:</>) :
                  (<>다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 보유합니다:</>)}</li>
                <ul style={{ marginLeft: 20, fontSize: 14 }}>

                  <li>{language === "VI" ? (<>Nếu điều tra/kiểm tra đang tiến hành do vi phạm pháp luật liên quan: đến khi cuộc điều tra/kiểm tra kết thúc.</>) :
                    (<>관련 법령 위반에 따른 조사/검사가 진행 중인 경우: 해당 조사/검사 종료 시까지.</>)}</li>
                  <li>{language === "VI" ? (<>Nếu quan hệ nợ/có còn tồn tại do sử dụng trang web: đến khi thanh toán xong quan hệ nợ/có đó.</>) :
                    (<>웹사이트 이용에 따른 채권/채무 관계가 잔존하는 경우: 해당 채권/채무 관계가 정산될 때까지.</>)}</li>
                </ul>
              </ul>
              <p style={{ fontSize: 14, marginLeft: 15 }}>
                {language === "VI" ? (<>b. <b>Cung cấp Hàng hóa và Dịch vụ: Đến khi hoàn tất cung cấp hàng hóa/dịch vụ</b> hoàn tất thanh toán/quyết toán phí.</>) :
                  (<>b. <b>재화 또는 서비스 제공</b>재화/서비스 공급 완료 및 요금 결제/정산 완료 시까지.</>)}
              </p>

              <p style={{ fontSize: 14 }}>
                {language === "VI" ? (<>4. <b>Quyền từ chối đồng ý thu thập và sử dụng thông tin cá nhân </b><br />Khách hàng đăng ký sử dụng có quyền không đồng ý với việc thu thập và sử dụng thông tin cá nhân nêu trên.<br />Tuy nhiên, thông tin cá nhân nêu trên là thông tin cần thiết để 'ONE PASS INC.' vận hành trang web này, do đó, khách hàng không đồng ý với việc thu thập và sử dụng thông tin cá nhân có thể bị hạn chế trở thành khách hàng và sử dụng dịch vụ của trang web này.</>) :
                  (<>4. <b>개인정보 수집 및 이용 동의를 거부할 권리</b><br /> 이용 신청 고객은 상기 개인정보의 수집 및 이용에 대한 동의를 거부할 권리가 있습니다단, 상기 개인정보는 'ONE PASS INC.'의 본 웹사이트 운영에 필수적인 정보이므로, 개인정보 수집 및 이용에 동의하지 않는 고객은 본 웹사이트의 고객 가입 및 서비스 이용이 제한될 수 있습니다..</>)}
              </p>
            </div>

          </div>
        );

      default:
        return null;
    }
  };

  // --- GIAO DIỆN CHÍNH ---
  return (
    <>
      {/* PHẦN HERO HEADER */}
      <section
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          minHeight: "40vh",
          width: "100vw",
          paddingTop: "120px",
        }}
      >
        <div className="services-h1"
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
              color: "#ffffff",
              fontWeight: 900,
              fontSize: 60,
              lineHeight: 1.5,
              margin: 0,
              letterSpacing: 1,
            }}
          >
            {language === "VI" ? (<>HỖ TRỢ</>) : ("SUPPORT")}
          </h1>
          <style>
            {`
      /* responsive chỉ chỉnh vị trí chữ */
      @media (max-width: 768px) {
        .services-h1 {
          position: relative;
          top: 50%;
          transform: translateY(-30%);
          margin-top: 0;
          margin-bottom: 0;
        }

        .services-h1 h1 {
          font-size: 38px;
        }
      }

      @media (max-width: 480px) {
        .services-h1 {
          top: 50%;
          transform: translateY(-35%);
        }

        .services-h1 h1 {
          font-size: 28px;
        }
      }

      @media (max-width: 360px) {
        .services-h1 {
          top: 60%;
          transform: translateY(-30%);
        }

        .services-h1 h1 {
          font-size: 24px;
        }
      }
    `}
          </style>
        </div>

        <div className="consultation-bar"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            fontFamily: "sans-serif",
            zIndex: 9999,
          }}
        >
          {/* --- Bên trái --- */}
          <div
            style={{
              background: "#d7c199",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 16px",
              height: "100%",
              minWidth: 310,
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16 }}>📞</span>
              <span style={{ fontWeight: 700, fontSize: 16 }}>
                {language === "VI" ? (<>Điện thoại</>) : ("전화번호")}
              </span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 16, marginTop: 2 }}>
              (+82) 051-715-0607
            </div>
          </div>

          {/* --- Giữa --- */}
          <div
            style={{
              flex: 1,
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: "0 14px",
              height: "100%",
            }}
          >
            <label style={{ fontSize: 16 }}>{language === "VI" ? (<>Dịch vụ</>) : ("서비스 선택")}</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: 6,
                padding: "6px 10px",
                fontSize: 16,
                width: 160,
                height: 38,
                boxSizing: "border-box",
                marginRight: 15
              }}
            >
              <option value="">{language === "VI" ? (<>Chọn dịch vụ</>) : ("서비스 선택")}</option>
              <option value="인증 센터">{language === "VI" ? (<>Chứng thực</>) : ("인증 센터")}</option>
              <option value="결혼 이민">{language === "VI" ? (<>Kết hôn</>) : ("결혼 이민")}</option>
              <option value="출생신고 대행">{language === "VI" ? (<>Khai sinh, khai tử</>) : ("출생신고 대행")}</option>
              <option value="국적 대행">{language === "VI" ? (<>Quốc tịch</>) : ("국적 대행")}</option>
              <option value="여권 • 호적 대행">{language === "VI" ? (<>Hộ chiếu, Hộ tịch</>) : ("여권 • 호적 대행")}</option>
              <option value="입양 절차 대행">{language === "VI" ? (<>Nhận nuôi </>) : ("입양 절차 대행")}</option>
              <option value="비자 대행">{language === "VI" ? (<>Thị thực</>) : ("비자 대행")}</option>
              <option value="법률 컨설팅">{language === "VI" ? (<>Tư vấn pháp lý</>) : ("법률 컨설팅")}</option>
              <option value="B2B 서비스">{language === "VI" ? (<>Dịch vụ B2B</>) : ("B2B 서비스")}</option>
              <option value="기타">{language === "VI" ? (<>Khác </>) : ("기타")}</option>
            </select>

            <label style={{ fontSize: 16, marginLeft: 15, }}>{language === "VI" ? (<>Họ tên</>) : ("이름")}</label>
            <input
              placeholder={language === "VI" ? ("Họ tên") : ("이름")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "none",
                fontSize: 16,
                width: 160,
                height: 38,
                boxSizing: "border-box",

                marginRight: 15
              }}
              required
              pattern="[A-Za-z가-힣À-ỹ\s]{2,}"
              title="Họ tên phải có ít nhất 2 ký tự, chỉ bao gồm chữ cái hoặc tiếng Hàn."
            />

            <label style={{ fontSize: 16 }}>{language === "VI" ? (<>Điện thoại</>) : ("전화번호")}</label>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: 6,
                padding: "6px 10px",
                fontSize: 16,
                width: 100,
                height: 38,
                boxSizing: "border-box",
              }}
            >
              <option value="">{language === "VI" ? (<>Chọn</>) : ("이름")}</option>
              <option value="+82">+82</option>
              <option value="+84">+84</option>
            </select>

            <input
              placeholder={language === "VI" ? "Số điện thoại" : "전화번호"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "none",
                fontSize: 16,
                width: 160,
                height: 38,
                boxSizing: "border-box",
              }}
              pattern={
                countryCode === "+82"
                  ? "[0-9]{9,11}"
                  : countryCode === "+84"
                    ? "[0-9]{9,10}"
                    : ".*"
              }
              title={
                countryCode === "+82"
                  ? "Số điện thoại Hàn Quốc phải có 9–11 chữ số."
                  : countryCode === "+84"
                    ? "Số điện thoại Việt Nam phải có 9–10 chữ số."
                    : "Vui lòng chọn mã quốc gia trước khi nhập số điện thoại."
              }
            />

            <label
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 16,
                gap: 4,
                color: "#bbb",
                whiteSpace: "nowrap",
                marginLeft: 20
              }}
            >
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                style={{ marginRight: 6 }}
              />
              {language === "VI" ? (<>Đồng ý xử lý thông tin cá nhân</>) : ("개인정보 수집 및 이용 동의")}
            </label>
          </div>

          {/* --- Nút gửi --- */}
          <div
            onClick={loading ? undefined : handleSubmit}
            style={{
              width: 310,
              background: "#d7c199",
              color: "#fff",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 24px",
              height: "100%",
              cursor: loading ? "not-allowed" : "pointer",
              fontSize: 16,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading
              ? language === "VI"
                ? "Đang gửi..."
                : "전송 중..."
              : language === "VI"
                ? "Tư vấn"
                : "상담 신청"}
          </div>
        </div>
        <div className="social-container">
          {items.map((item) => {
            const isExpanded = effectiveId === item.id;
            return (
              <div
                key={item.id}
                className={`social-btn ${isExpanded ? "expanded" : ""}`}
                onMouseEnter={() => setHoverId(item.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => {
                  setActiveId((prev) => (prev === item.id ? null : item.id));
                  window.open(item.link, "_blank");
                }}
              >
                <img src={item.icon} alt={item.name} className="icon" />
                <span className="label"> {language === "VI" ? (
                  item.name === "페이스북" ? "Liên Kết Facebook"
                    : item.name === "카카오톡" ? " Liên Kết KakaoTalk"
                      : item.name === "Zalo" ? <>Liên Kết Zalo</>
                        : item.name === "네이버" ? "Liên Kết Naver"
                          : item.name
                ) : (
                  item.name
                )}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* PHẦN TAB VÀ NỘI DUNG */}
      <section
        style={{
          background: "#fff",
          minHeight: 400,
          width: "100vw",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1250,
            margin: "0 auto",
            fontFamily: "Pretendard, sans-serif",
          }}
        >
          {/* --- THANH TAB --- */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #d1d5db",
            }}
          >
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                style={{
                  flex: 1,
                  textAlign: "center",
                  padding: "12px 0",
                  cursor: "pointer",
                  fontWeight: activeTab === tab.id ? "600" : "400",
                  color: activeTab === tab.id ? "#111827" : "#9ca3af",
                  position: "relative",
                  transition: "all 0.2s ease-in-out",
                }}
              >

                {language === "VI" ? (
                  tab.label === "이용약관" ? "Điều khoản sử dụng"
                    : tab.label === "개인 정보 처리 방침" ? "Xử lý thông tin cá nhân"
                      : tab.label === "Contact" ? <>Liên hệ</>
                        : tab.label === "진행 현황 조회" ? "Tra cứu hồ sơ"
                          : tab.label
                ) : (
                  tab.label
                )}
                {/* --- GẠCH CHÂN TAB ĐANG ACTIVE --- */}
                {activeTab === tab.id && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: 3,
                      width: "100%",
                      backgroundColor: "#111827",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>

          {/* --- NỘI DUNG TAB --- */}
          <div style={{ padding: "20px 10px", minHeight: 180 }}>
            {renderTabContent()}
          </div>
        </div>
      </section>
    </>
  );
}

export default Support;
