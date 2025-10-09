import { useState } from "react";
import vcpcLogo from "../assets/img/vcpc-header.png";
import meetingImg from "../assets/img/image8.png";
import heroBg from "../assets/img/herobanner-1.png";
import imgProfessional from "../assets/img/8.png";
import imgTrust from "../assets/img/7.png";
import imgEfficiency from "../assets/img/6.png";
import imgCustomer from "../assets/img/5.png";

function Support() {
  const [address] = useState(
    "(48059) 부산광역시 해운대구 센텀동로 99, 915 - 916호 (재송동, 벡산이센텀클래스원)"
  );

  const mapQuery = encodeURIComponent("Centumdong-ro 99, Haeundae-gu, Busan");
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;


  const [activeTab, setActiveTab] = useState("profile-search");

  // --- DANH SÁCH CÁC TAB ---
  const tabs = [
    { id: "profile-search", label: "진행 현황 조회" },
    { id: "contact", label: "Contact" },
    { id: "Terms-of-Use", label: "이용약관" },
    { id: "personal-information", label: "개인 정보 처리 방침" },
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
          <div style={{ marginTop: 20 }}>
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
              서비스 준비중
            </div>
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
              <div
                style={{
                  flex: "1 1 420px",
                  minWidth: 360,
                  maxWidth: 560,
                  color: "#0B2447",
                }}
              >
                <div
                  style={{
                    color: "#2F4D90",
                    fontWeight: 800,
                    fontSize: 18,
                    marginBottom: 10,
                  }}
                >
                  찾아오시는 길
                </div>
                <h3
                  style={{
                    fontWeight: 900,
                    fontSize: 32,
                    lineHeight: 1.35,
                    margin: "0 0 18px 0",
                  }}
                >
                  고객과 함께 걸어온 발자취,
                  <br />
                  끝까지 함께 하겠습니다.
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
                      평일 09:00 ~ 18:00 <br />
                      (점심 12:00~13:00, 주말 공휴일 휴무)
                    </div>
                  </div>

                  {/* 대중교통 */}
                  <div style={{ fontSize: 18 }}>🚌</div>
                  <div>
                    <div style={{ fontWeight: 800, marginBottom: 6 }}>대중교통</div>
                    <div style={{ color: "#334155" }}>
                      센텀시티역(2호선) / 100-1, 155, 200, 31, 5-1번
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
            <div style={{ fontFamily: "'Roboto', sans-serif", maxWidth: 900, margin: "60px auto", padding: 20, lineHeight: 1.8, color: "#111827", fontSize: 15 }}>
              <h1 style={{ textAlign: "center", fontWeight: 700, fontSize: 28, marginBottom: 40 }}>이용약관</h1>

              <p style={{ marginBottom: 30 }}>
                본 이용약관은 ONE PASS INC. (이하 '회사'라 한다)가 제공하는 웹사이트 서비스 이용과 관련하여 이용 조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제1조 (목적)</h3>
              <p style={{ marginTop: 10 }}>
                본 이용약관 (이하 '약관'이라 한다)은 회사 (ONE PASS INC.)가 제공하는 고객 서비스의 등록 및 이용 조건과 ONE PASS INC. (이하 '회사'라 한다)와 이용 고객 (이하 '고객'이라 한다) 간의 기타 필요한 사항을 구체적으로 규정함을 목적으로 합니다.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제2조 (약관의 효력 및 변경)</h3>
              <p>01 본 약관은 ONE PASS INC. 웹사이트에 온라인으로 공시됨으로써 효력이 발생하며, 합리적인 사유 발생 시 관련 법령을 위배하지 않는 범위 내에서 개정될 수 있습니다.</p>
              <p>02 개정된 약관은 온라인으로 공지됨으로써 효력이 발생하며, 고객의 권리나 의무 등 중요한 규정 변경은 사전에 고지합니다.</p>
              <p>03 회사는 합리적인 사유가 발생할 경우 약관을 변경할 수 있으며, 약관을 변경하는 경우 회사는 지체 없이 이를 사이트에 공시합니다.</p>
              <p>04 본 약관에 동의하는 것은 정당한 절차 변경 사항을 확인하기 위해 정기적으로 서비스를 방문하는 것에 동의하는 것을 의미하며, 회사는 변경된 약관 정보를 알지 못함으로 발생하는 고객의 손해에 대하여 책임지지 않습니다.</p>
              <p>05 고객이 개정된 약관에 동의하지 않을 경우, 고객 자체 계약 (계약 해지)을 요청할 수 있으며, 개정된 약관 효력 발생일로부터 7일 이내에 거부 의사를 표시하지 않고 서비스를 지속 이용할 경우, 약관 변경에 동의한 것으로 간주됩니다.</p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제3조 (약관 외 준칙)</h3>
              <p>01 본 약관은 회사가 제공하는 제반 서비스와 관련된 이용 안내 (이하 ‘서비스별 안내’라 한다)와 함께 적용됩니다.</p>
              <p>02 본 약관에 명시되지 않은 사항에 대해서는 관련 법령 및 서비스별 안내 규정에 따릅니다.</p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제4조 (개인 정보 보호 및 이용)</h3>
              <p>
                회사는 정보통신망법 규정이 정하는 바에 따라 고객 등록 등 관련 정보를 포함하여 개인 정보 보호에 힘쓰며 노력합니다. 고객의 개인 정보 보호 및 이용에 대해서는 관련 법령 및 회사의 개인 정보 처리 방침에 따릅니다.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제5조 (회사의 의무)</h3>
              <p>01 회사는 안정적 서비스 제공을 위해 최선을 다하며, 특별한 사정이 없는 한 지속적이고 안정적인 서비스를 제공하기 위해 노력합니다.</p>
              <p>02 회사는 고객으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우 즉시 처리해야 하며, 즉시 처리가 곤란할 경우 그 사유와 처리 일정을 고객에게 통보합니다.</p>
              <p>03 회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계 법령을 준수합니다.</p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제6조 (고객의 의무)</h3>
              <p>01 고객은 등록 또는 고객 정보 변경 시 모든 정보를 사실대로 기재해야 하며, 사실과 다르거나 타인의 정보를 도용한 경우 일체의 권리를 주장할 수 없습니다.</p>
              <p>02 고객은 본 약관 및 회사가 정한 기타 일반 규정, 공지사항을 준수해야 하며, 회사의 명예를 훼손하는 행위를 해서는 안 됩니다.</p>
              <p>03 고객은 주소, 연락처, 이메일 주소 등의 이용자 정보가 변경된 경우 관련 절차를 거쳐 회사에 즉시 알려야 합니다.</p>
              <p>04 고객은 회사의 사전 승인 없이 서비스의 이용권한을 양도, 증여할 수 없으며, 회사의 명시적인 동의 없이 이를 담보로 제공할 수 없습니다.</p>
              <p>05 고객은 회사 및 제3자의 지적재산권을 침해해서는 안 됩니다.</p>
              <p>06 고객은 다음 행위를 해서는 안 되며, 이를 위반할 경우 회사는 고객에게 서비스 이용 제한 및 적절한 법적 조치를 취할 수 있습니다:</p>
              <ul style={{ marginLeft: 20 }}>
                <li>회사의 운영을 방해하는 행위</li>
                <li>허위 정보를 등록하는 행위</li>
                <li>타인의 개인정보를 무단으로 수집, 저장, 유포하는 행위</li>
                <li>회사의 허락 없이 정보 및 콘텐츠를 복제, 전송, 배포하는 행위</li>
                <li>서비스 운영에 지장을 주는 행위</li>
              </ul>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제7조 (회사의 의무)</h3>
              <p>
                회사는 안정적인 서비스 제공을 위하여 최선을 다하며, 기술적 장애나 불가항력적인 사유 발생 시 가능한 한 빠른 복구를 위해 노력합니다.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제9조 (광고 게재 및 광고와의 거래)</h3>
              <p>01 회사가 고객에게 서비스를 제공할 수 있도록 하는 서비스 투자에 기반을 둔 일부는 광고 게재를 통해 수익에서 나옵니다.</p>
              <p>02 회사는 고객이 서비스에 게재된 광고를 통해 발생한 거래에 대하여 책임지지 않습니다.</p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제10조 (서비스 이용 제한)</h3>
              <p>
                01 고객이 서비스 이용 시 본 약관 제11조의 내용을 위반하거나 다음 각 호의 하나에 해당하는 경우 회사는 서비스 이용을 제한할 수 있습니다.
              </p>
              <ul style={{ marginLeft: 20 }}>
                <li>다른 고객을 상대로 모욕하거나 서비스 이용을 방해하는 경우</li>
                <li>기타 서비스의 정상적 운영을 방해하는 경우</li>
              </ul>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제11조 (손해 배상)</h3>
              <p>
                회사는 개인정보보호정책에서 정한 사항을 제외하고, 무료로 제공되는 서비스의 이용과 관련하여 발생하는 어떠한 손해에도 책임지지 않습니다.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제12조 (면책 조항)</h3>
              <p>
                01 회사는 천재지변, 전쟁 및 이에 준하는 불가항력적인 사유로 인한 서비스 제공이 불가능할 경우 책임이 면제됩니다.
              </p>
              <p>
                02 회사는 기간 통신 사업자 또는 서버 장애로 인하여 서비스가 중단되거나 이용 불가능한 경우 책임이 면제됩니다.
              </p>
              <p>
                03 회사는 고객의 귀책사유로 인한 서비스 이용 장애에 대해 책임지지 않습니다.
              </p>
              <p>
                04 회사는 고객이 서비스를 이용하면서 기대하는 이익을 얻지 못한 손실에 대해 책임지지 않습니다.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제13조 (재판권 및 준거법)</h3>
              <p>01 본 약관에 명시되지 않은 사항은 관계 법령 및 상관례에 따릅니다.</p>
              <p>02 회사와 고객 간 발생한 분쟁에 대하여는 대한민국 법을 준거법으로 합니다.</p>
            </div>

          </div>
        );

      case "personal-information":
        return (
          <div style={{ marginTop: 20 }}>
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
                개인정보 처리방침
              </h1>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제1조 (개인정보 항목)</h3>
              <p>
                ONE PASS INC. (이하 "회사"라 한다)는 다음의 개인정보 항목을 처리하고 있습니다.
              </p>
              <p>
                01 상담 신청<br />
                필수 입력 항목: 성명, 이메일, 휴대전화 번호, 주소, 지역<br />
                선택 입력 항목: (기재된 정보 없음)
              </p>
              <p>
                02 인터넷 서비스 이용 과정에서 다음과 같은 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다:<br />
                IP 주소, 쿠키, MAC 주소, 서비스 이용 기록, 접속 기록, 부정 이용 기록 등.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제2조 (개인정보의 처리 목적)</h3>
              <p>
                회사는 다음과 같은 목적으로 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 외의 용도로는 사용되지 않으며,
                이후 목적이 변경될 시에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 것입니다.
              </p>
              <p>
                01 고객 상담<br />
                고객 상담 신청 접수 확인, 고객 서비스에 따른 신원 확인/인증, 고객 자격 유지/관리, 재확인 본인확인절차에 따른 본인확인 및
                부정 이용 방지, 각종 고지 및 통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.
              </p>
              <p>
                02 서비스 제공<br />
                서비스 제공, 콘텐츠 제공, 맞춤형 서비스 제공, 본인 인증 등을 목적으로 개인정보를 처리합니다.
              </p>
              <p>
                03 고충 처리<br />
                민원인의 신원 확인, 민원 사항 확인, 사실 조사를 위한 연락/통지, 처리 결과 통보 등을 목적으로 개인정보를 처리합니다.
              </p>
              <p>
                04 마케팅 및 광고에 활용<br />
                이벤트 참여 기회 및 광고성 정보 제공, 고객의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제3조 (개인정보의 처리 및 보유기간)</h3>
              <p>
                회사는 법령에 따른 개인정보 보유/이용 기간 또는 정보 주체로부터 개인정보를 수집 시 동의 받은 개인정보 보유/이용 기간
                내에서 개인정보를 처리/보유합니다. 구체적인 개인정보의 처리 및 보유 기간은 다음과 같습니다.
              </p>
              <p>
                01 고객 상담: 상담 기간 및 고객 서비스 이용 기간 동안<br />
                단, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 보유합니다.<br />
                - 관련 법령 위반에 따른 조사/수사 진행 중인 경우: 해당 조사/수사 종료 시까지<br />
                - 서비스 이용에 따른 채권/채무 관계가 존속하는 경우: 해당 채권/채무 관계 정산 완료 시까지
              </p>
              <p>
                02 재화 또는 서비스 제공: 재화/서비스 공급 완료 및 요금 결제/정산 완료 시까지
              </p>

              <h3 style={{ fontWeight: 700, fontSize: 18, marginTop: 40 }}>제4조 (개인정보 수집 및 이용 동의를 거부할 권리)</h3>
              <p>
                이용자는 상담 신청 과정에서 개인정보의 수집 및 이용에 대해 동의를 거부할 권리가 있습니다. 단, 상기 개인정보는 ‘ONE PASS INC.’의 본
                웹사이트 운영에 필수적인 정보이므로, 이에 동의하지 않을 시 상담 접수 및 서비스 이용이 제한될 수 있습니다.
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
              color: "#ffffff",
              fontWeight: 900,
              fontSize: 60,
              lineHeight: 1.5,
              margin: 0,
              letterSpacing: 1,
            }}
          >
            SUPPORT
          </h1>
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
                {tab.label}

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
