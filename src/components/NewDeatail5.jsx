import React from "react";
import n1 from "../assets/img/n19.png";
import n2 from "../assets/img/n2.png";
import n3 from "../assets/img/n3.png";
import n4 from "../assets/img/N4.png";
import n5 from "../assets/img/n5.png";
import n6 from "../assets/img/n6.png";
import heroBg from "../assets/img/herobanner-1.png";
import consulate from "../assets/img/n3.png";
import fbIcon from "../assets/img/image20.png";
import kakaotalkIcon from "../assets/img/image17.png";
import zaloIcon from "../assets/img/image18.png";
import naverIcon from "../assets/img/image19.png";
import { useLanguage } from "../LanguageContext.jsx";
import { useState, useEffect } from "react";
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
                TenHinhThuc: null, 
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
                            <option value="출입국 행정 대행">{language === "VI" ? (<>Xuất nhập cảnh</>) : ("출입국 행정 대행")}</option>
                            <option value="신분증명 서류 대행">{language === "VI" ? (<>Giấy tờ tuỳ thân</>) : ("신분증명 서류 대행")}</option>
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
                            <option value="">{language === "VI" ? (<>Chọn</>) : ("선택")}</option>
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
                            textAlign: "justify"
                        }}
                    >

                        {language === "VI" ? (<>“Xin chào”... Tổng lãnh sự quán Việt Nam tại Busan sẽ khai trương vào tháng 9</>) : ("“씬짜오(안녕하세요)”…‘주부산 베트남 총영사관’ 9월 개관")}
                    </h1>

                    <p style={{ fontSize: "14px", marginBottom: "10px", textAlign: "justify" }}>

                        {language === "VI" ? (<>Nguồn: https://www.busan.go.kr/news/totalnews01/view?dataNo=71719&gugun=Next</>) : (" 출처: https://www.busan.go.kr/news/totalnews01/view?dataNo=71719&gugun=Next")}
                    </p>

                    <p style={{ fontSize: "14px", marginBottom: "20px", textAlign: "justify" }}>

                        {language === "VI" ? (<>Tổng Lãnh sự quán Việt Nam chuẩn bị có mặt tại Thành phố Busan . Ngày 13 tháng 8 vừa qua, thành phố Busan đã tổ chức Lễ Khởi động Tổng Lãnh sự quán Việt Nam tại Busan kết hợp với Lễ kỷ niệm 30 năm thiết lập quan hệ thành phố kết nghĩa Busan – TP. Hồ Chí Minh tại Khách sạn Lotte Busan.<br />Tham dự sự kiện có các nhân vật chủ chốt của khu vực Busan, cùng với Tổng Bí thư Đảng Cộng sản Việt Nam Tô Lâm (đang trong chuyến thăm cấp nhà nước tại Hàn Quốc) và Bà Đoàn Phương Lan, Tân Tổng Lãnh sự Việt Nam tại Busan.</>) : (<>부산에 주베트남 총영사관이 들어선다. 부산광역시는 지난 8월 13일 부산 롯데호텔에서 주부산 베트남 총영사관 출범식과 부산-호찌민 자매도시 결연 30주년 기념식을 열었다.
                            <br />
                            이날 행사에는 부산지역 주요 인사와 국빈 방한 중인 또 럼 베트남 공산당 서기장, 도안 프엉 란 신임 주부산 베트남 총영사 등이 함께했다.</>)}
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


                    <div style={{ fontSize: "14px", marginBottom: "40px", textAlign: "justify" }}>
                        <p>
                            {language === "VI" ? (<>[Hình ảnh: Thành phố Busan tổ chức Lễ Khởi động Tổng Lãnh sự quán Việt Nam và Lễ kỷ niệm 30 năm kết nghĩa Busan – TP. Hồ Chí Minh tại Khách sạn Lotte Busan vào ngày 13 tháng 8 (Ảnh là tiết mục chúc mừng tại Lễ ra mắt).]</>) : ("△부산시는 지난 8월 13일 부산 롯데호텔에서 주부산 베트남 총영사관 출범식과 부산-호찌민 자매도시 결연 30주년 기념식을 열었다(사진은 주부산 베트남 총영사관 출범식 축하 공연) ")}
                        </p>

                        <p>

                            {language === "VI" ? (<>Tổng Lãnh sự quán sẽ thực hiện rộng rãi các chức năng và vai trò ngoại giao, từ các nghiệp vụ lãnh sự cơ bản như bảo hộ công dân, cấp thị thực (visa) cho đến các hoạt động giao lưu kinh tế và văn hóa. Tổng Lãnh sự quán Việt Nam tại Busan là cơ quan ngoại giao chính thức thứ hai của Việt Nam được thành lập tại Hàn Quốc, sau Đại sứ quán Việt Nam tại Seoul. Cơ quan này dự kiến sẽ chính thức khai trương tại Tòa nhà Hyupsan e-Centum Class One, Centum City, quận Haeundae vào tháng 9 này.</>) : ("총영사관은 재외국민 보호와 비자 발급 같은 기본적인 영사 업무와 경제·문화 교류 등 외교적 기능과 역할까지 폭넓게 수행한다. 주부산 베트남 총영사관은 서울에 있는 주한 베트남 대사관에 이어 국내에 설치되는 2번째 공식 외교 공관이다. 9월 중 해운대구 센텀시티 벽산e센텀클래스원에서 정식 개관할 예정이다.")}
                        </p>
                        <p>

                            {language === "VI" ? (<>Việc khai trương Tổng Lãnh sự quán Việt Nam được kỳ vọng sẽ nâng cao hơn nữa vị thế của Busan, vốn đang hướng tới mục tiêu trở thành thành phố trung tâm toàn cầu. Hiện tại, Busan có tổng cộng 9 Tổng Lãnh sự quán của các quốc gia như Hoa Kỳ, Nhật Bản, Trung Quốc, Nga, Mông Cổ, Kazakhstan, Panama, Bồ Đào Nha, New Zealand. Việt Nam sẽ là Tổng Lãnh sự quán thứ 10.</>) : ("베트남 총영사관 개관으로 글로벌 허브도시 부산 위상은 더 높아질 전망이다. 현재 부산에는 미국, 일본, 중국, 러시아, 몽골, 카자흐스탄, 파나마, 포르투갈, 뉴질랜드 등 9개 국가 총영사관이 있다. 베트남은 10번째 총영사관이다.")}
                        </p>
                        <p>

                            {language === "VI" ? (<>
                                Lý do Tổng Lãnh sự quán Việt Nam được thành lập tại Busan là bởi cộng đồng người Việt đang là cộng đồng người nước ngoài lớn nhất trong khu vực, với khoảng 14.000 người sinh sống tại Busan. Đặc biệt, có nhiều người Việt đang làm việc trong các ngành công nghiệp cốt lõi của Busan như cảng biển, logistics và đóng tàu. Việc thành lập Tổng Lãnh sự quán dự kiến sẽ giảm bớt sự bất tiện cho người dân khi phải di chuyển đến Đại sứ quán tại Seoul để xử lý các vấn đề dân sự như hộ chiếu hay hỗ trợ pháp lý, đồng thời tăng cường sự thuận tiện và hỗ trợ. Quan hệ giao lưu và hợp tác giữa hai nước cũng được kỳ vọng sẽ ngày càng được củng cố.</>) : ("부산에 베트남 총영사관이 들어선 것은 부산지역 외국인 거주자 중 베트남 교민이 가장 많은 1만4천여 명이 거주하고 있기 때문이다. 특히 항만·물류·조선업 등 부산지역 핵심 산업에 종사하는 이들이 많다. 총영사관 개설로 여권 업무, 법률 지원 등 민원 처리를 위해 서울의 대사관까지 가야 했던 불편은 덜어주고 편리와 도움은 늘어날 것으로 예상한다. 양국 교류와 협력도 한층 강화될 전망이다.")}
                        </p>


                        <p>
                            {language === "VI" ? (<>Thành phố Busan đã thúc đẩy ngoại giao tích cực với Việt Nam. Sau khi Việt Nam và Hàn Quốc thiết lập quan hệ ngoại giao vào năm 1992, Busan đã ký kết quan hệ kết nghĩa với TP. Hồ Chí Minh vào năm 1995. TP. Hồ Chí Minh được mệnh danh là thủ đô kinh tế của Việt Nam và có vị thế không hề kém cạnh thủ đô Hà Nội.</>) : ("부산시는 베트남과 활발한 도시 외교를 펼쳐왔다. 1992년 우리나라와 베트남이 수교한 뒤 3년 만인 1995년 호찌민시와 자매결연을 체결했다. 호찌민은 베트남의 경제수도로 불리며 수도인 하노이 못지않은 도시 위상을 지녔다.")}

                        </p>
                        <p>
                            {language === "VI" ? (<>Thành phố Busan đã thúc đẩy ngoại giao tích cực với Việt Nam. Sau khi Việt Nam và Hàn Quốc thiết lập quan hệ ngoại giao vào năm 1992, Busan đã ký kết quan hệ kết nghĩa với TP. Hồ Chí Minh vào năm 1995. TP. Hồ Chí Minh được mệnh danh là thủ đô kinh tế của Việt Nam và có vị thế không hề kém cạnh thủ đô Hà Nội.</>) : ("부산시는 자매결연에 이어 2008년 호찌민시에 무역사무소를 개설해 지역기업의 베트남 진출을 적극 지원하고 있다. 공무원 초청 연수, 한글학교 지원 사업 등 다양한 교류를 활발히 추진했다.")}

                        </p>
                        <p>
                            {language === "VI" ? (<>Sau khi kết nghĩa, vào năm 2008, thành phố Busan đã mở Văn phòng Thương mại tại TP. Hồ Chí Minh để tích cực hỗ trợ các doanh nghiệp địa phương mở rộng hoạt động sang Việt Nam. Hai bên đã thúc đẩy nhiều hoạt động giao lưu đa dạng như chương trình tập huấn cho công chức và hỗ trợ trường học tiếng Hàn.</>) : ("베트남 총영사관 개관으로 글로벌 허브도시 부산 위상은 더 높아질 전망이다. 현재 부산에는 미국, 일본, 중국, 러시아, 몽골, 카자흐스탄, 파나마, 포르투갈, 뉴질랜드 등 9개 국가 총영사관이 있다. 베트남은 10번째 총영사관이다.            ")}
                        </p>
                        <p>

                            {language === "VI" ? (<>Tại sự kiện, Tổng Bí thư Tô Lâm (người có vị trí số 1 trong thứ bậc quốc gia của Việt Nam) phát biểu: “Trong suốt 30 năm qua, Busan và TP. Hồ Chí Minh đã duy trì mối quan hệ tốt đẹp, và chúng tôi hy vọng hai bên sẽ tiếp tục thúc đẩy các dự án kinh tế, thương mại, đặc biệt là trong các lĩnh vực cơ sở hạ tầng như cảng biển."</>) : ("베트남 국가 서열 1위인 또 럼 서기장은 이날 행사에서 “지난 30년 동안 부산과 호찌민은 좋은 관계를 유지했고, 앞으로도 경제와 무역, 특히 항만 등과 같은 인프라 분야에서 사업을 함께 추진하면 좋겠다”라고 말했다.")}
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
                        <p style={{ color: "#000000ff", fontSize: "14px", marginTop: "20px", fontWeight: "600" }}>

                            {language === "VI" ? (<>∎THÀNH PHỐ HỒ CHÍ MINH & BUSAN: QUAN HỆ THÀNH PHỐ KẾT NGHĨA</>) : ("∎베트남 호찌민은?")}
                        </p>
                        <p>
                            {language === "VI" ? (<>Thành phố Hồ Chí Minh, đô thị lớn nhất và là trung tâm kinh tế hàng đầu của Việt Nam, và thành phố Busan (Hàn Quốc) đã chính thức ký kết quan hệ thành phố kết nghĩa vào ngày 03 tháng 11 năm 1996.</>) : ("베트남 남부에 자리한 호찌민은 베트남의 최대 도시이자 경제·문화의 중심지이다. 1975년에 패망한 베트남 공화국(남베트남)의 수도였다. 옛 명칭인 ‘사이공(Sài Gòn)’으로도 잘 알려져 있다.")}

                        </p>

                        <p>
                            {language === "VI" ? (<>TP. Hồ Chí Minh là nơi có số lượng người Hàn Quốc sinh sống đông đảo nhất tại Việt Nam. Đặc biệt, khu phố người Hàn (K-Town) đã được hình thành tại khu vực Phú Mỹ Hưng, nằm ở ngoại ô phía Nam thành phố. Busan và TP. Hồ Chí Minh đã ký kết quan hệ thành phố kết nghĩa vào ngày 03 tháng 11 năm 1995.</>) : (<> △베트남 호찌민 인민 청사 모습.<br />
                                호찌민은 베트남에서 우리나라 교민이 가장 많이 살고 있다. 도시 남쪽 외곽에 자리한 푸미흥(Phú My Hưng)에는 코리아타운이 형성돼 있다. 부산과 호찌민은 1995년 11
                                <br />
                                월 3일 자매도시 결연을 맺었다.</>)}

                        </p>

                        <p style={{ color: "#363636ff", fontSize: "14px", marginTop: "20px" }}>

                            {language === "VI" ? (<>sáng lúc 09:00 Sáng | Ngày 01 tháng 09 năm 2025n</>) : ("2025년 09월  01일 | 오전 09:00 게시")}
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
                        {language === "VI" ? (<>Tin tức liên quan</>) : ("관련 뉴스")}
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
                                {language === "VI" ? (<>09:00 Sáng | Ngày 30 tháng 09 năm 2025</>) : (" 2025년 09월 30일 | 오전 09:00")}
                            </p>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: 8,
                                }}
                            >
                                {language === "VI" ? (<>Thông báo lịch nghỉ Tết Trung thu Hàn Qu...</>) : ("추석 연휴 휴무 안내")}
                            </h3>
                            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                {language === "VI" ? (<>Kính gửi Quý Khách hàng và Đối tác, One Pass xin trân trọng thông báo lịch nghỉ Tết Trung thu năm</>) : ("안녕하세요. 고객 여러분께 저희 원패스는 추석 연휴를 맞아 아래와 같이 휴무를 시행함을 알려드립니다...")}
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
                        <div
                            onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail2")}
                        >
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
                                {language === "VI" ? (<>09:00 Sáng | Ngày 30 tháng 09 năm 2025</>) : (" 2025년 09월 30일 | 오전 09:00")}
                            </p>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: 8,
                                }}
                            >
                                {language === "VI" ? (<>Tổng lãnh sự quán Việt Nam tại Busan chí...</>) : ("주부산 베트남 총영사관 공식 개소")}
                            </h3>
                            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                {language === "VI" ? (<>Ngày 01 tháng 10 năm 2025, Tổng Lãnh sự quán Việt Nam tại Busan đã chính thức đi vào hoạt đ...</>) : (" 2025년 10월 1일, 주부산 베트남 총영사관이 공식적으로 문을 개시하며... ")}
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
                        <div onClick={() => (window.location.href = "/news전체 뉴스/NewsDetail3")}>
                            <img
                                src={n3}
                                alt="원패스(One Pass) 업무 개시"
                                style={{
                                    width: "100%",
                                    height: 215.91,
                                    borderRadius: 8,
                                    marginBottom: 12,
                                    objectFit: "cover",
                                }}
                            />
                            <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 6 }}>
                                {language === "VI" ? (<>09:00 Sáng | Ngày 25 tháng 09 năm 2025</>) : (" 2025년 09월 25일 | 오전 09:00")}
                            </p>
                            <h3
                                style={{
                                    fontSize: 16,
                                    fontWeight: 700,
                                    color: "#111827",
                                    marginBottom: 8,
                                }}
                            >
                                {language === "VI" ? (<>Kể từ tháng 10/2025, One Pass chính thức ...</>) : ("원패스(One Pass) 공식 업무 개시 안내")}
                            </h3>
                            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                                {language === "VI" ? (<>Chúng tôi xin vui mừng thông báo: Công ty cung cấp giải pháp và đại diện thực hiện thủ tục hành ...</>) : ("2025년 10월 1일, 원패스가 고객 여러분을 찾아갑니다...")}
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
